<?php
	session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>FreshTek</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

  <link rel="stylesheet" href="/webshop/css/style.css">
</head>
<body id="fT" data-spy="scroll" data-target=".navbar" data-offset="60">
<!--Section: Block Content-->
<!-- <section class="mb-5">

  <div class="row">
    <div class="col-md-6 mb-4 mb-md-0">

      <div id="mdb-lightbox-ui">

      <div class="mdb-lightbox"></div>

        <div class="row product-gallery mx-1">

        
            <figure class="view overlay rounded z-depth-1 main-img col-12">
           
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                  class="img-fluid z-depth-1 w-50"></img>
              
            </figure>
		</div>
        

      </div>

    </div>
    <div class="col-md-6">
      <h3 class="mb-2  text-uppercase extra-large font-weight-bold">IPhone</h3>

      <p><span class="mr-1"><strong>$12.99</strong></span></p>
      <p class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
        error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
        officia quis dolore quos sapiente tempore alias.</p>
      <hr>
 
      <button type="button" class="btn btn-primary btn-md mr-1 mb-2">Add to cart</button>

	</div>

</section> -->

  <nav class="navbar navbar-default navbar-fixed-top">
  
    <div class="container">
		<a class="navbar-brand fTLogoText" href="#fT">FreshTek</a>
		<div class="collapse navbar-collapse" id="navbar">
	 
		  <ul class="nav navbar-nav navbar-right">
			<li><a href="#shop">Shop</a></li>
			<li><a href="#service">Service</a></li>
			<li><a href="#about">About us</a></li>
			<li><a href="#contact">Contact</a></li>

			<?php
				if(!isset($_SESSION["name"])) {
			?>
			<li class="mt-3 logInBtn" > <p ><a href="login.html" class="btn btn-info" id="loginBtn">
				<span class="glyphicon glyphicon-user "></span>Login 
			  </a></p>
			 </li>

			<?php
				}else {
			?>
			<li class="mt-3 logInBtn" > <p ><a href="logout.php" class="btn btn-info" id="logoutBtn">
				<span class="glyphicon glyphicon-user "></span>Logout 
			  </a></p>
			 </li>

			 <?php
				}
			 ?>

			 <li><i class="fa sC" style="font-size:24px">&#xf07a;</i>
				<span class='badge badge-warning' id='lblCartCount'> 2 </span></li>
		  </ul>
		</div>

        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                
        </button>
        
      </div>
     
    </div>
  </nav>


  <div class="jumbotron text-center">
    <h1>Fresh Tek</h1> 
    <p> teck for your needs!</p> 
  </div>


