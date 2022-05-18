<?php

namespace App\Http\Controllers\Log;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Log;

class AddController extends Controller
{
    function __invoke(Request $request)
    {
        $log = new Log;
        $log->url = $request->get('url');
        $log->response_data = $request->get('responseData');
        $log->save();
        return response()->json(201);
    }
}
