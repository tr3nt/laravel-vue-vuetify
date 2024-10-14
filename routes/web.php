<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;

Route::get('/{vue?}', function () { return view('app'); })
    ->where('vue', '[\/\w\.-]*');

Route::post('/logout', [LoginController::class, 'logout']);

//Auth::routes();
