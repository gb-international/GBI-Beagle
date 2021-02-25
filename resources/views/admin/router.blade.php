<nav class="mt-2" id="mynavigation">
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
        <!-- Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library -->

        <li class="nav-item">
            <router-link to="/dashboard" class="nav-link" title="Dashboard">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
            </router-link>
        </li>
        
        @canany(['add itineraries','edit itineraries','delete itineraries','account itineraries','front booking'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link" title="Itinerary">
                <i class="nav-icon far fa-file-alt"></i>
                <p>
                Itinerary
                <i class="right fas fa-angle-right"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                @can('list itineraries')
                <li class="nav-item">
                <router-link to="/itinerary-list" class="nav-link" title="Itinerary">
                    
                    <p> Itinerary List</p>
                </router-link>
                </li>
                @endcan

                @can('account itineraries')
                <li class="nav-item">
                <router-link to="/account-itinerary" class="nav-link" title="Account Itinerary">
                    
                    <p> Account Itinerary</p>
                </router-link>
                </li>
                @endcan

                @can("[front booking]")
                    <li class="nav-item">
                    <router-link :to="`/front-booking`" class="nav-link" title="Website Query">
                        <p> Website Query</p></router-link>
                    </li>
                @endcan

            </ul>
        </li>
        @endcanany

        

        @canany(['list tour','add tour','edit tour','delete tour'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link" title="Tour">
            <i class="nav-icon fas fa-bus"></i>
            <p> Tour <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">
            @can('list hotels')
            <li class="nav-item">
                <router-link to="/tours" class="nav-link" title="Tour List">
                <p> Tour List</p>
                </router-link>
            </li>
            @endcan

            @can('tourtype')
            <li class="nav-item">
                <router-link to="/tourtype" class="nav-link" title="Tour type">
                <p> Tour type </p>
                </router-link>
            </li>
            @endcan

            
            @can('userpayment')
            <li class="nav-item">
                <router-link to="/userpayments" class="nav-link" title="User payment">
                <p> User Payments </p>
                </router-link>
            </li>
            @endcan
            

            </ul>
        </li>
        @endcanany

        
        

        @canany(['add hotels','edit hotels','delete hotels'])
        <li class="nav-item has-treeview" title="Hotel">
            <a href="#" class="nav-link">
            <i class="nav-icon fas fa-hotel"></i>
            <p>
                Hotel & Restaurant
                <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">
            @can('list hotels')
            <li class="nav-item">
                <router-link to="/hotel-list" class="nav-link" title="Hotel List">
                
                <p> Hotel</p>
                </router-link>
            </li>
            @endcan
            @can('list restaurants')
            <li class="nav-item">
                <router-link to="/restaurant-list" class="nav-link" title="Restaurant List">
                
                <p> Restaurant List</p>
                </router-link>
            </li>
            @endcan
            </ul>
        </li>
        @endcanany
        
        @canany(['add transports','edit transports','delete transports'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link" title="Transports">
            <i class="nav-icon fas fa-car"></i>
            <p>
                Transport
                <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">

            
            @can('list transport')
            <li class="nav-item">
                <router-link to="/bus-list" class="nav-link" title="Buses">
                <p> Bus </p>
                </router-link>
            </li>
            @endcan

            @can('list transport')
            <li class="nav-item">
                <router-link to="/train-list" class="nav-link" title="Trains">
                <p> Train </p>
                </router-link>
            </li>
            @endcan


            @can('list transport')
            <li class="nav-item">
                <router-link to="/flight-list" class="nav-link" title="Flights">
                <p> Flight </p>
                </router-link>
            </li>
            @endcan
    
            </ul>
        </li>
        @endcanany

        @canany("['add school','edit school','delete school']")
            <li class="nav-item">
            <router-link :to="`/schools`" class="nav-link" title="School">
                <i class="nav-icon fas fa-school"></i>
                <p> School</p></router-link>
            </li>
        @endcanany

        @canany("['add escorts','edit escorts','delete escorts']")
            <li class="nav-item">
            <router-link :to="`/escort-list`" class="nav-link" title="Escort">
                <i class="nav-icon fas fa-male"></i>
                <p> Escort</p></router-link>
            </li>
        @endcanany

        
        {{-- @canany(['add student','edit student','delete student'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link" title="">
            <i class="fas fa-user-graduate"></i>
            <p>
                Student
                <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">
            @can('list escorts')
            <li class="nav-item">
                <router-link to="/students" class="nav-link" title="">
                
                <p> Student List</p>
                </router-link>
            </li>
            @endcan
            @can('add escorts')
            <li class="nav-item">
                <router-link to="/add-student" class="nav-link" title="">
                
                <p> Add Student</p>
                </router-link>
            </li>
            @endcan
            </ul>
        </li>
        @endcanany --}}


        @canany(['add salesdps','edit salesdps','delete salesdps','itinerary salesdps'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link" title="Sales departments">
            <i class="nav-icon fas fa-universal-access"></i>
            <p>
                Sales Department
                <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">
            
            @can('itinerary salesdps')
            <li class="nav-item">
                <router-link to="/itinerary-from-account" class="nav-link" title="Itinerary From Account">
                <p>Itinerary From Account</p>
                </router-link>
            </li>
            @endcan
            
            </ul>
        </li>
        @endcanany

        

        @can(['city','state','country'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link" title="GBI Location">
            <i class="nav-icon fas fa-map-marker-alt"></i>
            <p> Location <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">

            @can('city')
            <li class="nav-item">
                <router-link to="/list-city" class="nav-link" title="City">
                <p> City </p>
                </router-link>
            </li>
            @endcan

            @can('state')
            <li class="nav-item">
                <router-link to="/list-state" class="nav-link" title="State">
                <p> State </p>
                </router-link>
            </li>
            @endcan
            
            @can('city')
            <li class="nav-item">
                <router-link to="/country-list" class="nav-link" title="Country">
                <p> Country</p>
                </router-link>
            </li>
            @endcan

            
            @can('sightseeing')
            <li class="nav-item">
                <router-link to="/sightseeing" class="nav-link" title="GBI Sightseeing">
                <p> Sightseeing</p>
                </router-link>
            </li>
            @endcan



            </ul>
        </li>
        @endcan


        @can(['website'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link" title="GBI Websites">
            <i class="nav-icon fas fa-file-alt"></i>
            <p> Website <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">

            @can('tourprogram')
            <li class="nav-item">
                <router-link to="/tourprogram" class="nav-link" title="GBI Travel Programs">
                <p> Travel Programs </p>
                </router-link>
            </li>
            @endcan

            @can('encyclopedia')
            <li class="nav-item">
                <router-link to="/encyclopedias" class="nav-link" title="Encyclopedias">
                <p> Encyclopedia </p>
                </router-link>
            </li>
            @endcan

            @can('encyclopediacomment')
            <li class="nav-item">
                <router-link to="/encyclopediacomment-list" class="nav-link" title="Encyclopedia Comments">
                <p> Encyclopedia Comment</p>
                </router-link>
            </li>
            @endcan


            @can('user')
            <li class="nav-item">
                <router-link to="/user" class="nav-link" title="GBI Customers">
                <p>Customer</p>
                </router-link>
            </li>
            @endcan
            
            @can('subscribe')
            <li class="nav-item">
                <router-link to="/subscribers" class="nav-link" title="GBI Customers">
                <p>Subscribers</p>
                </router-link>
            </li>
            @endcan

            
            @can('bankdetail')
            <li class="nav-item">
                <router-link to="/schoolbankdetails" class="nav-link" title="GBI Bankdetails">
                <p>Bankdetail</p>
                </router-link>
            </li>
            @endcan

            
            @can('bankdetail')
            <li class="nav-item">
                <router-link to="/gallery" class="nav-link" title="GBI Gallery">
                <p>Gallery</p>
                </router-link>
            </li>
            @endcan


            
            </ul>
        </li>
        @endcan

        
        @can(['blog'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link" title="GBI Blogs">
            <i class="nav-icon fas fa-file-alt"></i>
            <p> Blog <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">

            @can('category')
            <li class="nav-item">
                <router-link to="/categories" class="nav-link" title="Post Category">
                <p> Categories </p>
                </router-link>
            </li>
            @endcan

            @can('tag')
            <li class="nav-item">
                <router-link to="/tags" class="nav-link" title="Post Tags">
                <p> Tags </p>
                </router-link>
            </li>
            @endcan
            
            @can('post')
            <li class="nav-item">
                <router-link to="/posts" class="nav-link" title="GBI Posts">
                <p> Posts </p>
                </router-link>
            </li>
            @endcan


            </ul>
        </li>
        @endcan



        @canany(['setting','roles','permissions'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link" title="Settings">
            <i class="nav-icon fas fa-cog"></i>
            <p> Setting <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">                        
            
            @can('role')
            <li class="nav-item">
                <router-link to="/list-role" class="nav-link" title="GBI Role">
                <p> Role</p>
                </router-link>
            </li>
            @endcan

            @can('permission')
            <li class="nav-item">
                <router-link to="/list-permission" class="nav-link" title="GBI Permissions">
                <p> Permission</p>
                </router-link>
            </li>
            @endcan

            @can('gbi member')
            <li class="nav-item">
                <router-link to="/list-member" class="nav-link" title="GBI Member List">
                <p> GBI member</p>
                </router-link>
            </li>
            @endcan

            </ul>
        </li>
        @endcan

    </ul>
</nav>