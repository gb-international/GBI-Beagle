<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;


class singlePermissionResource extends JsonResource
{

    public function toArray($request)
    {

        $createPerm = false;
        $editPerm = false;
        $deletePerm = false;
        $publishPerm = false;
        $viewPerm = false;

        if($this->create == 1){
            $createPerm = true;
        }
        if($this->edit == 1){
            $editPerm = true;
        }
        if($this->delete == 1){
            $deletePerm = true;
        }
        if($this->publish == 1){
            $publishPerm = true;
        }
        if($this->view == 1){
            $viewPerm = true;
        }

        return [
            'createPerm' => $createPerm,
            'editPerm' => $editPerm,
            'deletePerm' => $deletePerm,
            'publishPerm' => $publishPerm,
            'viewPerm' => $viewPerm
        ];
    }
}
