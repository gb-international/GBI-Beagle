@component('mail::message')
# GBI-Booking
Your Booking Details is given below : 

@component('mail::table')

|Start Date                 |  End Date                     | No of Day               |
|---------------------------|:-----------------------------:| -----------------------:|
|{{$data['start_date']}}    |{{$data['end_date']}}          | {{$data['noofday']}}    |


|accomodation               | Person                        | Room                    |
|---------------------------|:-----------------------------:| -----------------------:|
|{{$data['accomodation']}}  |{{$data['person']}}            | {{$data['room']}}       |


| Cities                    | Sightseen                     | Transport               |
|---------------------------|:-----------------------------:| -----------------------:|
|{{$data['city']}}          |{{$data['sightseen']}}         | {{$data['transport']}}  |

| Itinerary              |
|------------------------|
|{{$data['itinerary']}}  |


@endcomponent


Thanks,<br>
{{ config('app.name') }}
@endcomponent
