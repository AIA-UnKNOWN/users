<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UsersController extends Controller
{
    function __invoke(Request $request)
    {
        $users = User::get();
        return response()->json($users);
    }
}
