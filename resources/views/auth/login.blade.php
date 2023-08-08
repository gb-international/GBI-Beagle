@extends('admin.app')

@section('content')
{{-- <form method="POST" action="{{ secure_asset(env('APP_URL').'/login') }}"> --}}
<form method="POST" action="{{ route('login') }}">
    @csrf
<div>
    <div class="row justify-content-center" style="margin:auto;">
        <div class="col-md-4" id="admin_login_form">
            
            <p class="text-center"><img class="admin_logo" src="{{asset('assets/admin/default/icon/admin_logo.png')}}"></p>
            {{-- <p class="text-center"><img class="admin_logo" src="{{secure_asset('assets/admin/default/icon/admin_logo.png')}}"></p> --}}
            

                <div class="form-group">
                    <input id="email" type="email" placeholder="Enter Email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                    @if ($errors->has('email'))
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                    @endif
                </div>

                <div class="form-group">
                        <input id="password" placeholder="Enter Password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                        @if ($errors->has('password'))
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                        @endif
                    
                </div>

                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                        <label class="form-check-label" for="remember">
                            {{ __('Remember Me') }}
                        </label>
                    </div>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block btn-extra">
                        {{ __('Login') }}
                    </button>

                    @if (Route::has('password.request'))
                        <a class="btn btn-link" href="{{ route('password.request') }}">
                            {{ __('Forgot Your Password?') }}
                        </a>
                    @endif
                   
                </div>
            
        </div>
    </div>
</div>
</form>
@endsection
@section('style')
<style>
.btn-extra{
    color: #333059 !important; 
    font-weight: 600;
}
.btn-extra:hover{
    color: white !important; 
}
.admin_logo{
    width: 150px;
    height:auto;
}
</style>
@endsection