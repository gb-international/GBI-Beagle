const AdminHome = () => import(/* webpackChunkName: "js/admin/AdminHome" */ '@/admin/pages/AdminHome.vue');
// ADMIN PANEL
const AdminDashboard = () => import(/* webpackChunkName: "js/admin/AdminDashboard" */ '@/admin/pages/Dashboard.vue');
// Itinerary
const ItineraryList = () => import(/* webpackChunkName: "js/admin/ItineraryList" */ '@/admin/pages/itinerary/List-itinerary.vue');
const AddItinerary = () => import(/* webpackChunkName: "js/admin/ItineraryAdd" */ '@/admin/pages/itinerary/New-itinerary.vue');
const EditItinerary = () => import(/* webpackChunkName: "js/admin/ItineraryEdit" */ '@/admin/pages/itinerary/Edit-itinerary.vue');
const ItineraryView = () => import(/* webpackChunkName: "js/admin/Itineraryview" */ '@/admin/pages/itinerary/View-itinerary.vue');

const AccountItinerary = () => import(/* webpackChunkName: "js/admin/accountititnerary" */ '@/admin/pages/itinerary/Account-itinerary.vue');
const SendItinerary = () => import(/* webpackChunkName: "js/admin/sendititnerary" */ '@/admin/pages/itinerary/Send-itinerary.vue');
const AccountItineraryView = () => import(/* webpackChunkName: "js/admin/accountitineraryview" */ '@/admin/pages/itinerary/Account-itinerary-view.vue');
const FrontBooking = () => import(/* webpackChunkName: "js/admin/frontbooking" */ '@/admin/pages/itinerary/FrontBooking.vue');
const FrontBookingView = () => import(/* webpackChunkName: "js/admin/frontbookingview" */ '@/admin/pages/itinerary/ViewFrontbooking.vue');
const CalculatorItinerary = () => import(/* webpackChunkName: "js/admin/calculateitinerary" */ '@/admin/pages/itinerary/Calculator-itinerary.vue');


// //escort
const EscortList = () => import(/* webpackChunkName: "js/admin/escort" */ '@/admin/pages/escort/List-escort.vue');
const AddEscort = () => import(/* webpackChunkName: "js/admin/escortadd" */ '@/admin/pages/escort/New-escort.vue');
const EditEscort = () => import(/* webpackChunkName: "js/admin/escortedit" */ '@/admin/pages/escort/Edit-escort.vue');
const EscortView = () => import(/* webpackChunkName: "js/admin/escortview" */ '@/admin/pages/escort/View_escort.vue');


// //Hotel
const HotelList = () => import(/* webpackChunkName: "js/admin/hotel" */ '@/admin/pages/hotel/List-hotel.vue');
const HotelAdd = () => import(/* webpackChunkName: "js/admin/hoteladd" */'@/admin/pages/hotel/New-hotel.vue');
const HotelEdit = () => import(/* webpackChunkName: "js/admin/hoteledit" */ '@/admin/pages/hotel/Edit-hotel.vue');
const HotelView = () => import(/* webpackChunkName: "js/admin/hotelview" */ '@/admin/pages/hotel/View_hotel.vue');

// //Restaurant
const restaurantList = () => import(/* webpackChunkName: "js/admin/restaurant" */ '@/admin/pages/restaurant/List-restaurant.vue');
const restaurantAdd = () => import(/* webpackChunkName: "js/admin/restauradd" */ '@/admin/pages/restaurant/New-restaurant.vue' );
const restaurantEdit = () => import(/* webpackChunkName: "js/admin/restauedit" */ '@/admin/pages/restaurant/Edit-restaurant.vue');
const restaurantView = () => import(/* webpackChunkName: "js/admin/restaurantView" */ '@/admin/pages/restaurant/View_restaurant.vue');



// //SALES department
const ItineraryFromAccount = () => import(/* webpackChunkName: "js/admin/itineraryAccount" */ '@/admin/pages/sales/ItineraryFromAccount.vue');
const SendDetails = () => import(/* webpackChunkName: "js/admin/senddetails" */ '@/admin/pages/sales/Submit-details.vue');

// // School
const Schools = () => import(/* webpackChunkName: "js/admin/schools" */ '@/admin/pages/school/List-school.vue');
const SchoolAdd = () => import(/* webpackChunkName: "js/admin/schooladd" */ '@/admin/pages/school/New-school.vue');
const SchoolEdit = () => import(/* webpackChunkName: "js/admin/schooledit" */ '@/admin/pages/school/Edit-school.vue');
const SchoolView = () => import(/* webpackChunkName: "js/admin/schoolview" */ '@/admin/pages/school/View-school.vue');

