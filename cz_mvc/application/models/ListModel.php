<?php

namespace application\models;

use application\core\Model;

class ListModel extends Model {

	public function getList() {
		$group = $_POST["get-users"];
        $rows =file_get_contents('https://portfolio.tspu.edu.ru/zzz/portfolio/meyder.php?gruppa='.$_POST['group']);
        $object = json_decode($rows);
		$students = array();
		for ($i=0; $i < count($object->files); $i++){
                $students = ($object->files[$i]->fio);
            }    
        }
	}

?>