<?php

namespace App\Http\Resources;

use App\User;
use App\Model\RoleAndPermission\Roles;
use App\Model\RoleAndPermission\Department;
use App\Http\Resources\ChildrenTreeResource;
use Illuminate\Http\Resources\Json\JsonResource;

class AsstManagerTreeResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        if($this->user_role){
            $role = Roles::find($this->user_role);
            $role_name = $role->name;
            //$role_name = 'N/A';
            //$department_name = 'N/A';
        }
        
        if($this->department_id){
            $department = Department::find($this->department_id);
            $department_name = $department->name;
        }

        $childrens = User::where('parent_user', $this->id)->get();

        return [
            'id' => $this->id,
            'role_id' => $this->user_role,
            'title' => $role_name,
            'user_role_id' => $this->user_role_id,
            'name' => $this->name,
            'children' => ChildrenTreeResource::collection($childrens)
        ];
    }
}
