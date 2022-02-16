<?php

namespace App\Http\Controllers;

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
//        $request->validate([
//            'email' => 'required|email',
//            'message' => 'required'
//        ]);

        $text = "Chào a đẹp trai";

        Telegram::sendMessage([
            'chat_id' => env('TELEGRAM_CHANNEL_ID', ''),
            'parse_mode' => 'HTML',
            'text' => $text
        ]);

        return 1;
    }

}
