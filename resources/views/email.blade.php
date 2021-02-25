@component('mail::message')
Hello {{ $data['name'] }}


<p>Reset your GB International password by clicking on this link : 
	<br><br>
	 <a href="{{ $data['link'] }}">{{ $data['link'] }}</a>
	 <br><br><br><br>

Thanks,<br>
{{ config('app.name') }}
@endcomponent
