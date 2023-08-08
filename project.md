
## Frontend Controllers (app/http/controllers/Front)

- AppController.php
The landing page & laravel routes, meta-data linked with vuejs.

- AuthController.php 
Laravel auth functions.

- BlogController.php 
Blog data fetch & blog search functions.

- EmailController.php 
Email link for password reset, password reset function, update password function.

- EncyclopediaController.php
Encyclopedia data fetch functions.

- FeedbackController.php
Fetch feedback form data & submit feedback functions.

- FrontbookingController.php 
Handles & saves booking data from the frontend/website to the database.

- FrontUserController.php 
Contains user login, register & user data fetch functions.

- GalleryController.php 
Fetches gallery images from database.

- GroupmemberController.php 
Contains functions to add, remove & update group member data for booked tours.

- ItineraryController.php 
Fetches Itinerary data from database and allows users to search for itineries.

- JoinourteamController.php 
Contains functions to save apllication data and resumes.

- LocationController.php
All cities, airports & railway stations apis.

- MarketingController.php 
Function to view marketing files.

- NotifsController.php
Functions to fetch & display user notifications.

- OtpController.php
Functions to send & verify OTP for user mobile number.

- PaymentController.php
Processes payments using the Indipay API & saves payment data to the database.

- SchoolbankdetailController.php
Functions to display & store school bank details.

- ShortLinkController.php
Redirects short urls to the full path url.

- SubscriberController.php
Stores Subscribers to the database.

- TourController.php
Functions to display & store user booked tours.

- UserController.php
Contains user login, register, user data fetch & update functions.

- UserpaymentController.php
Fetches user payment status & saves user payment mode & details to database.

- WebsiteController.php
Functions to display travel programs, flight details, current weather & weather forcast.


## AdminPanel Controllers (app/http/controllers/Admin)

- AccountController.php
Manage accountant itinerary that is sent to sales man

- ChatBotController.php
Manage chatbot responses & api

- CompanyController.php
Manage corporate entities and their details.

- CorpGroupmemberController.php
Add/remove corporate tour group members.

- EncyclopediaController.php
View, add, update & delete Encyclopedia details.

- EscortController.php
View, add, update & delete escorts.

- FeedbackController.php
View Feedbacks, post feedback to website & Send feedback link.

- GalleryController.php
View, add, update & delete gallery images.

- AssignParentController.php
Assign a GBI member under another GBI Member (eg. Asst. Manager can be added under Manager).

- DepartmentController.php
View, add, update & delete GBI Member Departments.

- GBIMemberController.php
View, register, update & delete GBI Members.

- HotelController.php
View, add, update & delete Hotels.

- ItineraryController.php
View, add, update & delete Itineraries.

- ItinerarydayController.php
Manage the Daily activities in an Itinerary.

- ItineraryrequestController.php
View & delete Itinerary request send by users.

- JobApplicationController.php
View & Sort Job Applications send by applicants.

- JobsController.php
View, add, update & delete Job Openings.

- CityController.php
View, add, update & delete cities.

- CountryController.php
View, add, update & delete countries.

- SightseeingController.php
View, add, update & delete sights.

- StateController.php
View, add, update & delete States.

- NotificationController.php
View all Notifications sent, their status & graph chart.

- PaymentLinkController.php
Send Payment Links to customers.

- CategoryController.php
View, add, update & delete Categories.

- PostController.php
View, add, update & delete Blogs.

- TagController.php
View, add, update & delete Tags/Keywords.

- RestaurantController.php
View, add, update & delete Restaurants.

- PermissionController.php
View, add, update & delete Permissions.

- RoleController.php
View, add, update & delete Roles.

- UserRoleController.php
Assign role to a user.

- UserRolePermissionController.php
Assign Permissions to a particular User with a Role.

- GroupmemberController.php
View, add, remove Group members for a school tour.

- SchoolController.php
Manage schools & assign principal access to any user in charge of that school.

- StudentController.php
View, add, update & delete Students.

- TeamTreeController.php
List of Team in Tree format, view a single team member & it's permissions.

- TourController.php
Manager all Tour details, entries, and check payment status for booked tours.

- BusController.php
View, add, update & delete Buses.

- FlightController.php
View, add, update & delete Flights.

- TrainController.php
View, add, update & delete Trains.

- UserController.php
Display user details.

- ImageController.php
Upload & delete Images.

- SubscriberController.php
Manage Subscriber details.
