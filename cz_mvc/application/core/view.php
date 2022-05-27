<?php
class View {
    public function generate($content_view, $template_view, $data = null) {
        include ($_SERVER['DOCUMENT_ROOT'] . '/application/views/' . $template_view);
    } 
}
?>
