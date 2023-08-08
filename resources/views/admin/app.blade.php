<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <!-- Scripts -->
    {{-- <script src="{{ secure_asset('js/admin/app.js') }}" defer></script> --}}
    <script src="{{ asset('js/admin/app.js') }}" defer></script>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
    <script src="https://cdn.socket.io/4.0.1/socket.io.min.js" integrity="sha384-LzhRnpGmQP+lOvWruF/lgkcqD+WDVt9fU3H4BWmwP5u5LTmkUGafMcpZKNObVMLU" crossorigin="anonymous"></script>

    <!-- Styles -->
    {{-- <link href="{{ secure_asset('css/admin/app.css') }}" rel="stylesheet"> --}}
    <link href="{{ asset('css/admin/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <div  id="admin_login">
        <main class="py-4">
            @yield('content')
        </main>
    </div>
</div>
</body>
@yield('style')
</html>
