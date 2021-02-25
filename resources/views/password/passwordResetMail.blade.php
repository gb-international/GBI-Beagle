@component('mail::message')
# Reset GBInternational Password

Hi,{{ $data['name'] }}

Reset your GB International password by clicking on this link : 

@component('mail::button', ['url' => $data['link']])
Reset Password
@endcomponent


Thanks,<br>
{{ config('app.name') }}
@endcomponent
