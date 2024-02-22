<?php
namespace App\Http\Controllers\Front;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Post\Post;
use App\Model\Itinerary\Itinerary;
use App\Model\Encyclopedia\Encyclopedia;
class AppController extends Controller
{

  public function get(Request $request) 
  {
  	$page = request()->segment(1);
  	$subPage = request()->segment(2);
  	$meta = new \stdClass();
  	$meta->title = "India Tourism| Tour packages and travel guide| GOwithGBI";
  	$meta->description = "Best travel guides on India tourism| Explore the best of India at affordable India tour packages only with GOwithGBI.";
  	$meta->keyword = "india tourism packages, India Tourism";
  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
  	//Blog
  	if($page == 'blog'){
  		if($subPage){
  			$mData = Post::where('slug', $subPage)->first();
  			if($mData){
  				$meta->title = $mData->meta_title;
			  	$meta->description = $mData->summery;
			  	$meta->keyword = $mData->meta_keyword;
			  	$meta->image = $mData->image;
  			}
  			else {
	  			$meta->title = "Read travel blogs and learn more about Incredible India| GOwithGBI";
			  	$meta->description = "Travel blogs that will help you learn more about India| Find out about the places before you go there| GOwithGBI";
			  	$meta->keyword = "@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs";
			  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	  		}
  		} else {
  			$meta->title = "Read travel blogs and learn more about Incredible India| GOwithGBI";
		  	$meta->description = "Travel blogs that will help you learn more about India| Find out about the places before you go there| GOwithGBI";
		  	$meta->keyword = "@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs";
		  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
  		}
	}
	//Encyclopedia
	elseif($page == 'travel-encyclopedia'){
  		if($subPage){
  			$mData = Encyclopedia::where('slug', $subPage)->first();
  			if($mData){
  				if($mData->meta_title){
					$meta->title = $mData->meta_title;
  				} else {
  					$meta->title = $mData->state_name." | GB International";
  				}
			  	$meta->description = $mData->meta_description;
			  	$meta->keyword = $mData->meta_keyword;
			  	$meta->image = $mData->banner_image;
  			} else {
	  			$meta->title = "Learn before you travel with GowithGBI";
			  	$meta->description = "Explore places on our encyclopedia pages and get in depth knowledge about culture. Itineraries and culinary of different places| only with GOwithGBI";
			  	$meta->keyword = "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs";
			  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
  			}
  		} else {
			$meta->title = "Learn before you travel with GowithGBI";
			$meta->description = "Explore places on our encyclopedia pages and get in depth knowledge about culture. Itineraries and culinary of different places| only with GOwithGBI";
			$meta->keyword = "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs";
			$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
  		}
	}
	//Explore destination
	elseif($page == 'explore-destination' || $page == 'explore-list'){
  		
  			$meta->title = "Educational tourism in India| best deals with GowithGBI";
		  	$meta->description = "Education and traveling goes hand and hand| book educational tourism now and get the best deals only with GowithGBI";
		  	$meta->keyword = "educational tourism in india";
		  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	}
	//Explore detail
	elseif($page == 'explore-detail'){
		if($subPage){
  			$mData = Itinerary::where('id', $subPage)->first();
  			if($mData){
  				if($mData->meta_title){
					$meta->title = $mData->meta_title;
  				} else {
  					$meta->title = $mData->title." | GB International";
  				}
			  	$meta->description = $mData->meta_description;
			  	$meta->keyword = $mData->meta_keyword;
			  	$meta->image = $mData->photo;
  			}	
  		} else {
			$meta->title = "Educational tourism in India| best deals with GowithGBI";
			$meta->description = "Education and traveling goes hand and hand| book educational tourism now and get the best deals only with GowithGBI";
			$meta->keyword = "educational tourism in india";
			$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
  		}
	}
	//Resources
	elseif($page == 'travel-education'){
	   			$meta->title = "Get best deals on educational tourism in India| GOwithGBI";
			  	$meta->description = "Affordable tours and best deals on educational and industrial tourism| Learn with GOwithGBI| The best travel agency and guide in India";
			  	$meta->keyword = "@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs";
			  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	}
	elseif($page == 'faq'){
	   			$meta->title = "Frequently asked question about tour and travels in India| GOwithGBI";
			  	$meta->description = "If you have any questions regarding GOwithGBI do check our FAQ page| GOwithGBI keeps its policies transparent ";
			  	$meta->keyword = "@GoWithGBI,have a question,search for your answer,FAQ,Travel bookings queries,customer service,support helpdesk";
			  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	}
	elseif($page == 'safety-security'){
	   			$meta->title = "Safety and Security";
			  	$meta->description = "@GoWithGBI aims to provide complete safety of its travellers during the education programs,GBI team members assuers the safety of passengers and is known for it.";
			  	$meta->keyword = "@GoWithGBI,travel safety tips,our security policies,GBI strict policies,GBI terms and conditions,safe travel";
			  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	}
	elseif($page == 'travel-encyclopedia-international'){
		$meta->title = "Learn before you travel with GowithGBI";
		$meta->description = "Explore places on our encyclopedia pages and get in depth knowledge about culture. Itineraries and culinary of different places| only with GOwithGBI";
		$meta->keyword = "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs";
		$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	}
	//Support
	elseif($page == 'support'){
		$meta->title = "GBI Travel Support";
	}
	//Contact Us
	elseif($page == 'contact-us'){
		$meta->title = "Contact the best Travel and tourism agency and guide in the town| GOwithGBI";
		$meta->description = "Contact GOwithGBI for any related queries regarding your upcoming tours or regarding booking tours. Best travel agency in India| GOwithGBI";
		$meta->keyword = "@GoWithGBI,GB International,Connect With GB International,Email Us,Talk To Us,Need a travel solution";
		$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	}

	//About Us
	elseif($page == 'about-us'){
		$meta->title = "Learn more about the best travel guide and agency| GowithGBI";
		$meta->description = "GOwithGBI is in the business of tourism and travel since last 40 years| learn about us while getting the affordable deals only on GowithGBI";
		$meta->keyword = "@GoWithGBI,Our Story,about us,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs";
		$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	}
			/*elseif($subPage == 'how-we-work'){
				$meta->title = "How We Work";
				$meta->description = "@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one";
				$meta->keyword = "@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs";
				$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
				
			}*/
	elseif($subPage == 'join-our-team'){
		$meta->title = "Looking forward to work with GOwithGBI| Join our team";
		$meta->description = "Work with the best travel and tourism guide and agency| explore careers that will help you in growth only in GOwithGBI";
		$meta->keyword = "@GoWithGBI,join our team,explore Your career with GBI,exciting journey,research oriented process,challenges,explore your travel instinct,discover ,travel passion,learn,explore,discover";
		$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	}
	elseif($page == 'share-feedback'){
		$meta->title = "Your feedback are important to us| Kindly share it with us| GOwith GBI";
		$meta->description = "Upload your memories and write down your stories that will help both of us| your service is our responsibility| share it with fellow travelers| GOwithGBI";
		$meta->keyword = "";
		$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	}
	elseif($page == 'whats-new'){
		$meta->title = "Check out the upcoming tours and what’s currently happening| GOwithGBI";
		$meta->description = "Check out affordable travel and tourism deals and also the upcoming tours| plan your trip or weekend getaway wisely with GOwithGBI";
		$meta->keyword = "";
		$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	}
	elseif($page == 'platform-guide'){
		$meta->title = "Can’t find something, let GOwithGBI help you";
		$meta->description = "Learn more about the website with this and find out what you are actually looking for| GOwithGBI";
		$meta->keyword = "";
		$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	}
	elseif($page == 'image-gallery'){
		$meta->title = "Get virtual tour of India with GOwithGBI";
		$meta->description = "Explore the gallery of surprises and India tourism photos that will take you to different adventures| build your tourism story with GOwithGBI";
		$meta->keyword = "@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs";
		$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	}
	//return dd($meta);
    return view('app', ['meta' => $meta]);
  }
}