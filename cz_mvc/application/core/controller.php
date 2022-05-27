<?php



require_once( $_SERVER['DOCUMENT_ROOT'] . '/application/core/view.php');
class Controller{
    public $model;
    public $view;

    function __construct(){
        $this->view = new View();
    }
    
    function action_index(){
        
    }
}
?>