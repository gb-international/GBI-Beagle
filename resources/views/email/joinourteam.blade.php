@component('mail::message')
# GBI-Career

User Details 


Name : {{ ucfirst($data['firstname']) }} {{ $data['lastname']}}

Email : {{ $data['email']}}

Contact Number : {{ $data['contactno']}}

Address : {{ $data['address']}} ( {{ $data['city']}}, {{ $data['state']}} - {{ $data['zipcode']}})

Position : {{ $data['postvancy'] }}

@component('mail::button', ['url' => $data['link']])
Click to see Resume
@endcomponent

User Message : {{ $data['messagescon']}}




Thanks,<br>
{{ config('app.name') }}
@endcomponent
