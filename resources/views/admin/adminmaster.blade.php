<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>GBI-Panel</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">  
    <meta name="csrf-token" content="{{ csrf_token() }}">    
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

    <link href="{{ asset('css/admin/app.css') }}" rel="stylesheet">
    {{-- <link href="{{ secure_asset('css/admin/app.css') }}" rel="stylesheet"> --}}
     
</head>
<body class="hold-transition sidebar-mini">
<div class="wrapper" id="app">
    <nav class="main-header navbar navbar-expand navbar-white navbar-light" id="sidebarnavigation">
      <div class="navbar-nav">
        <admin-nav-top />
      </div>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown admin_top_right_icon">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <p class="user_icon">U</p>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-header"></span>
            <div class="dropdown-divider"></div>
            {{-- <a class="dropdown-item" href="{{ secure_asset(env('APP_URL').'/logout') }}" --}}
            <a class="dropdown-item" href="{{ route('logout') }}"
               onclick="event.preventDefault();
                             document.getElementById('logout-form').submit();">
                {{ __('Logout') }}
            </a>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
            <!-- <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a> -->
          </div>
        </li>
      </ul>
    </nav>
    <aside class="main-sidebar elevation-4" id="admin_top_logo">
      <a href="/"  class="brand-link logo_link">
          {{-- <img src="{{secure_asset('admin_logo.png')}}"
              alt="GBI Logo" class="brand-image"> --}}
          <img src="{{asset('admin_logo.png')}}"
              alt="GBI Logo" class="brand-image">
        <span class="brand-text font-weight-light">.</span>
      </a>
        <div class="sidebar">
            @include('admin.router')
        </div>
    </aside>

        <div class="content-wrapper pr-3 pl-3" style="background: white !important;">
            <admin-main></admin-main>
        </div>

    <footer class="main-footer">
      <div class="float-right d-none d-sm-block">
          <b>Term & Condition</b>
      </div>
      <strong> &copy; 2023 <a href="#">admin</a>.</strong> All rights
      reserved.
    </footer>
</div>

<!-- ./wrapper -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="/js/admin/adminlte.js"></script>
<script>
  @auth
    window.Permissions = {!! json_encode(Auth::user()->allPermissions, true) !!};
    window.userId = {!! json_encode(Auth::user()->id, true) !!};
    window.userRole = {!! json_encode(Auth::user()->user_role, true) !!};
    window.userRoleId = {!! json_encode(Auth::user()->user_role_id, true) !!};
    //Permission Values
    window.deletePerms = {!! json_encode(\App\Model\RoleAndPermission\UserRolePermission::where('user_roles_id', Auth::user()->user_role_id)->where('delete', 'true')->get(), true) !!};
    window.createPerms = {!! json_encode(\App\Model\RoleAndPermission\UserRolePermission::where('user_roles_id', Auth::user()->user_role_id)->where('create', 'true')->get(), true) !!};
    window.editPerms = {!! json_encode(\App\Model\RoleAndPermission\UserRolePermission::where('user_roles_id', Auth::user()->user_role_id)->where('edit', 'true')->get(), true) !!};
    window.viewPerms = {!! json_encode(\App\Model\RoleAndPermission\UserRolePermission::where('user_roles_id', Auth::user()->user_role_id)->where('view', 'true')->get(), true) !!};
    window.publishPerms = {!! json_encode(\App\Model\RoleAndPermission\UserRolePermission::where('user_roles_id', Auth::user()->user_role_id)->where('publish', 'true')->get(), true) !!};

    //console.log(window.userPerms);
  @else
    window.Permissions = [];
  @endauth

</script>


  {{-- <script src="{{ secure_asset('js/admin/admin.js') }}"></script> --}}
  <script src="{{ asset('js/admin/admin.js') }}"></script>

<style>
  .tags-input {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.tags-input input {
    flex: 1;
    background: transparent;
    border: none;
}

.tags-input input:focus {
    outline: none;
}

.tags-input input[type="text"] {
    color: #495057;
    height:  45px;
    padding-left: 13px; 
}

.tags-input-wrapper-default {

    background: #fff;
}

.tags-input-wrapper-default.active {
    box-shadow: 0 0 0 0.2em rgba(13, 110, 253, 0.25);
    outline: 0 none;
}

/* The tag badges & the remove icon */
.tags-input span {
    margin-right: 0.3em;
}

.tags-input-remove {
    cursor: pointer;
    position: absolute;
    display: inline-block;
    right: 0.3em;
    top: 0.3em;
    padding: 0.5em;
    overflow: hidden;
}

.tags-input-remove:focus {
    outline: none;
}

.tags-input-remove:before, .tags-input-remove:after {
    content: '';
    position: absolute;
    width: 75%;
    left: 0.15em;
    background: #5dc282;
    
    height: 2px;
    margin-top: -1px;
}

.tags-input-remove:before {
    transform: rotate(45deg);
}
.tags-input-remove:after {
    transform: rotate(-45deg);
}

/* Tag badge styles */
.tags-input-badge {
    position: relative;
    display: inline-block;
    padding: .85em .85em;
    font-size: 15px;
    font-weight: 400;
    line-height: 1;
    text-align: left;
    white-space: nowrap;
    vertical-align: baseline;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: none !important;
}

.tags-input-badge-pill {
    padding-right: 1.25em;
    padding-left: 0.6em;
}
.tags-input-badge-pill.disabled {
    padding-right: 0.6em;
}

.tags-input-badge-selected-default {
    color: #212529;
    background-color: #f0f1f2;
}

/* Typeahead */
.typeahead-hide-btn {
    color: #999 !important;
    font-style: italic;
    display: none;
}

.typeahead-badges{
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  background-color: white;
  font-size: 15px !important;
  color: black;
  position: absolute;
  z-index: 999;
}
/* Typeahead - badges */
.typeahead-badges > span {
    margin-top: .5em;
}

.typeahead-badges > span {
    cursor: pointer;
    margin-right: 0.3em;
}

/* Typeahead - dropdown */
.typeahead-dropdown {
    list-style-type: none;
    padding: 0;
    margin: 0;
    position: absolute;
    width: 100%;
    z-index: 1000;
}

.typeahead-dropdown li {
    padding: .25em 1em;
    cursor: pointer;
}

/* Typeahead elements style/theme */
.tags-input-typeahead-item-default {
    color: #171f36;
}

.tags-input-typeahead-item-highlighted-default {
    color: white;
    background-color: #171f36 !important;
}
li a{
    color: #333059 !important;
  }
.nav-link:hover{
    background-color: #333059fa !important;
    color: white !important;
  }
</style>

</body>
</html>
