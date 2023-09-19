<?php
namespace App\Http\Controllers;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
 /**
     * @OA\Info(
     *      version="1.0.0",
     *      title="GBI API Documentation",
     *      description="Details on all apis for GBI Website will be listed below.",
     *      @OA\Contact(
     *          email="admin@gbinternational.com"
     *      ),
     * )
     *
     * @OA\Server(
     *      url=L5_SWAGGER_CONST_HOST,
     *      description="GBI API Server"
     * )
    */
class Controller extends BaseController
{
    
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
