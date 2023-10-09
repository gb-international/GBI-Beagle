<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Closure;
use Illuminate\Support\Facades\Auth;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    // protected function redirectTo($request)
    // {
        
        // }
        public function handle($request, Closure $next, ...$guards)
        {
            if($request->is('api/*')){
                if (!Auth::guard('school-api')->check()) {
                    return response()->json([
                        'message' => 'Unauthentication',
                        'status' => 401
                    ], 401);
                }
                else{
                    return $next($request);
                }
            }
            if (! $request->expectsJson()) {
                return route('login');
            }  
            return $next($request);
    }
}
