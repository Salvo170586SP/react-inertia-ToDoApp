<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TodoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

/* Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard'); */

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/dashboard', [TodoController::class, 'index'])->name('dashboard');
  
    Route::post('/dashboard/todos/store', [TodoController::class, 'store'])->name('todos.store');
    Route::get('/dashboard/todos/{todo}', [TodoController::class, 'edit'])->name('todos.edit');
    Route::post('/dashboard/todos/{todo}', [TodoController::class, 'update'])->name('todos.update');
    Route::get('/dashboard/todos/{todo}/isComplete', [TodoController::class, 'isComplete'])->name('todos.isComplete');
    Route::delete('/dashboard/todos/{todo}', [TodoController::class, 'destroy'])->name('todos.destroy');
});

require __DIR__ . '/auth.php';
