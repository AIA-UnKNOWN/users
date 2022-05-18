<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AddUserController extends Controller
{
    function __invoke(Request $request)
    {
        $request->validate([
            'firstName' => 'required',
            'lastName' => 'required'
        ]);

        $user = new User;
        $user->first_name = $request->get('firstName');
        $user->last_name = $request->get('lastName');
        $user->save();

        return response()->json(201);
    }
}
