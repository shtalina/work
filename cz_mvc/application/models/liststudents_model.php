<?php


require_once( $_SERVER['DOCUMENT_ROOT'] . '/application/core/model.php');
class liststudents_model extends model
{
	function get_data() {
		$students = array ();

		for ($i=0; $i < count($obj->files); $i++){
			$item = array();
			$item['fio'] = $obj['fio'];
			$item['edecanat_id'] = $obj['edecanat_id'];
			if (!checkFioAndId($students, $item))
				array_push($students,$item);
		}
		echo json_encode($students);
	}
	function checkFioAndId($students, $item) {
		for ($i = 0; $i < count($students); $i++)
			if ($students[$i]->fio == $item->fio && $students[$i]->edecanat_id == $item->edecanat_id)
				return true;
			return false;

	}
}
?>