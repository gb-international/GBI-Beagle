<?php
namespace App\Helpers;
use Illuminate\Support\Str;
class UniqueSlug 
{
    public static function unique_slug($slug_name, $object, $this_id, $slug_column='slug'){        
        //Check if this Slug already exists 
        $checkSlug = $object->where($slug_column, $slug_name)->where('id','!=', $this_id)->exists();
        $slug = '';
        if($checkSlug){
            //Slug already exists.
            //Add numerical prefix at the end. Starting with 1
            $numericalPrefix = 1;
            while(1){  
                //Check if Slug with final prefix exists.
                $newSlug = $slug_name."_".$numericalPrefix++; //new Slug with incremented Slug Numerical Prefix
                $newSlug = Str::slug($newSlug); //String Slug
                $checkSlug = $object->where($slug_column, $newSlug)->where('id','!=', $this_id)->exists(); //Check if already exists in DB
                //This returns true if exists.
                if(!$checkSlug){
                    //There is not more coincidence. Finally found unique slug.
                    $slug = $newSlug; //New Slug 
                    break; //Break Loop
                }
            }

        }else{
            //Slug do not exists. Just use the selected Slug.
            $slug = $slug_name;
        }
        return $slug;
    }
}
?>