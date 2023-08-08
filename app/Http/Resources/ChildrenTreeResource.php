<?php

namespace App\Http\Resources;

use App\Model\RoleAndPermission\Roles;
use App\Model\RoleAndPermission\Department;
use Illuminate\Http\Resources\Json\JsonResource;

class ChildrenTreeResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        if($this->role_id){
            $role = Roles::find($this->role_id);
            $role_name = $role->name;
            //$role_name = 'N/A';
            //$department_name = 'N/A';
        }
        
        if($this->department_id){
            $department = Department::find($this->department_id);
            $department_name = $department->name;
        }

        return [
            'id' => $this->id,
            'role_id' => $this->user_role,
            'title' => $role_name,
            'name' => $this->name,
            'user_role_id' => $this->user_role_id,
            //'children' => new ChildrenTreeResource()
        ];
    }
}
