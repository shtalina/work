<?php
require_once 'application/models/group_model.php';
require_once 'application/core/controller.php';
class Controller_Groups extends Controller
	{
		function action_index()
		{
			$this->view->generate('groups_view.php', 'template_view.php');
		}
	}

?>