<!-- carousel -->
<div class="container">
	<h2>Powerful. Wonderful. Brilliant </h2>  
	<div id="myCarousel" class="carousel slide w-50" data-ride="carousel">
	  <!-- Indicators -->
	  <ol class="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		<li data-target="#myCarousel" data-slide-to="1"></li>
		<li data-target="#myCarousel" data-slide-to="2"></li>
		<li data-target="#myCarousel" data-slide-to="3"></li>
		<li data-target="#myCarousel" data-slide-to="4"></li>
	  </ol>
  
	  <!-- Wrapper for slides -->
	  <div class="carousel-inner">
		<div class="item active">
		  <img class="carouselimg" src="img/iphone grey.jpg" alt="Iphone" >
		</div>
  
		<div class="item">
		  <img class="carouselimg" src="img/ipad.jpg" alt="IPad">
		</div>

		<div class="item">
			<img class="carouselimg" src="img/AppleWatch.png" alt="AppleWatch" >
		  </div>

		  <div class="item">
			<img class="carouselimg" src="img/Huawei.jpg" alt="Huawei" >
		  </div>
	  
		<div class="item">
		  <img class="carouselimg" src="img/macbook-pro-13-2020.jpg" alt="MacBook">
		</div>
	  </div>
  
	  <!-- Left and right controls -->
	  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
		<span class="glyphicon glyphicon-chevron-left"></span>
		<span class="sr-only">Previous</span>
	  </a>
	  <a class="right carousel-control" href="#myCarousel" data-slide="next">
		<span class="glyphicon glyphicon-chevron-right"></span>
		<span class="sr-only">Next</span>
	  </a>
	</div>
  </div>

  <!-- cards -->
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
 <!--  <div class="container bootdey">
	  <div class="col-md-3">
		  <section class="panel">
			  <div class="panel-body">
				  <input type="text" placeholder="Keyword Search" class="form-control" />
			  </div>
		  </section>
		  <section class="panel">
			  <header class="panel-heading">
				  Category
			  </header>
			  <div class="panel-body">
				  <ul class="nav prod-cat">
					  <li>
						  <a class="active"><i class="fa fa-angle-right"></i> Handy's</a>
						  <ul class="nav">
							  <li class="active"><a href="#">- IPhone</a></li>
							  <li><a href="#">- Samsung</a></li>
							  <li><a href="#">- OnePlus</a></li>
						  </ul> 
					  </li>
					  <li>
						<a ><i class="fa fa-angle-right"></i> Tablets</a>
					</li>
					  <li>
						  <a ><i class="fa fa-angle-right"></i> Computer</a>
					  </li>
					  <li>
						  <a ><i class="fa fa-angle-right"></i> Notebooks</a>
					  </li>
				
				  </ul>
			  </div>
		  </section> -->
		  <!-- price range  -->
		  <!-- <section class="panel">
			  <header class="panel-heading">
				  Price Range
			  </header>
			  <div class="panel-body sliders">
				  <div id="slider-range" class="slider"></div>
				  <div class="slider-info">
					  <span id="slider-range-amount"></span>
				  </div>
			  </div>
		  </section> -->

		  <!-- Filter -->
		  <!-- <section class="panel">
			  <header class="panel-heading">
				  Filter
			  </header>
			  <div class="panel-body">
				  <form role="form product-form">
					  <div class="form-group">
						  <label>Brand</label>
						  <select class="form-control hasCustomSelect" style="-webkit-appearance: menulist-button; width: 231px; position: absolute; opacity: 0; height: 34px; font-size: 12px;">
							  <option>Wallmart</option>
							  <option>Catseye</option>
							  <option>Moonsoon</option>
							  <option>Textmart</option>
						  </select>
						  <span class="customSelect form-control" style="display: inline-block;"><span class="customSelectInner" style="width: 209px; display: inline-block;">Wallmart</span></span>
					  </div>
					  <div class="form-group">
						  <label>Color</label>
						  <select class="form-control hasCustomSelect" style="-webkit-appearance: menulist-button; width: 231px; position: absolute; opacity: 0; height: 34px; font-size: 12px;">
							  <option>White</option>
							  <option>Black</option>
							  <option>Red</option>
							  <option>Green</option>
						  </select>
						  <span class="customSelect form-control" style="display: inline-block;"><span class="customSelectInner" style="width: 209px; display: inline-block;">White</span></span>
					  </div>
					  <div class="form-group">
						  <label>Type</label>
						  <select class="form-control hasCustomSelect" style="-webkit-appearance: menulist-button; width: 231px; position: absolute; opacity: 0; height: 34px; font-size: 12px;">
							  <option>Small</option>
							  <option>Medium</option>
							  <option>Large</option>
							  <option>Extra Large</option>
						  </select>
						  <span class="customSelect form-control" style="display: inline-block;"><span class="customSelectInner" style="width: 209px; display: inline-block;">Small</span></span>
					  </div>
					  <button class="btn btn-primary" type="submit">Filter</button>
				  </form>
			  </div>
		  </section> -->

		<!-- Best Seller -->
		  <!-- <section class="panel">
			  <header class="panel-heading">
				  Best Seller
			  </header>
			  <div class="panel-body">
				  <div class="best-seller">
					  <article class="media">
						  <a class="pull-left thumb p-thumb">
							  <img src="https://via.placeholder.com/250x220/FFB6C1/000000" />
						  </a>
						  <div class="media-body">
							  <a href="#" class="p-head">Item One Tittle</a>
							  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						  </div>
					  </article>
					  <article class="media">
						  <a class="pull-left thumb p-thumb">
							  <img src="https://via.placeholder.com/250x220/A2BE2/000000" />
						  </a>
						  <div class="media-body">
							  <a href="#" class="p-head">Item Two Tittle</a>
							  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						  </div>
					  </article>
					  <article class="media">
						  <a class="pull-left thumb p-thumb">
							  <img src="https://via.placeholder.com/250x220/6495ED/000000" />
						  </a>
						  <div class="media-body">
							  <a href="#" class="p-head">Item Three Tittle</a>
							  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						  </div>
					  </article>
				  </div>
			  </div>
		  </section>
	  </div>
	  <div class="col-md-9">
		  <section class="panel">
			  <div class="panel-body">
				  <div class="pull-right">
					  <ul class="pagination pagination-sm pro-page-list">
						  <li><a href="#">1</a></li>
						  <li><a href="#">2</a></li>
						  <li><a href="#">3</a></li>
						  <li><a href="#">»</a></li>
					  </ul>
				  </div>
			  </div> -->
		 <!--  </section>
  
		  <div class="row product-list">
			  <div class="col-md-4">
				  <section class="panel">
					  <div class="pro-img-box">
						  <img src="img/iphone12P.jpg" alt="Iphone12Pro" />
						  <a href="#" class="adtocart">
							  <i class="fa fa-shopping-cart"></i>
						  </a>
					  </div>
  
					  <div class="panel-body text-center">
						  <h4>
							  <a href="#" class="pro-title">
								  IPhone 12 Pro
							  </a>
						  </h4>
						  <p class="price">$1200.00</p>
					  </div>
				  </section>
			  </div>
			  <div class="col-md-4">
				  <section class="panel">
					  <div class="pro-img-box">
						  <img src="img/huaweip40lite.jpg" alt="" />
						  <a href="#" class="adtocart">
							  <i class="fa fa-shopping-cart"></i>
						  </a>
					  </div>
  
					  <div class="panel-body text-center">
						  <h4>
							  <a href="#" class="pro-title">
								  Huawei P40 Lite
							  </a>
						  </h4>
						  <p class="price">$1000.00</p>
					  </div>
				  </section>
			  </div>
			  <div class="col-md-4">
				  <section class="panel">
					  <div class="pro-img-box">
						  <img src="img/GalaxyS215G.png" alt="" />
						  <a href="#" class="adtocart">
							  <i class="fa fa-shopping-cart"></i>
						  </a>
					  </div>
  
					  <div class="panel-body text-center">
						  <h4>
							  <a href="#" class="pro-title">
								  Galaxy S21 5G
							  </a>
						  </h4>
						  <p class="price">$1300.00</p>
					  </div>
				  </section>
			  </div>
			  <div class="col-md-4">
				  <section class="panel">
					  <div class="pro-img-box">
						  <img src="img/OnePlusNordPhone.jpg" alt="" />
						  <a href="#" class="adtocart">
							  <i class="fa fa-shopping-cart"></i>
						  </a>
					  </div>
  
					  <div class="panel-body text-center">
						  <h4>
							  <a href="#" class="pro-title">
								  One Plus Nord
							  </a>
						  </h4>
						  <p class="price">$600.00</p>
					  </div>
				  </section>
			  </div>
			  <div class="col-md-4">
				  <section class="panel">
					  <div class="pro-img-box">
						  <img src="img/IphoneSe2020.jpg" alt="IphoneSe" />
						  <a href="#" class="adtocart">
							  <i class="fa fa-shopping-cart"></i>
						  </a>
					  </div>
  
					  <div class="panel-body text-center">
						  <h4>
							  <a href="#" class="pro-title">
								  Iphone SE
							  </a>
						  </h4>
						  <p class="price">$500.00</p>
					  </div>
				  </section>
			  </div>
			  <div class="col-md-4">
				  <section class="panel">
					  <div class="pro-img-box">
						  <img src="img/OppoA91.jpg" alt="" />
						  <a href="#" class="adtocart">
							  <i class="fa fa-shopping-cart"></i>
						  </a>
					  </div>
  
					  <div class="panel-body text-center">
						  <h4>
							  <a href="#" class="pro-title">
								  Oppo A91
							  </a>
						  </h4>
						  <p class="price">$400.00</p>
					  </div>
				  </section>
			  </div>
		  </div>
	  </div>
  </div> -->

  <!-- login -->
<!-- <div class="container login-container">
	<div class="row">
		<div class="col-md-6 login-form-1">
			<h3>Login</h3>
			<form action="createuser.php" method="POST">
				<div class="form-group">
					<input type="text" class="form-control" name="name" placeholder="Your Email *" required />
				</div>
				<div class="form-group">
					<input type="password" class="form-control" name="password" placeholder="Your Password *" required />
				</div>
				<div class="form-group">
					<input type="submit" class="btnSubmit" name="submit" value="Login" />
				</div>
				<div class="form-group ">
					<a href="#" class="ForgetPwd">Forget Password?</a>
				</div>
			</form>
		</div>
	</div>
</div> -->

  
  <!-- Footer -->
  <!-- <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">FreshTek</p>
    </div> -->
    <!-- /.container -->
  <!-- </footer> -->
  <!-- Bootstrap core JavaScript -->
  <!-- <script src="vendor/jquery/jquery.min.js"></script> -->
  <!-- <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script> -->
  <script type="module" src="/webshop/script/script.js"></script>
  <script type="module" src="/webshop/script/ajax.js"></script>
</body>
</html>

