<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('portfolio');
});
// routes/web.php
Route::get('/projects', function () {
    return view('project'); // Pastikan file project.blade.php ada di folder resources/views
})->name('projects');
// routes/web.php
Route::get('/about', function () {
    return view('about'); // Pastikan file project.blade.php ada di folder resources/views
})->name('about');