<?php
namespace App\Helpers;
class UserCategory 
{
    public static function user_category($category=''){        
        switch ($category) {
            case "other":
                return $category;
              break;
            case "corporate":
                return $category;
              break;
            case "student":
                return $category;
              break;
            default:
            return "school";
        }    
    }
}

?>