// // Students
const Students = () => import(/* webpackChunkName: "js/admin/students" */ '@/admin/pages/student/List-student.vue');
const StudentAdd = () => import(/* webpackChunkName: "js/admin/studentadd" */ '@/admin/pages/student/New-student.vue');
const StudentEdit = () => import(/* webpackChunkName: "js/admin/studentEdit" */ '@/admin/pages/student/Edit-student.vue');
const StudentView = () => import(/* webpackChunkName: "js/admin/studentview" */ '@/admin/pages/student/View-student.vue');

// // Tour
const Tours = () => import(/* webpackChunkName: "js/admin/tours" */ '@/admin/pages/tour/List-tour.vue');
const TourAdd = () => import(/* webpackChunkName: "js/admin/touradd" */ '@/admin/pages/tour/New-tour.vue');
const TourEdit = () => import(/* webpackChunkName: "js/admin/touredit" */ '@/admin/pages/tour/Edit-tour.vue');
const TourView = () => import(/* webpackChunkName: "js/admin/tourview" */ '@/admin/pages/tour/View-tour.vue');

const Tourtype = () => import(/* webpackChunkName: "js/admin/tourtype" */ '@/admin/pages/tour/tourtype/List-tourtype.vue');
const TourtypeAdd = () => import(/* webpackChunkName: "js/admin/tourtypeadd" */ '@/admin/pages/tour/tourtype/New-tourtype.vue');
const TourtypeEdit = () => import(/* webpackChunkName: "js/admin/tourtypeedit" */ '@/admin/pages/tour/tourtype/Edit-tourtype.vue');

const Userpayments = () => import(/* webpackChunkName: "js/admin/userpayments" */ '@/admin/pages/tour/userpayment/List-payment.vue');
const UserpaymentsAdd = () => import(/* webpackChunkName: "js/admin/userpayadd" */ '@/admin/pages/tour/userpayment/New-payment.vue');
const UserpaymentsEdit = () => import(/* webpackChunkName: "js/admin/userpayedit" */ '@/admin/pages/tour/userpayment/Edit-payment.vue');
const UserpaymentsView = () => import(/* webpackChunkName: "js/admin/userpayview" */ '@/admin/pages/tour/userpayment/View-payment.vue');


const Tourprogram = () => import(/* webpackChunkName: "js/admin/Tourprogram" */ '@/admin/pages/website/home/List-tourprogram.vue');
const TourprogramAdd = () => import(/* webpackChunkName: "js/admin/TourprogramAdd" */ '@/admin/pages/website/home/New-tourprogram.vue');
const TourprogramEdit = () => import(/* webpackChunkName: "js/admin/TourprogramEdit" */ '@/admin/pages/website/home/Edit-tourprogram.vue');

const Bankdetail = () => import(/* webpackChunkName: "js/admin/bankdetail" */ '@/admin/pages/website/bankdetail/Bankdetail.vue');
const BankdetailAdd = () => import(/* webpackChunkName: "js/admin/bankdetailadd" */ '@/admin/pages/website/bankdetail/New-Bankdetail.vue');
const BankdetailEdit = () => import(/* webpackChunkName: "js/admin/bandkdetailedit" */ '@/admin/pages/website/bankdetail/Edit-Bankdetail.vue');
const BankdetailView = () => import(/* webpackChunkName: "js/admin/BankdetailView" */ '@/admin/pages/website/bankdetail/View-Bankdetail.vue');



// // Booked Tour

const BookedTours = () => import(/* webpackChunkName: "js/admin/BookedTours" */ '@/admin/pages/bookedtour/List-reservation.vue');
const BookedEscort = () => import(/* webpackChunkName: "js/admin/BookedEscort" */ '@/admin/pages/bookedtour/tourmanager/New-tourmanager.vue');
const BookedHotel = () => import(/* webpackChunkName: "js/admin/BookedHotel" */ '@/admin/pages/bookedtour/New-hotel.vue');
const BookedRestaurant = () => import(/* webpackChunkName: "js/admin/bookedRestaurant" */ '@/admin/pages/bookedtour/New-restaurant.vue');
const BookedSightseen = () => import(/* webpackChunkName: "js/admin/bookedsightseeing" */ '@/admin/pages/bookedtour/New-sightseen.vue');
const BookedFlight = () => import(/* webpackChunkName: "js/admin/bookedflight" */ '@/admin/pages/bookedtour/New-flight.vue');
const BookedTrain = () => import(/* webpackChunkName: "js/admin/bookedtrain" */ '@/admin/pages/bookedtour/New-train.vue');

