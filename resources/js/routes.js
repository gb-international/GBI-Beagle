import AdminHome from './components/admin/AdminHome.vue'
import CategoryList from './components/admin/category/List.vue'
import AddCategory from './components/admin/category/New.vue'
import EditCategory from './components/admin/category/Edit.vue'

// FrontEnd Component
import FrontHome from './components/front/layouts/FrontHome.vue'
import ExploreList from './components/front/ExploreList.vue'
import ListItinerary from './components/front/ListItinerary.vue'


// ADMIN PANEL

// Post
import PostList from './components/admin/post/List.vue'
import AddPost from './components/admin/post/New.vue'
import EditPost from './components/admin/post/Edit.vue'

// Itinerary
import ItineraryList from './components/admin/itinerary/List.vue'
import AddItinerary from './components/admin/itinerary/New.vue'
import EditItinerary from './components/admin/itinerary/Edit.vue'
import AddDayItineraryList from './components/admin/itinerary/Newdayitinerary.vue'
import ItineraryView from './components/admin/itinerary/View.vue'
import ItineraryDepartment from './components/admin/itinerary/Department.vue'
import ItineraryOld from './components/admin/itinerary/Old.vue'
import ItineraryTable from './components/admin/itinerary/Table.vue'
import ItineraryDay from './components/admin/itinerary/Day.vue'


//escort
import EscortList from './components/admin/escort/List.vue'
import AddEscort from './components/admin/escort/New.vue'
import EditEscort from './components/admin/escort/Edit.vue'


// Client
import Clients from './components/admin/client/List.vue'
import AddClient from './components/admin/client/New.vue'


//Hotel
import HotelList from './components/admin/hotel/List.vue'
import HotelAdd from './components/admin/hotel/New.vue' 


//Transport
import TransportList from './components/admin/transport/List.vue'
import TransportAdd from './components/admin/transport/New.vue'


//SALES department
import SalesList from './components/admin/sales/List.vue'
import SalesAdd from './components/admin/sales/New.vue'




export const routes = [
    {
        path:'/admin',
        component:AdminHome
    },
    
    {
        path:'/category-list',
        component:CategoryList
    },
    {
        path:'/add-category',
        component:AddCategory
    },
    {
        path:'/edit-category/:categoryid',
        component:EditCategory
    },
    // Post
    {
        path:'/post-list',
        component:PostList
    },
    {
        path:'/add-post',
        component:AddPost
    },
    {
        path:'/edit-post/:postid',
        component:EditPost
    },

      // itinerary
    {
        path:'/itinerary-list',
        component:ItineraryList
    },
    {
        path:'/add-itinerary',
        component:AddItinerary
    },
    {
        path:'/add-itinerary-old',
        component:ItineraryOld
    },
    
    {
        path:'/edit-itinerary/:itineraryid',
        component:EditItinerary
    },
    {
        path:'/add-days-itinerary/:id',
        component:AddDayItineraryList
    },
    {
        path:'/view-itinerary',
        component:ItineraryView
    },
    {
        path:'/itinerary-department',
        component:ItineraryDepartment
    },
    {
        path:'/table',
        component:ItineraryTable
    },
    {
        path:'/day',
        component:ItineraryDay
    },
    //Escort
    {
        path:'/escort-list',
        component:EscortList
    }, 
    {
        path:'/add-escort',
        component:AddEscort
    },
    {
        path:'/edit-escort/:id',
        component:EditEscort
    },
    {
        path:'/client-list',
        component:Clients
    },
    {
        path:'/add-client',
        component:AddClient
    },

    //Hotel
    {
        path:'/hotel-list',
        component:HotelList
    },
    {
        path:'/add-hotel',
        component:HotelAdd
    },

    // Transport
    {
        path:'/transport-list',
        component:TransportList
    },
    {
        path:'/add-transport',
        component:TransportAdd
    },
    //Sales Department
    {
        path:'/sales-department-list',
        component:SalesList
    },
    {
        path:'/add-sales-department',
        component:SalesAdd
    },
     

    // Frontend Route
    {
        path:'/',
        component:FrontHome
    },
    {
        path:'/explore-list',
        component:ExploreList
    },
    {
        path:'/lists',
        component:ListItinerary
    },
    

];


