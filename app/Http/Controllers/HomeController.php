<?php

namespace App\Http\Controllers;

use App\Jobs\PutFile;
use App\Models\FileManager;
use DateTime;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

use Telegram\Bot\Laravel\Facades\Telegram;


class HomeController extends Controller
{
    public function index(Request $request){
        return view('content.home.index');
    }
    public function info(){
        return view('content.home.info');
    }
    public function contact(){
        return view('content.home.contact');
    }
    public function upload(Request $request){
        $rules = [
            'File'=> 'required|mimes:apk,zip',
            'g-recaptcha-response' => function ($attribute, $value, $fail) {
                $secretKey = config('services.recaptcha.secret');
                $response = $value;
                $userIP = $_SERVER['REMOTE_ADDR'];
                $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$response&remoteip=$userIP";
                $response = \file_get_contents($url);
                $response = json_decode($response);
                if(!$response->success){
                    Session::flash('g-recaptcha-response','please check reCaptcha');
                    Session::flash('alert-class','alert-danger');
                    $fail('Vui lòng chọn reCaptcha');
                }
            },
        ];
        $message = [
            'File.mimes'=>'Định dạng file: APK',
            'File.required'=>'Vui lòng nhập chọn file định dạng APK.',
        ];
        $error = Validator::make($request->all(),$rules, $message );
        if($error->fails()){
            return response()->json(['errors'=> $error->errors()->all()]);
        }

        $data = new FileManager();
        $data['uuid'] = Str::uuid()->toString();;
        $data['name'] = $request->Name;
        $data['email'] = $request->Email;
        $data['phone'] = $request->Phone;
        $file = $request->File;
        $filenameWithExt = $file->getClientOriginalName();
        $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
        $name =  preg_replace('/[^A-Za-z0-9\-\']/', '_', $filename);
        $extension = $file->getClientOriginalExtension();
        $fileNameToStore = $name.'_'.time().'.'.$extension;
        $now = new \DateTime('now'); //Datetime
        $monthNum = $now->format('m');
        $dateObj   = DateTime::createFromFormat('!m', $monthNum);
        $monthName = $dateObj->format('F'); // Month
        $year = $now->format('Y'); // Year
        $monthYear = $monthName.$year;
        $path=Storage::disk('file_apk')->putFileAs($monthYear,$file, $fileNameToStore);
        $data['file_apk'] = $path;
//        dd($data['uuid']);
        PutFile::dispatch($path);
        $data->save();
        $phone = $request->Phone ?  "<b>Phone: </b>\n". "$request->Phone \n" : "";
        $text = "A new convert apk2aab \n"
            . "<b>Email Address: </b>\n"
            . "$request->Email\n"
            . $phone
            . "<b>File: </b>\n"
            . "$filenameWithExt \n"
            . "<b>Detail: </b>\n"
            . url()->asset('detail').'/'.$data->uuid
        ;

        Telegram::sendMessage([
            'chat_id' => env('TELEGRAM_CHANNEL_ID', ''),
            'parse_mode' => 'HTML',
            'text' => $text
        ]);
        return response()->json(['success'=>'Thành công']);
    }
    public function detail($id){
        $data = FileManager::where('uuid',$id)->first();
        $file_path =  Storage::disk('file_apk')->path($data->file_apk);
        $file = pathinfo($file_path);
        $file['size'] = $this->filesize_formatted($file_path);
        $file['name'] = File::name($file_path);
        $file['path'] = $file_path;
        $file['email'] = $data->email;
        $file['user'] = $data->name;
        $file['phone'] = $data->phone;
        $file['file_apk'] = $data->file_apk;
        $file['created_at'] = $data->created_at->format('d-m-Y');
        $files_info = $file;
//        dd($files_info);
        return view('content.home.detail',compact('files_info'));

    }
    function filesize_formatted($path)
    {
        $size = File::size($path);
        $units = array( 'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB');
        $power = $size > 0 ? floor(log($size, 1024)) : 0;
        return number_format($size / pow(1024, $power), 2, '.', ',') . ' ' . $units[$power];
    }

}
