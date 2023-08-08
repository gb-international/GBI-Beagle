<?php
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\LinkShortner\ShortLink;
class ShortLinkController extends Controller
{

  public function index($shCode) 
  {
   	$fullLink = ShortLink::where('shortCode', $shCode)->first();

   	if($fullLink){
   		return redirect('/'.$fullLink->link);
   	} else {
   		return redirect('/');
   	}

   	
  }
}