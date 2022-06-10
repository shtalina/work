<?php
namespace application\models;

use application\core\Model;

class Group extends Model
{
    function getGroup() {
        $group = $_GET['n'];
        $row = file_get_contents('https://portfolio.tspu.edu.ru/zzz/portfolio/meyder.php?gruppa=' .$group);
        $object = json_decode($row);
        $students = array ();
        for ($i=0; $i < count($object->files); $i++) {
         if (!in_array(($object->files[$i]->fio), $students)) {
            array_push($students, ($object->files[$i]->fio));
        }
    }
 
    }
}