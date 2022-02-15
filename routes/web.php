<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StaterkitController;
use App\Http\Controllers\LanguageController;

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

Route::get('/', [HomeController::class, 'index'])->name('home.index');
Route::get('/info', [HomeController::class, 'info'])->name('home.info');
Route::post('/upload', [HomeController::class, 'upload'])->name('home.upload');





//Route::get('/', [StaterkitController::class, 'home'])->name('home');
//Route::get('home', [StaterkitController::class, 'home'])->name('home');
//// Route Components
//Route::get('layouts/collapsed-menu', [StaterkitController::class, 'collapsed_menu'])->name('collapsed-menu');
//Route::get('layouts/full', [StaterkitController::class, 'layout_full'])->name('layout-full');
//Route::get('layouts/without-menu', [StaterkitController::class, 'without_menu'])->name('without-menu');
//Route::get('layouts/empty', [StaterkitController::class, 'layout_empty'])->name('layout-empty');
//Route::get('layouts/blank', [StaterkitController::class, 'layout_blank'])->name('layout-blank');


// locale Route
//Route::get('lang/{locale}', [LanguageController::class, 'swap']);
