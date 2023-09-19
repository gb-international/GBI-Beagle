<?php
/*
Created by : Manas
Purpose : GBI Chat Bot

*/
namespace App\Http\Controllers\Admin\ChatBot;

use BotMan\BotMan\Messages\Outgoing\OutgoingMessage;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ChatBotController extends Controller
{

     public function booking($id)
    {
      $botman->hears('Booking Enquiry', function (BotMan $bot) {
            $bot->reply('Booking Options');
        });
    }
    public function payment($id)
    {
      $botman->hears('Got Stuck With Payment?', function (BotMan $bot) {
            $bot->reply('Payment Options');
        });
    }
    public function itinerary(Request $request){
        $botman->hears('Itinerary Queries', function (BotMan $bot) {
            $bot->reply('Itinerary Options');
        });
    }
    public function account(Request $request){
        $botman->hears('Account Settings', function (BotMan $bot) {
            $bot->reply('Account Options');
        });
    }
    public function signUp(Request $request){
        $botman->hears('Customer Sign Up', function (BotMan $bot) {
            $bot->reply('Sign Up');
        });
    }
    public function feedback(Request $request){
        $botman->hears('Feedback', function (BotMan $bot) {
            $bot->reply('Send Feedback');
        });
    }
    public function Queries(Request $request){
        $botman->hears('Queries', function (BotMan $bot) {
            $bot->reply('Other Queries');
        });
    }
}
