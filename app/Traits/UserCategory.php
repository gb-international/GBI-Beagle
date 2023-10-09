<?php
namespace App\Traits;
use App\Model\School\EducationInstitute as EduInstitute;

trait UserCategory 
{
  public function educational_institute(){        
     return EduInstitute::where('id', 12)->first();
  }
    public function user_category($category=''){        
        switch ($category) {
            case "other-api":
                return $category;
              break;
            case "corporate-api":
                return $category;
              break;
            case "student-api":
                return $category;
              break;
            default:
            return "school-api";
        }    
    }
}

?>