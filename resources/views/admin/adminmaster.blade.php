<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Admin Panel</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">  
    <meta name="csrf-token" content="{{ csrf_token() }}">    
    <link href="{{ asset('css/admin/app.css') }}" rel="stylesheet">
    <!-- <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.18/css/jquery.dataTables.min.css"> -->

</head>
<body class="hold-transition sidebar-mini">
<!-- Site wrapper -->
<div class="wrapper" id="app">
    <!-- /.navbar -->
    <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light" id="sidebarnavigation">
    <!-- SEARCH FORM -->
    

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Messages Dropdown Menu -->
      <li class="nav-item">
        <form class="form-inline ml-3">
          <div class="input-group input-group-sm">
            <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
            <div class="input-group-append">
              <button class="btn btn-navbar" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </li>      
      <!-- Notifications Dropdown Menu -->
      <li class="nav-item dropdown admin_top_right_icon">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <p class="user_icon">U</p>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-header"></span>
          <div class="dropdown-divider"></div>
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
  <!-- /.navbar -->
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4" id="admin_top_logo">
        <!-- Brand Logo -->
        <a href="/home"  class="brand-link logo_link">
            <img src="{{asset('assets/admin/default/icon/logo.png')}}"
                 alt="AdminLTE Logo"
                 class="brand-image">
            <span class="brand-text font-weight-light">.</span>
        </a>
        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar Menu -->
            <nav class="mt-2" id="mynavigation">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <!-- Add icons to the links using the .nav-icon class
                         with font-awesome or any other icon font library -->
                    <li class="nav-item has-treeview">
                        <router-link to="/" class="nav-link dashboard_color">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>Dashboard</p>
                        </router-link>
                    </li>
                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                          <i class="nav-icon far fa-file-alt"></i>
                          <p>
                            Itinerary
                            <i class="right fas fa-angle-right"></i>
                          </p>
                        </a>
                        <ul class="nav nav-treeview">
                          <li class="nav-item">
                            <router-link to="/itinerary-list" class="nav-link">
                              
                              <p> Itinerary List</p>
                            </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link to="/add-itinerary" class="nav-link">
                              
                              <p> Add Itinerary</p>
                            </router-link>
                          </li>
                          <!-- <li class="nav-item">
                            <router-link to="/table" class="nav-link">
                              
                              <p>Table</p>
                            </router-link>
                          </li> -->
                          <li class="nav-item">
                            <router-link to="/day" class="nav-link">
                              
                              <p>Itinerary Day</p>
                            </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link to="/add-itinerary-old" class="nav-link">
                              
                              <p> Account Itinerary</p>
                            </router-link>
                          </li>
                          
                          <li class="nav-item">
                            <router-link to="/view-itinerary" class="nav-link">
                              
                              <p>Itinerary View</p>
                            </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link to="/itinerary-department" class="nav-link">
                              
                              <p> Department</p>
                            </router-link>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                          <i class="nav-icon fas fa-hotel"></i>
                          <p>
                            Hotel Detail
                            <i class="right fas fa-angle-right"></i>
                          </p>
                        </a>
                        <ul class="nav nav-treeview">
                          <li class="nav-item">
                            <router-link to="/hotel-list" class="nav-link">
                              
                              <p> Hotel List</p>
                            </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link to="/add-hotel" class="nav-link">
                              
                              <p> Add Hotel </p>
                            </router-link>
                          </li>
                        </ul>
                      </li>

                      <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                          <i class="nav-icon fas fa-car"></i>
                          <p>
                            Transport
                            <i class="right fas fa-angle-right"></i>
                          </p>
                        </a>
                        <ul class="nav nav-treeview">
                          <li class="nav-item">
                            <router-link to="/transport-list" class="nav-link">
                             
                              <p> Transport List</p>
                            </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link to="/add-transport" class="nav-link">
                             
                              <p> Add Transport</p>
                            </router-link>
                          </li>
                        </ul>
                      </li>

                      <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                          <i class="nav-icon fas fa-universal-access"></i>
                          <p>
                            Sales Department
                            <i class="right fas fa-angle-right"></i>
                          </p>
                        </a>
                        <ul class="nav nav-treeview">
                          <li class="nav-item">
                            <router-link to="/sales-department-list" class="nav-link">
                              
                              <p> Sales Department List</p>
                            </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link to="/add-sales-department" class="nav-link">
                              
                              <p>Add Sales Department</p>
                            </router-link>
                          </li>
                        </ul>
                      </li>

                      <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                          <i class="nav-icon fas fa-male"></i>
                          <p>
                            Escort
                            <i class="right fas fa-angle-right"></i>
                          </p>
                        </a>
                        <ul class="nav nav-treeview">
                          <li class="nav-item">
                            <router-link to="/escort-list" class="nav-link">
                              
                              <p> Escort List</p>
                            </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link to="/add-escort" class="nav-link">
                              
                              <p> Add Escort</p>
                            </router-link>
                          </li>
                        </ul>
                      </li>

                      <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                          <i class="nav-icon far fa-user-circle"></i>
                          <p>
                            Client
                            <i class="right fas fa-angle-right"></i>
                          </p>
                        </a>
                        <ul class="nav nav-treeview">
                          <li class="nav-item">
                            <router-link to="/client-list" class="nav-link">
                              
                              <p> Client List</p>
                            </router-link>
                          </li>
                          <li class="nav-item">
                            <router-link to="/add-client" class="nav-link">
                              
                              <p> Add Client</p>
                            </router-link>
                          </li>
                        </ul>
                      </li>
                    
                    <!-- <li class="nav-item">
                        <router-link to="/category-list" class="nav-link">
                            <i class="nav-icon fa fa-th"></i>
                            <p>Category</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/post-list"  class="nav-link">
                            <i class="nav-icon fa fa-th"></i>
                            <p>
                                Post-->
                               <!--  <span class="right badge badge-danger">New</span> -->
                            <!--</p>
                        </router-link>
                    </li> -->
                    
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <admin-main></admin-main>
    </div>
    <!-- /.content-wrapper -->

    <footer class="main-footer">
        <div class="float-right d-none d-sm-block">
            <b>Term & Condition</b>
        </div>
        <strong> &copy; 2019 <a href="#">admin</a>.</strong> All rights
        reserved.
    </footer>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
        <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
</div>

<!-- ./wrapper -->




<script src="{{ asset('js/admin/app.js') }}"></script>
<!-- <script src="https://cdn.datatables.net/1.10.18/js/jquery.dataTables.min.js"></script> -->
<!-- <script type="text/javascript">
  $(document).ready(function() {
    $(".has-treeview").on("click",function(){
      
    });
  });  
</script> -->
</body>
</html>