const BookedBus = () => import(/* webpackChunkName: "js/admin/bookedbus" */ '@/admin/pages/bookedtour/New-bus.vue');
const BookedFood = () => import(/* webpackChunkName: "js/admin/bookedfood" */ '@/admin/pages/bookedtour/Food.vue');
const BookedPnr = () => import(/* webpackChunkName: "js/admin/bookpnr" */ '@/admin/pages/bookedtour/Pnr-List.vue');
const BookedStudent = () => import(/* webpackChunkName: "js/admin/BookedStudent" */ '@/admin/pages/bookedtour/Groupmember-list.vue');
const PnrUser = () => import(/* webpackChunkName: "js/admin/PnrUser" */ '@/admin/pages/bookedtour/PnrUser.vue');
const EscortUpdate = () => import(/* webpackChunkName: "js/admin/EscortList" */ '@/admin/pages/bookedtour/New-EscortUpdate.vue');
const PaymentList = () => import(/* webpackChunkName: "js/admin/paymentlist" */ '@/admin/pages/bookedtour/payment/List.vue');
const StudentPayment = () => import(/* webpackChunkName: "js/admin/StudentPay" */ '@/admin/pages/bookedtour/payment/Student-payment.vue');
const addPaymentMethod = () => import(/* webpackChunkName: "js/admin/AddPaymethod" */ '@/admin/pages/bookedtour/payment/Add-payment.vue');
const UpdatePaymentMethod = () => import(/* webpackChunkName: "js/admin/UpdatePaymethod" */ '@/admin/pages/bookedtour/payment/Update-payment.vue');



// // Add City 
const ListCity = () => import(/* webpackChunkName: "js/admin/CityList" */ '@/admin/pages/setting/List-city.vue');
const AddCity = () => import(/* webpackChunkName: "js/admin/CityAdd" */ '@/admin/pages/setting/New-city.vue');
const EditCity = () => import(/* webpackChunkName: "js/admin/CityEdit" */ '@/admin/pages/setting/Edit-city.vue');
// // Add State 
const ListState = () => import(/* webpackChunkName: "js/admin/State" */ '@/admin/pages/setting/state/List-state.vue');
const AddState = () => import(/* webpackChunkName: "js/admin/StateAdd" */ '@/admin/pages/setting/state/New-state.vue');

// // Add Country 
const ListCountry = () => import(/* webpackChunkName: "js/admin/CountryList" */ '@/admin/pages/setting/country/List-country.vue');
const AddCountry = () => import(/* webpackChunkName: "js/admin/CountryAdd" */ '@/admin/pages/setting/country/New-country.vue');

// // Add SightSeeing 
const ListSightseeing = () => import(/* webpackChunkName: "js/admin/sightList" */ '@/admin/pages/sightseeing/List-sightseeing.vue');
const AddSightseeing = () => import(/* webpackChunkName: "js/admin/sightAdd" */ '@/admin/pages/sightseeing/New-sightseeing.vue');
const EditSightseeing = () => import(/* webpackChunkName: "js/admin/sightEdit" */ '@/admin/pages/sightseeing/Edit-sightseeing.vue');


// // Role & permission
const ListRole = () => import(/* webpackChunkName: "js/admin/Role" */ '@/admin/pages/setting/role/List-role.vue');
const AddRole = () => import(/* webpackChunkName: "js/admin/RoleAdd" */ '@/admin/pages/setting/role/New-role.vue');
const EditRole = () => import(/* webpackChunkName: "js/admin/RoleEdit" */ '@/admin/pages/setting/role/Edit-role.vue');

const ListPermission = () => import(/* webpackChunkName: "js/admin/PermissionList" */ '@/admin/pages/setting/permission/List-permission.vue');
const AddPermission = () => import(/* webpackChunkName: "js/admin/PermissionAdd" */ '@/admin/pages/setting/permission/New-permission.vue');
const EditPermission = () => import(/* webpackChunkName: "js/admin/PermissionEdit" */ '@/admin/pages/setting/permission/Edit-permission.vue');

// // GBI member

const ListMember = () => import(/* webpackChunkName: "js/admin/MemberList" */ '@/admin/pages/setting/member/List-member.vue');
const AddMember = () => import(/* webpackChunkName: "js/admin/MemberAdd" */ '@/admin/pages/setting/member/New-member.vue');



