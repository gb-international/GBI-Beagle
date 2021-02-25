<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Expires" content="-1">
  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
  <title>{{ config('app.name', 'Laravel') }}</title>
  <!-- Fonts -->
  <link rel="dns-prefetch" href="//fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
  <script src='https://kit.fontawesome.com/a076d05399.js'></script>

  <meta property="og:title" content="G.B International is a travel educational specialist for young minds.">
  <meta property="og:site_name" content="gowithgbi.com">
  <meta property="og:url" content="https://www.gowithgbi.com/travel-and-education#/">
  <meta property="og:description" content="GBI is a travel educationist rooted in experiential learning. It has tailored made itineraries reflect the classroom curricula and support academic objective.">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://www.gowithgbi.com/assets/front/images/banner2.jpg">
  <!-- Styles -->
  <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<body>

  <div>
    <div id="app">
      <front></front>
    </div>
  </div>

  <script src="{{ secure_asset('js/app.js') }}" type="text/javascript"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</body>
</html>
