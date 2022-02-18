<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\TelegramController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/clear-cache',function (){
    echo  Artisan::call('optimize:clear');
});
Route::get('/link',function (){
    Artisan::call('storage:link');
});

Route::get('/updated-activity', [TelegramController::class, 'updatedActivity'])->name('telegram.updatedActivity');
Route::get('/send-message', [TelegramController::class, 'sendMessage'])->name('telegram.sendMessage');



Route::get('/', [HomeController::class, 'index'])->name('home.index');
Route::get('/info', [HomeController::class, 'info'])->name('home.info');
Route::get('/contact', [HomeController::class, 'contact'])->name('home.contact');
Route::post('/upload', [HomeController::class, 'upload'])->name('home.upload');
Route::get('/detail/{id}', [HomeController::class, 'detail'])->name('home.detail');