// // Transport 
// // 
// //________ Bus 

const BusList = () => import(/* webpackChunkName: "js/admin/BusList" */ '@/admin/pages/bus/List-bus.vue');
const BusEdit = () => import(/* webpackChunkName: "js/admin/BusEdit" */ '@/admin/pages/bus/Edit-bus.vue');
const BusView = () => import(/* webpackChunkName: "js/admin/BusView" */ '@/admin/pages/bus/View-bus.vue');
const BusAdd = () => import(/* webpackChunkName: "js/admin/BusAdd" */ '@/admin/pages/bus/New-bus.vue');

// //________ Train 

const TrainList = () => import(/* webpackChunkName: "js/admin/TrainList" */ '@/admin/pages/train/List-train.vue');
const TrainEdit = () => import(/* webpackChunkName: "js/admin/TrainEdit" */ '@/admin/pages/train/Edit-train.vue');
const TrainView = () => import(/* webpackChunkName: "js/admin/TrainView" */ '@/admin/pages/train/View-train.vue');
const TrainAdd = () => import(/* webpackChunkName: "js/admin/TrainAdd" */ '@/admin/pages/train/New-train.vue');

// //________ Flight 

const FlightList = () => import(/* webpackChunkName: "js/admin/FlightList" */ '@/admin/pages/flight/List-flight.vue');
const FlightEdit = () => import(/* webpackChunkName: "js/admin/FlightEdit" */ '@/admin/pages/flight/Edit-flight.vue');
const FlightView = () => import(/* webpackChunkName: "js/admin/FightView" */ '@/admin/pages/flight/View-flight.vue');
const FlightAdd = () => import(/* webpackChunkName: "js/admin/FlightAdd" */ '@/admin/pages/flight/New-flight.vue');

// // ------------ Encyclopedia -----------------// 
const EncyclopediaList = () => import(/* webpackChunkName: "js/admin/EncyclopediaList" */ '@/admin/pages/encyclopedia/List-encyclopedia.vue');
const EncyclopediaEdit = () => import(/* webpackChunkName: "js/admin/EncyclopediaEdit" */ '@/admin/pages/encyclopedia/Edit-encyclopedia.vue');
const EncyclopediaView = () => import(/* webpackChunkName: "js/admin/EncyclopediaView" */ '@/admin/pages/encyclopedia/View-encyclopedia.vue');
const EncyclopediaAdd = () => import(/* webpackChunkName: "js/admin/EncyclopediaAdd" */ '@/admin/pages/encyclopedia/New-encyclopedia.vue');

const EncyclopediacommentList = () => import(/* webpackChunkName: "js/admin/EncycllopediaListComment" */ '@/admin/pages/encyclopedia/comment/List-encyclopediacomment.vue');
// const EncyclopediacommentEdit = () => import(/* webpackChunkName: "js/admin/EncyclopediaEditComment" */ '@/admin/pages/encyclopedia/comment/Edit-encyclopediacomment.vue');
// const EncyclopediacommentView = () => import(/* webpackChunkName: "js/admin/encyclopediaViewComment" */ '@/admin/pages/encyclopedia/comment/View-encyclopediacomment.vue');
// const EncyclopediacommentAdd = () => import(/* webpackChunkName: "js/admin/EncycloPediaComment" */ '@/admin/pages/encyclopedia/comment/New-encyclopediacomment.vue');




// // Home page

const User = () => import(/* webpackChunkName: "js/admin/User" */ '@/admin/pages/website/user/List.vue');
const UserView = () => import(/* webpackChunkName: "js/admin/UserView" */ '@/admin/pages/website/user/View.vue');

// // Blog
const Categories = () => import(/* webpackChunkName: "js/admin/Category" */ '@/admin/pages/blog/Category/List.vue');
const CategoriesAdd = () => import(/* webpackChunkName: "js/admin/CategoryAdd" */ '@/admin/pages/blog/Category/New.vue');
const CategoriesEdit = () => import(/* webpackChunkName: "js/admin/CategoryEdit" */ '@/admin/pages/blog/Category/Edit.vue');
const CategoriesView = () => import(/* webpackChunkName: "js/admin/CategoryView" */ '@/admin/pages/blog/Category/View.vue');

