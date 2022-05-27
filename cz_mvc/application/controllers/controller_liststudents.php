<?php
require_once( $_SERVER['DOCUMENT_ROOT'] . '/application/core/controller.php');
require_once( $_SERVER['DOCUMENT_ROOT'] . '/application/models/liststudents_model.php');
require_once( $_SERVER['DOCUMENT_ROOT'] . '/application/core/view.php');

class liststudents_controller extends Controller {
	function __constract(){
		$this->model = new liststudents_model();
		$this->view = new View();
	}
	function action_index() {
		$data = $this->model->get_data();
		$this -> view -> generate('liststudents_view.php', 'template_view.php', $data);
	}

	}
?>