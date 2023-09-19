<?php
/*
Created by : Manas
Purpose : Manage Amenities

*/
namespace App\Http\Controllers\Admin\Hotel;
use App\Http\Controllers\Controller;
use App\Model\Hotel\Amenities;
use Illuminate\Http\Request;
use App\Traits\ImageTrait;

class AmenitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;

    public function all($size)
    {
        return response()->json(Amenities::select([
            'id','description','title','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }

    public function index()
    {
        return response()->json(Amenities::select([
            'id','description','title','updated_at'
            ])
            ->latest('updated_at')
            ->get());
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

        if($request->image){
            $imagename = explode('.',$request->image[0]['name'])[0];
            //$data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.hotel_image'),$imagename);
            $data['alt'] = $imagename;
        }
        Amenities::create($data);
        return response()->json('succesfull created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Post\Amenities  $amn
     * @return \Illuminate\Http\Response
     */
    public function show(Amenities $amn)
    {
        return response()->json($amn);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Post\Amenities  $amn
     * @return \Illuminate\Http\Response
     */
    public function edit(Amenities $amn)
    {
        return response()->json($amn);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Post\Amenities  $amn
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Amenities $amn)
    {
        $data = $request->all();        
        if($request->image){
            $imagename = explode('.',$request->image[0]['name'])[0];
            //$data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.hotel_image'),$imagename);
            $this->AwsDeleteImage($amn->image);
        }else{
            unset($data['image']);
        }
        $amn->update($data);
        return response()->json('succesfull created');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Post\Amenities  $amn
     * @return \Illuminate\Http\Response
     */
    public function destroy(Amenities $amn)
    {
        $this->AwsDeleteImage($amn->image);
        $amn->delete();
        return response()->json('successfully deleted');
    }
}
