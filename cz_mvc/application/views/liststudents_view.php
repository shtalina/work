<div class="container" align="center">
<ul class="list-group" id="fio">
	<?php
	foreach ($data as $row) {
		echo '<a class="list-group-item list-group-item-action">'.$row['fio'].'</a>';
	}
	?>