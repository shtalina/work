<?php

namespace application\controllers;

use application\core\Controller;
use application\models\Main;


class MainController extends Controller
{

    public function indexAction()
    {

        $this->view->render('Главная страница');
//        $this->view->render('Главная страница');
    }

    public function loginAction()
    {
        $this->view->render('Страница авторизации');
    }

    public function contactAction() {
        
        $this->view->render('Контакты');
    }

}