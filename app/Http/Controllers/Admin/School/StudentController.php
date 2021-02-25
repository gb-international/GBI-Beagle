<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Student 

*/
namespace App\Http\Controllers\Admin\School;
use App\Http\Resources\StudentCollection;
use App\Model\School\Student;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new StudentCollection(Student::with('school')->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $index = count($data)-1;
        $school_id =  $data[$index]['school_id'];
        unset($data[$index]);


        foreach ($data as $student) {
            $student['school_id'] = $school_id;
            Student::create($student);
        }
        return response()->json(['Message'=> 'Successfully Added...']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\school  $school
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        return response()->json($student);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\student  $student
     * @return \Illuminate\Http\Response
     */
    public function edit(Student $student)
    {
        return response()->json($student);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $student)
    {
        $student->update($request->all());
        return response()->json(['message'=>'Successfully Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
        $student->delete();
        return response()->json('successfully deleted');
    }

    // Validate Escort
    public function validateStudent($request)
    {
        return $this->validate($request, [
            'first_name' => ['required',new AlphaSpace],
            'last_name' => ['required',new AlphaSpace],
            'father_name' => ['required',new AlphaSpace],
            'email' => ['required','email',new EmailValidate],
    		'mobile' => ['required','numeric',new PhoneNubmerValidate],

            'school_id' => 'required',
            'gender' => 'required',
            'dob' => 'required',
            'class' => 'required',
            'address' => 'required',
        ]);
    }
}
