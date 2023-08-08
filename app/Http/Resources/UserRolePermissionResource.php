<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Model\RoleAndPermission\Permission;
use App\Model\RoleAndPermission\UserRole;
use Carbon\Carbon;
use App\User;


class UserRolePermissionResource extends JsonResource
{

    public function toArray($request)
    {

        $createPerm = 'Disabled';
        $editPerm = 'Disabled';
        $deletePerm = 'Disabled';
        $publishPerm = 'Disabled';
        $viewPerm = 'Disabled';

        if($this->create == 'true'){
            $createPerm = 'Enabled';
        }
        if($this->edit == 'true'){
            $editPerm = 'Enabled';
        }
        if($this->delete == 'true'){
            $deletePerm = 'Enabled';
        }
        if($this->publish == 'true'){
            $publishPerm = 'Enabled';
        }
        if($this->view == 'true'){
            $viewPerm = 'Enabled';
        }
       $userRole = UserRole::find($this->user_roles_id);
       $permission = Permission::find($this->permission_id);

        return [
            'id' => $this->id,
            'user_id' => $userRole->user_id,
            'permission' => $permission->name,
            'permission_id' => $permission->id,
            'create' => $createPerm,
            'edit' => $editPerm,
            'delete' => $deletePerm,
            'publish' => $publishPerm,
            'view' => $viewPerm,
            'updated_at' => date('d-m-Y', strtotime($this->updated_at)),
        ];
    }
}
