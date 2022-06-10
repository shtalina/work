<?php

namespace application\controllers;

use application\core\Controller;
use application\models\Main;

class GroupController extends Controller
{

public function groupAction()
{
    $result = $this->model->getGroup();
    $vars = [
        'students' => $result,
    ];
    $number = $_GET['n'];
    $this->view->render('Список студентов группы ' .$number);
}
}