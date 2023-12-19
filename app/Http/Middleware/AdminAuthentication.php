<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Response;

class AdminAuthentication
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $guard = Auth::getDefaultDriver();
        $customer_type = trim(str_replace("-api", "", $guard));
        $user = Auth::guard($guard)->user();
        if($user->user_role_id != 1){
            return Response::json(['error' => 'UnAuthorised'], 401);
        }
        return $next($request);  
    }
}
