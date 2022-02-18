<?php

namespace App\Http\Controllers;

use App\Models\FileManager;
use http\Url;
use Illuminate\Http\Request;
use Telegram\Bot\Laravel\Facades\Telegram;

class TelegramController extends Controller
{
    public function updatedActivity()
    {
        $activity = Telegram::getUpdates();
        dd($activity);
    }


    public function sendMessage(Request $request)
    {

        $data = FileManager::find(25);
        $text = "A new convert apk2aab \n"
            . "<b>Email Address: </b>\n"
            . "$data->email\n"
            . "<b>Email Address: </b>\n"
            . "$data->phone\n"
            . "<b>File: </b>\n"
            . "$data->file_apk \n"
            . "<b>Detail: </b>\n"
            . ""
        ;
        dd(url()->asset('detail'));

        Telegram::sendMessage([
            'chat_id' => env('TELEGRAM_CHANNEL_ID', ''),
            'parse_mode' => 'HTML',
            'text' => $text
        ]);

        return 1;
    }

}
