<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class TrackCorpPayment extends Model
{
	protected $table = 'track_corp_payments';
    protected $fillable = [
    	'user_id',
    	'travel_code',
    	'amount',
    	'tour_id',
    	'company_id',
    	'added_by',
		'billing_name',
		'billing_address',
		'billing_city',
		'billing_state',
		'billing_country',
		'billing_zip',
		'billing_tel',
		'billing_email',
		'delivery_name',
		'delivery_address',
		'delivery_city',
		'delivery_state',
		'delivery_country',
		'delivery_zip',
		'delivery_tel',
		'delivery_email',
	];
}
