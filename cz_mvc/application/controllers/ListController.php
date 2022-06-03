<?php

namespace application\controllers;

use application\core\Controller;

class ListController extends Controller {
	public function studentsAction() {
		$this->view->render('list_students');
	}
}