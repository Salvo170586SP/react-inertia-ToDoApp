<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $userId = Auth::user()->id;

        $todos =  Todo::where('user_id', $userId)->get();



        return Inertia::render('Dashboard', compact('todos'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $todo = new Todo();
        $todo->user_id = Auth::user()->id;
        $todo->title = $request->title;
        $todo->description = $request->description;
        /*   if (array_key_exists('img_url', $request->all())) {
            $url = Storage::put('/draw_imgs', $request['img_url']);
            $todo->img_url = $url;
        } */
        $todo->save();

        return to_route('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(Todo $todo)
    {
     }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Todo $todo)
    {
        if ($todo->user_id == Auth::id()) {
            return Inertia::render('Edit', compact('todo'));
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Todo $todo)
    {



        $todo->update([
            'title' => $request->title,
            'description' => $request->description,
        ]);



        return to_route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo)
    {
        if ($todo->user_id == Auth::id()) {
            $todo->delete();
        }
        return to_route('dashboard');
    }

    public function isComplete(Todo $todo)
    {

        if ($todo->is_complete == 0) {
            $active = 1;
        } else {
            $active = 0;
        }

        $todo->is_complete = $active;
        $todo->save();

        return to_route('dashboard');
    }
}
