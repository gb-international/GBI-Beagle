@component('mail::message')
# GBI-Booking Request

@component('mail::table')

| Name                   | Email                          | Contact Number      |
|-----------------       |:------------------------------:| -------------------:|
|{{ucfirst($data['name'])}}       |{{$data['email']}}              | {{$data['mobile']}} |


|Start Date                 |  End Date                     | No of Day               |
|---------------------------|:-----------------------------:| -----------------------:|
|{{$data['start_date']}}    |{{$data['end_date']}}          | {{$data['noofday']}}    |


|accomodation               | Person                        | Room                    |
|---------------------------|:-----------------------------:| -----------------------:|
|{{$data['accomodation']}}  |{{$data['person']}}            | {{$data['room']}}       |


| Cities                    | Sightseen                     | Transport               |
|---------------------------|:-----------------------------:| -----------------------:|
|{{$data['city']}}          |{{$data['sightseen']}}         | {{$data['transport']}}  |

| Itinerary                 |
|---------------------------|
|{{$data['itinerary']}}     |


@endcomponent


Thanks,<br>
{{ config('app.name') }}
@endcomponent
