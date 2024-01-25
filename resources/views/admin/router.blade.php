<nav class="mt-2" id="mynavigation">
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
        <!-- Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library -->

        <li class="nav-item">
            <router-link to="/dashboard" class="nav-link nav-cols" title="Dashboard">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
            </router-link>
        </li>

        @if(auth()->user()->hasPermissionTo(104) || auth()->user()->hasRole(1))
         <li class="nav-item">
            <router-link to="/school-trip" class="nav-link nav-cols" title="School Trip Progress">
                <i class="nav-icon fas fa-shuttle-van"></i>
                <p>School Trip Progress</p>
            </router-link>
        </li>
        @endif

        @if(auth()->user()->hasPermissionTo(103) || auth()->user()->hasRole(1))
         <li class="nav-item">
            <router-link to="/final-program-link" class="nav-link nav-cols" title="Send Itinerary">
                <i class="nav-icon fas fa-atlas"></i>
                <p>Send Itinerary</p>
            </router-link>
        </li>
        @endif

        @if(auth()->user()->hasPermissionTo(86) || auth()->user()->hasRole(1))
        <li class="nav-item">
            <router-link to="/feedbacks" class="nav-link nav-cols" title="Feedback">
                <i class="nav-icon fas fa-envelope-open-text"></i>
                <p>Feedback</p>
            </router-link>
        </li>
        @endif

        @if(auth()->user()->hasPermissionTo(87) || auth()->user()->hasRole(1))
         <li class="nav-item">
            <router-link to="/create-payment-link" class="nav-link nav-cols" title="Payment Link">
                <i class="nav-icon fas fa-money-bill-wave"></i>
                <p>Payment Link</p>
            </router-link>
        </li>
        @endif

        @if(auth()->user()->hasPermissionTo(88) || auth()->user()->hasRole(1))
        <li class="nav-item">
            <router-link to="/notification-panel" class="nav-link nav-cols" title="Notification Panel">
                <i class="nav-icon fas fa-bell"></i>
                <p>Notification Panel</p>
            </router-link>
        </li>
        @endif

        @if(auth()->user()->hasAnyPermission([96]) || auth()->user()->hasRole(1))
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="Jobs">
                <i class="nav-icon fas fa-user-tie"></i>
                <p>
                Jobs
                <i class="right fas fa-angle-right"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                @if(auth()->user()->hasPermissionTo(96) || auth()->user()->hasRole(1))
                    <li class="nav-item">
                    <router-link to="/jobs" class="nav-link nav-cols" title="Jobs List">
                        <p> Jobs List</p>
                    </router-link>
                    </li>
                 @endif

                 @if(auth()->user()->hasPermissionTo(97) || auth()->user()->hasRole(1))
                    <li class="nav-item">
                    <router-link to="/job-applications" class="nav-link nav-cols" title="Job Applications">
                        <p> Job Applications</p>
                    </router-link>
                    </li>
                 @endif

            </ul>
        </li>
        @endif

        @if(auth()->user()->hasPermissionTo(100) || auth()->user()->hasRole(1))
        <li class="nav-item">
            <router-link to="/event-list" class="nav-link nav-cols" title="Events">
                <i class="nav-icon fas fa-calendar-day"></i>
                <p>Events</p>
            </router-link>
        </li>
        @endif

        @if(auth()->user()->hasAnyPermission([57, /*58,*/ 59, 84, 55]) || auth()->user()->hasRole(1))
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="Itinerary">
                <i class="nav-icon far fa-file-alt"></i>
                <p>
                Itinerary
                <i class="right fas fa-angle-right"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                @if(auth()->user()->hasPermissionTo(57) || auth()->user()->hasRole(1))
                    <li class="nav-item">
                    <router-link to="/itinerary-list" class="nav-link nav-cols" title="Itinerary">
                        <p> Itinerary List</p>
                    </router-link>
                    </li>
                 @endif

                {{-- @can('account-itineraries')
                <li class="nav-item">
                <router-link to="/account-itinerary" class="nav-link nav-cols" title="Account Itinerary">
                    
                    <p> Account Itinerary</p>
                </router-link>
                </li>
                @endcan --}}

                @if(auth()->user()->hasPermissionTo(59) || auth()->user()->hasRole(1))
                    <li class="nav-item">
                    <router-link :to="`/front-booking`" class="nav-link nav-cols" title="Website Query">
                        <p> Website Query </p></router-link>
                    </li>
                 @endif
                
                @if(auth()->user()->hasPermissionTo(84) || auth()->user()->hasRole(1))
                    <li class="nav-item">
                    <router-link :to="`/itinerary-request`" class="nav-link nav-cols" title="Itinerary Request">
                        <p> Itinerary Request </p></router-link>
                    </li>
                @endif

                @if(auth()->user()->hasPermissionTo(55) || auth()->user()->hasRole(1))
                    <li class="nav-item">
                        <router-link to="/tourtype" class="nav-link nav-cols" title="Tour type">
                        <p> Tour type </p>
                        </router-link>
                    </li>
                @endif


            </ul>
        </li>
        @endif

        

        {{-- @canany(['tours','tourtypes','userpayments'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="Tour">
            <i class="nav-icon fas fa-bus"></i>
            <p> Tour <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">
            @can('tours')
            <li class="nav-item">
                <router-link to="/tours" class="nav-link nav-cols" title="Tour List">
                <p> Tour List</p>
                </router-link>
            </li>
            @endcan

            @can('tourtypes')
            <li class="nav-item">
                <router-link to="/tourtype" class="nav-link nav-cols" title="Tour type">
                <p> Tour type </p>
                </router-link>
            </li>
            @endcan

            
            @can('userpayment')
            <li class="nav-item">
                <router-link to="/userpayments" class="nav-link nav-cols" title="User payment">
                <p> User Payments </p>
                </router-link>
            </li>
            @endcan
            

            </ul>
        </li>
        @endcanany --}}

        @if(auth()->user()->hasAnyPermission([60 , 102, 98, 99]) || auth()->user()->hasRole(1))
        <li class="nav-item has-treeview" title="Hotel">
            <a href="#" class="nav-link nav-cols">
            <i class="nav-icon fas fa-hotel"></i>
            <p>
                Hotels & Banquets
                <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">
            @if(auth()->user()->hasPermissionTo(60) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/hotels" class="nav-link nav-cols" title="Hotel List">
                <p>Hotels</p>
                </router-link>
            </li>
            @endif
            @if(auth()->user()->hasPermissionTo(102) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/banquet-list" class="nav-link nav-cols" title="Banquet List">
                <p>Banquets</p>
                </router-link>
            </li>
            @endif
            @if(auth()->user()->hasPermissionTo(60) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/add-hotel-banquet" class="nav-link nav-cols" title="Hotel & Banquet">
                <p>Hotel & Banquet</p>
                </router-link>
            </li>
            @endif
            @if(auth()->user()->hasPermissionTo(98) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/room-categories" class="nav-link nav-cols" title="Room Category">
                <p> Room Category</p>
                </router-link>
            </li>
            @endif
             @if(auth()->user()->hasPermissionTo(99) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/banquet-categories" class="nav-link nav-cols" title="Banquet Category">
                
                <p> Banquet Category</p>
                </router-link>
            </li>
            @endif
            </ul>
        </li>
        @endif

        @if(auth()->user()->hasPermissionTo(61) || auth()->user()->hasRole(1))
            <li class="nav-item">
            <router-link to="/restaurant-list" class="nav-link nav-cols" title="Restaurant List">
                <i class="nav-icon fas fa-male"></i>
                <p> Restaurant List</p></router-link>
            </li>
        @endif
        
        @if(auth()->user()->hasAnyPermission([62 , 63, 64]) || auth()->user()->hasRole(1))
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="Transports">
            <i class="nav-icon fas fa-car"></i>
            <p>
                Transport
                <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">

            
            @if(auth()->user()->hasPermissionTo(62) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/bus-list" class="nav-link nav-cols" title="Buses">
                <p> Bus </p>
                </router-link>
            </li>
            @endif

            @if(auth()->user()->hasPermissionTo(63) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/train-list" class="nav-link nav-cols" title="Trains">
                <p> Train </p>
                </router-link>
            </li>
            @endif


            @if(auth()->user()->hasPermissionTo(64) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/flight-list" class="nav-link nav-cols" title="Flights">
                <p> Flight </p>
                </router-link>
            </li>
            @endif
    
            </ul>
        </li>
        @endif

        @if(auth()->user()->hasAnyPermission([65 , 54, 56]) || auth()->user()->hasRole(1))
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="School">
            <i class="nav-icon fas fa-school"></i>
            <p> School <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">
           @if(auth()->user()->hasPermissionTo(65) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/schools" class="nav-link nav-cols" title="School List">
                <p> School List</p>
                </router-link>
            </li>
            @endif

            @if(auth()->user()->hasPermissionTo(54) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/school/tours" class="nav-link nav-cols" title="Tour List">
                <p> Tour List </p>
                </router-link>
            </li>
            @endif

            
            @if(auth()->user()->hasPermissionTo(56) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/school/userpayments" class="nav-link nav-cols" title="User payment">
                <p> User Payments </p>
                </router-link>
            </li>
            @endif
            

            </ul>
        </li>
        @endif


        @if(auth()->user()->hasAnyPermission([90 , 91, 92]) || auth()->user()->hasRole(1))
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="Corporate">
            <i class="nav-icon fas fa-building"></i>
            <p> Corporate <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">
            @if(auth()->user()->hasPermissionTo(90) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/companies" class="nav-link nav-cols" title="School List">
                <p> Company List </p>
                </router-link>
            </li>
            @endif

            @if(auth()->user()->hasPermissionTo(91) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/corporate/tours" class="nav-link nav-cols" title="Tour List">
                <p> Tour List </p>
                </router-link>
            </li>
            @endif

            
            @if(auth()->user()->hasPermissionTo(92) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/corporate/userpayments" class="nav-link nav-cols" title="User payment">
                <p> User Payments </p>
                </router-link>
            </li>
            @endif
            

            </ul>
        </li>
        @endif

        @if(auth()->user()->hasPermissionTo(66) || auth()->user()->hasRole(1))
            <li class="nav-item">
            <router-link :to="`/escort-list`" class="nav-link nav-cols" title="Escort">
                <i class="nav-icon fas fa-male"></i>
                <p> Escort</p></router-link>
            </li>
        @endif

        
        {{-- @canany(['add student','edit student','delete student'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="">
            <i class="fas fa-user-graduate"></i>
            <p>
                Student
                <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">
            @can('list escorts')
            <li class="nav-item">
                <router-link to="/students" class="nav-link nav-cols" title="">
                
                <p> Student List</p>
                </router-link>
            </li>
            @endcan
            @can('add escorts')
            <li class="nav-item">
                <router-link to="/add-student" class="nav-link nav-cols" title="">
                
                <p> Add Student</p>
                </router-link>
            </li>
            @endcan
            </ul>
        </li>
        @endcanany --}}


        {{-- @canany(['add salesdps','edit salesdps','delete salesdps','itinerary salesdps'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="Sales departments">
            <i class="nav-icon fas fa-universal-access"></i>
            <p>
                Sales Department
                <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">
            
            @can('itinerary salesdps')
            <li class="nav-item">
                <router-link to="/itinerary-from-account" class="nav-link nav-cols" title="Itinerary From Account">
                <p>Itinerary From Account</p>
                </router-link>
            </li>
            @endcan
            
            </ul>
        </li>
        @endcanany

         --}}

        @if(auth()->user()->hasAnyPermission([67 , 68, 69, 70]) || auth()->user()->hasRole(1))
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="GBI Location">
            <i class="nav-icon fas fa-map-marker-alt"></i>
            <p> Location <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">

           @if(auth()->user()->hasPermissionTo(67) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/list-city" class="nav-link nav-cols" title="City">
                <p> City </p>
                </router-link>
            </li>
            @endif

            @if(auth()->user()->hasPermissionTo(68) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/list-state" class="nav-link nav-cols" title="State">
                <p> State </p>
                </router-link>
            </li>
            @endif
            
            @if(auth()->user()->hasPermissionTo(69) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/country-list" class="nav-link nav-cols" title="Country">
                <p> Country</p>
                </router-link>
            </li>
            @endif

            
            @if(auth()->user()->hasPermissionTo(70) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/sightseeing" class="nav-link nav-cols" title="GBI Sightseeing">
                <p> Sightseeing</p>
                </router-link>
            </li>
            @endif



            </ul>
        </li>
        @endif


        @if(auth()->user()->hasAnyPermission([71 , 72, 73, 74, 75, 76]) || auth()->user()->hasRole(1))
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="GBI Websites">
            <i class="nav-icon fas fa-file-alt"></i>
            <p> Website <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">

            @if(auth()->user()->hasPermissionTo(71) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/tourprogram" class="nav-link nav-cols" title="GBI Travel Programs">
                <p> Travel Programs </p>
                </router-link>
            </li>
            @endif

            @if(auth()->user()->hasPermissionTo(72) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/encyclopedias" class="nav-link nav-cols" title="Encyclopedias">
                <p> Encyclopedia </p>
                </router-link>
            </li>
            @endif

            {{-- @can('encyclopediacomment')
            <li class="nav-item">
                <router-link to="/encyclopediacomment-list" class="nav-link nav-cols" title="Encyclopedia Comments">
                <p> Encyclopedia Comment</p>
                </router-link>
            </li>
            @endcan --}}


            @if(auth()->user()->hasPermissionTo(73) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/user" class="nav-link nav-cols" title="GBI Customers">
                <p>Customer</p>
                </router-link>
            </li>
            @endif
            
           @if(auth()->user()->hasPermissionTo(74) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/subscribers" class="nav-link nav-cols" title="GBI Customers">
                <p>Subscribers</p>
                </router-link>
            </li>
            @endif

            
            @if(auth()->user()->hasPermissionTo(75) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/schoolbankdetails" class="nav-link nav-cols" title="GBI Bankdetails">
                <p>Bankdetail</p>
                </router-link>
            </li>
            @endif

            
            @if(auth()->user()->hasPermissionTo(76) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/gallery" class="nav-link nav-cols" title="GBI Gallery">
                <p>Gallery</p>
                </router-link>
            </li>
            @endif


            
            </ul>
        </li>
        @endif

        
        @if(auth()->user()->hasAnyPermission([78, 79, 77]) || auth()->user()->hasRole(1))
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="GBI Blogs">
                <i class="nav-icon fas fa-file-alt"></i>
                <p> Blog <i class="right fas fa-angle-right"></i></p>
            </a>
            <ul class="nav nav-treeview">

            @if(auth()->user()->hasPermissionTo(78) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/categories" class="nav-link nav-cols" title="Post Category">
                <p> Categories </p>
                </router-link>
            </li>
            @endif

            @if(auth()->user()->hasPermissionTo(79) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/tags" class="nav-link nav-cols" title="Post Tags">
                <p> Tags </p>
                </router-link>
            </li>
            @endif
            
            @if(auth()->user()->hasPermissionTo(77) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/posts" class="nav-link nav-cols" title="GBI Posts">
                <p> Posts </p>
                </router-link>
            </li>
            @endif


            </ul>
        </li>
        @endif



        @if(auth()->user()->hasAnyPermission([ 80, 81, 82, 83]) || auth()->user()->hasRole(1))
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="Settings">
                <i class="nav-icon fas fa-cog"></i>
                <p> Setting <i class="right fas fa-angle-right"></i></p>
            </a>
            <ul class="nav nav-treeview">                        
            
           @if(auth()->user()->hasPermissionTo(83) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/list-departments" class="nav-link nav-cols" title="GBI Role">
                <p> Departments</p>
                </router-link>
            </li>
            @endif
            
            @if(auth()->user()->hasPermissionTo(80) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/list-role" class="nav-link nav-cols" title="GBI Role">
                <p> Role</p>
                </router-link>
            </li>
            @endif


            @if(auth()->user()->hasPermissionTo(81) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/list-permission" class="nav-link nav-cols" title="GBI Permissions">
                <p> Permission</p>
                </router-link>
            </li>
            @endif

            @if(auth()->user()->hasPermissionTo(82) || auth()->user()->hasRole(1))
            <li class="nav-item">
                <router-link to="/list-member" class="nav-link nav-cols" title="GBI Member List">
                <p> GBI member</p>
                </router-link>
            </li>
            @endif

            </ul>
        </li>
        @endif

        @if(auth()->user()->hasPermissionTo(73) || auth()->user()->hasRole(1))
        <li class="nav-item">
            <router-link to="/fact" class="nav-link nav-cols" title="GBI Fact">
            <i class="nav-icon fas fa-industry"></i>
                <p>Fact</p>
            </router-link>
        </li>
        @endif

    </ul>
</nav>