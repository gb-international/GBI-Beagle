<?php

namespace App\Providers;
use Laravel\Passport\Passport;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Carbon\Carbon;

//use App\Auth\Grants\OtpGrant;
//use App\Passport\Bridge\RefreshTokenRepository;
//use League\OAuth2\Server\AuthorizationServer;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        /*app(AuthorizationServer::class)->enableGrantType(
            $this->makeOtpGrant(), 
            Passport::tokensExpireIn()
        );*/

        Passport::routes();
        Passport::tokensExpireIn(Carbon::now()->addDays(5));
        Passport::refreshTokensExpireIn(Carbon::now()->addDays(5));

        Gate::before(function ($user, $ability) {
            return $user->hasRole('Admin') ? true : null;
        });
        // Passport::tokensCan([
        //     'edu_institutes' => 'For education institute',
        // ]);

    }

    /*protected function makeOtpGrant()
    {
        $grant = new otpGrant(
            $this->app->make(RefreshTokenRepository::class)
        );
        $grant->setRefreshTokenTTL(Passport::refreshTokensExpireIn(Carbon::now()->addDays(5)));
        return $grant;
    }*/
}
