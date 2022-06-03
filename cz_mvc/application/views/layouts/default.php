<html lang="en">
  <head>
    <html lang="ru" xml:lang="ru" xmlns="http://www.w3.org/1999/xhtml">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
<script src="public/js/connect.js"></script>
<script src = "public/js/code.js"></script>
<title>Главная страница</title>
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
   <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/sticky-footer-navbar/">
 
    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/navbars/">

    

    <!-- Bootstrap core CSS -->
<link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">


    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
      #footer{
    position: fixed; /* Фиксированное положение */
    left: 0; bottom: 0; /* Левый нижний угол */
    padding: 10px; /* Поля вокруг текста */
   /* Цвет фона */
  /* Цвет текста */
    width: 100%; /* Ширина слоя */
      }
    </style>
    <!-- Custom styles for this template -->
    <link href="css/style.css" rel="stylesheet">
  </head>

  <body onload="mainOnLoad()">
 

  <main>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" aria-label="Ninth navbar example">
    <div class="container-xl">
      <a class="navbar-brand" href="#">JobCenter</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

     <div class="collapse navbar-collapse" id="navbarsExample07XL">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="/">Факультеты</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1">Контакты</a>
          </li>
         </ul>
       <ul class="nav justify-content-end">
  		<li class="nav-item">
    		<a class="nav-link" aria-current="page" href="#">Выход</a>
	   </li>
  	   </ul> 
       </div>
    </div>
  </nav>
  <br>  
<br>
<div class="container">
  

        <?php echo $content; ?>

 
</div>
</main>
<br>
<div id="footer">

  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-muted">© 2022 ЦСЗСВ</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    </a>

   </footer>
</div>


    <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

<!--    <script>
     function showStudent() {
        var n = this.getAttribute("fio");
       var out = `<td id="fio">${n}</td>`;
      console.log(id, name);     
     }
    </script> -->
</body>    
</html>