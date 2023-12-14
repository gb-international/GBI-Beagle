<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Response;
use Illuminate\Http\Request;

class School
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $guard = null)
    {
        if(!Auth::guard('school-api')->user()){
            return Response::json(array("message"=>"Unauthenticated."), 401);
        }
        return $next($request);
    }
}
