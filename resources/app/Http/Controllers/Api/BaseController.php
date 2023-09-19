<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Faker\Core\Number;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use stdClass;

class BaseController extends Controller
{
   /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */

    public function sendResponse($data='', string $message, int $status_code = 200)
    {
        $response = [
            'status' => true,
            'status_code' => $status_code,
            'message' => $message,
            'data'    => $data,
        ];


        return response()->json($response, 200);
    }
    /**
     * return error response.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendError(string $error, int $status_code = 404)
    {
        $response = [
            'status' => false,
            'status_code' => $status_code,
            'message' => $error,
        ];
        if (!empty($errorMessages)) {
            $response['data'] = $errorMessages;
        }
        return response()->json($response, $status_code);
    }

}
