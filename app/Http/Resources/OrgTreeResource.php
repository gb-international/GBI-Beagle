<?php

namespace App\Http\Resources;

use App\User;
use App\Model\RoleAndPermission\Roles;
use App\Model\RoleAndPermission\Department;
use App\Http\Resources\ManagerTreeResource;
use Illuminate\Http\Resources\Json\JsonResource;

class OrgTreeResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        
        if($this->department_id){
            $department = Department::find($this->department_id);
            $department_name = $department->name;
        }

        $childrens = User::where('parent_user', $this->id)->get();


        return [
            'id' => $this->id,
            'role_id' => $this->user_role,
            'title' => $department_name,
            'user_role_id' => $this->user_role_id,
            'name' => $this->name,
            'children' => ManagerTreeResource::collection($childrens)
        ];
    }
}