const Post = () => import(/* webpackChunkName: "js/admin/Post" */ '@/admin/pages/blog/post/List.vue');
const PostAdd = () => import(/* webpackChunkName: "js/admin/PostAdd" */ '@/admin/pages/blog/post/New.vue');
const PostEdit = () => import(/* webpackChunkName: "js/admin/PostEdit" */ '@/admin/pages/blog/post/Edit.vue');
const PostView = () => import(/* webpackChunkName: "js/admin/PostView" */ '@/admin/pages/blog/post/View.vue');

const Tag = () => import(/* webpackChunkName: "js/admin/Tag" */ '@/admin/pages/blog/tag/List.vue');
const TagAdd = () => import(/* webpackChunkName: "js/admin/TagAdd" */ '@/admin/pages/blog/tag/New.vue');
const TagEdit = () => import(/* webpackChunkName: "js/admin/TagEdit" */ '@/admin/pages/blog/tag/Edit.vue');


const Gallery = () => import(/* webpackChunkName: "js/admin/Gallery" */ '@/admin/pages/gallery/List.vue');
const GalleryAdd = () => import(/* webpackChunkName: "js/admin/galleryAdd" */ '@/admin/pages/gallery/New.vue');
const GalleryEdit = () => import(/* webpackChunkName: "js/admin/galleryEdit" */ '@/admin/pages/gallery/Edit.vue');







