@component('mail::message')
# Contact Us Mail

@component('mail::table')

| Name             | Email            | Contact Number      |
|----------------- |:----------------:| -------------------:|
|{{ucfirst($data['name'])}} |{{$data['email']}}| {{$data['mobile']}} |



@endcomponent

Message : 

{{$data['messagecon']}}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