export const routes = [
    { path:'/', component:AdminDashboard },
      // itinerary
    { path:'/itinerary-list', component:ItineraryList },
    { path:'/add-itinerary', component:AddItinerary },
    { path:'/account-itinerary', component:AccountItinerary },
    
    { path:'/edit-itinerary/:itineraryid', component:EditItinerary },

    { path:'/view-itinerary/:id', component:ItineraryView },
    { path:'/send-itinerary/:id', component:SendItinerary },
    { path:'/account-itinerary-view/:id', component:AccountItineraryView },
    { path: '/front-booking', component: FrontBooking },
    { path: '/front-booking/:id', component: FrontBookingView },
    { path:'/calculator/:id', component:CalculatorItinerary },
    //Escort
    { path:'/escort-list', component:EscortList }, 
    { path:'/add-escort', component:AddEscort },
    { path:'/edit-escort/:id', component:EditEscort },
    { path:'/escort-view/:id', component:EscortView },

    //Hotel
    { path:'/hotel-list', component:HotelList },
    { path:'/add-hotel', component:HotelAdd },
    { path:'/edit-hotel/:id', component:HotelEdit },
    { path:'/hotel-view/:id', component:HotelView },

    
    //Restaurant
    { path:'/restaurant-list', component:restaurantList },
    { path:'/add-restaurant', component:restaurantAdd },
    { path:'/edit-restaurant/:id', component:restaurantEdit },
    { path:'/restaurant-view/:id', component:restaurantView },



    //Sales Department
    { path:'/itinerary-from-account', component:ItineraryFromAccount },
    { path:'/submit-details/:id', component:SendDetails },


    // School
    { path:'/schools', component:Schools },
    { path:'/schools/:id', component:SchoolEdit },
    { path:'/add-school', component:SchoolAdd },
    { path:'/view-school/:id', component:SchoolView },
    // School
    { path:'/students', component:Students },
    { path:'/students/:id', component:StudentEdit },
    { path:'/add-student', component:StudentAdd },
    { path:'/view-student/:id', component:StudentView },
    
    // Tour
    { path:'/tours', component:Tours },
    { path:'/tours/:id', component:TourEdit },
    { path:'/tour-view/:id', component:TourView },
    { path:'/tour-add', component:TourAdd },
    { path:'/view-tour/:id', component:TourView },
    { path:'/booked-tour/:id', component:BookedTours },
    { path:'/booked-tour-manager/:id', component:BookedEscort },
    { path:'/booked-tour-hotel/:id', component:BookedHotel },
    { path: '/booked-tour-restaurant/:id/:tour_code', component: BookedRestaurant },
    { path: '/booked-sightseen/:id/:tour_code/:itinerary_id', component: BookedSightseen },
    { path:'/booked-tour-flight/:id', component:BookedFlight },
    { path:'/booked-tour-train/:id', component:BookedTrain },
    { path:'/booked-tour-bus/:id', component:BookedBus },
    { path:'/booked-tour-pnr/:transport/:id/:tour_id', component:BookedPnr },
    { path:'/booked-tour-student/:school_id/:id', component:BookedStudent },
    { path:'/pnr-users/:transport/:id/:tour_id', component:PnrUser },
    { path:'/payments/:school_id/:tour_code', component:PaymentList },
    { path:'/student-payment/:school_id/:tour_code', component:StudentPayment },
    { path:'/add-paymentmethod/:school_id/:tour_code', component:addPaymentMethod },
    { path:'/update-paymentmethod/:school_id/:tour_code', component:UpdatePaymentMethod },
    { path:'/escort-update/:id/:tour_code', component:EscortUpdate },

    { path:'/foods/:tour_id/:tour_code', component:BookedFood },

    // Tour type
    { path:'/tourtype',component:Tourtype},
    { path:'/tourtype/:id',component:TourtypeEdit},
    { path:'/tourtype-add',component:TourtypeAdd},

    
    // user payment
    { path:'/userpayments',component:Userpayments},
    { path:'/userpayments/:id',component:UserpaymentsEdit},
    { path:'/userpayments-add',component:UserpaymentsAdd},
    { path: '/userpayments-view/:id', component: UserpaymentsView},


    
    // Sightseeing
    { path:'/sightseeing',component: ListSightseeing},
    { path:'/sightseeing/:id',component:EditSightseeing},
    { path:'/sightseeing-add',component:AddSightseeing},

    // Tour tourprogram
    { path:'/tourprogram',component:Tourprogram},
    { path:'/tourprogram/:id',component:TourprogramEdit},
    { path:'/tourprogram-add',component:TourprogramAdd},

    
    // Bank detail
    { path:'/schoolbankdetails',component:Bankdetail},
    { path:'/schoolbankdetails/:id',component:BankdetailEdit},
    { path:'/schoolbankdetails-view/:id',component:BankdetailView},
    { path:'/schoolbankdetails-add',component:BankdetailAdd},

    

    { path:'/list-city', component:ListCity },
    { path:'/add-city', component:AddCity },
    { path:'/city/:id', component:EditCity },
    { path:'/list-state', component:ListState },
    { path:'/add-state', component:AddState },
    
    { path:'/list-role', component:ListRole },
    { path:'/add-role', component:AddRole },     
    { path:'/edit-role/:id', component:EditRole },
    { path:'/list-permission', component:ListPermission },
    { path:'/add-permission', component:AddPermission },     
    { path:'/edit-permission/:id', component:EditPermission },
    { path:'/list-member', component:ListMember },
    { path:'/add-member', component:AddMember },

    // Bus
    
    { path:'/bus-list', component:BusList },
    { path:'/bus/:id', component:BusEdit  },
    { path:'/view-bus/:id', component:BusView  },
    { path:'/add-bus', component:BusAdd  },
    // Train
    
    { path:'/train-list', component:TrainList },
    { path:'/train/:id', component:TrainEdit  },
    { path:'/train-view/:id', component:TrainView  },
    { path:'/train-add', component:TrainAdd  },
    // Flight
    
    { path:'/flight-list', component:FlightList },
    { path:'/flight/:id', component:FlightEdit  },
    { path:'/flight-view/:id', component:FlightView  },
    { path:'/flight-add', component:FlightAdd  },
    
    // country
    { path:'/country-list', component:ListCountry },
    { path:'/country-add', component:AddCountry },
     
    { path:'/encyclopedias', component: EncyclopediaList},
    { path:'/encyclopedias-view/:id', component:EncyclopediaView},
    { path:'/encyclopedias/:id', component:EncyclopediaEdit},
    { path:'/encyclopedias-add', component:EncyclopediaAdd},
    
    { path:'/encyclopediacomment-list', component:  EncyclopediacommentList},
    // { path:'/encyclopediacomment-view/:id', component: EncyclopediacommentView},
    // { path:'/encyclopediacomment/:id', component: EncyclopediacommentEdit},
    // { path:'/encyclopediacomment-add', component: EncyclopediacommentAdd},
    
    { path:'/user', component: User},
    { path: '/user/:id', component: UserView},  
    // categories
    { path: '/categories', component: Categories },
    { path: '/categories-add', component: CategoriesAdd },
    { path: '/categories/:id', component: CategoriesEdit },
    { path: '/categories-view/:id', component: CategoriesView },
    // Post
    { path: '/posts', component: Post },
    { path: '/posts-add', component: PostAdd },
    { path: '/posts/:id', component: PostEdit },
    { path: '/posts-view/:id', component: PostView },
    // Tags    
    { path: '/tags', component: Tag },
    { path: '/tags-add', component: TagAdd },
    { path: '/tags/:id', component: TagEdit },
    // Gallery
    { path: '/gallery', component: Gallery },
    { path: '/gallery-add', component: GalleryAdd },
    { path: '/gallery/:id', component: GalleryEdit },




];


