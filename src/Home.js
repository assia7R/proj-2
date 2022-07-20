import React from "react";
import { Link } from "react-router-dom";
import larev from "./video/larev.mp4";
import "bootstrap/dist/css/bootstrap.min.css";


function Home(){
    return(
      
        <section class="section-2">       
         <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>GAZELLE</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="index.css" />
  <script href="index.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      <div class="header_content container">

<nav role="navigation">
  <div class="logo">Gazelle</div>        
  <div 
 id="video" class="video">
   <video autoPlay loop muted>
    <source src={larev} type="video/mp4"/></video></div>
  <div id="menuToggle">
    <input type="checkbox" />

    <span></span>
    <span></span>
    <span></span>

    <ul id="menu">
      <Link to='/prod'><li>Shop</li></Link>
      <a href="#team"><li>Team</li></a>
      <a href="#founder"><li>About</li></a>
      <a href="#quest"><li>FAQ</li></a>

    </ul>
  </div>
</nav>
</div>        

<div class="container">
  <a href="#Rectangle-1"
    class="scroll-down"> </a> 
</div>
       <div
          id="Rectangle-1"
          data-name="Rectangle 1"
          alt="Rectangle 1"
          class="Rectangle-1"
        >
        </div>

        <div
        id="best"
        class="best"
      ><div class="best1">Our Best Sellers<br/></div>
      <div class="pr">
        <div class="pr-img">
        <Link to="/values/5"><a  class = "column col-xs-6" id = "caption">
        <span class = "text"><h1>View detail</h1></span>
            <img class="pr1-img"/>
          <span class="pr-d">
          <br />Peach Tart<br />
          <p>4.99$</p>
        </span>
        </a>
        </Link>
      </div>
</div>
<div class="pr">
  <div class="pr-img">
  <Link to="/values/1"><a class = "column col-xs-6" id = "caption">
    <span class = "text"><h1>View detail</h1></span>
    <img class="pr2-img"/>
    <span class="pr-d">
      <br />Salted Caramel Cupcake<br />
      <p>2.50$</p>
    </span></a>
  </Link>
</div>
</div>
<div class="pr">
  <div class="pr-img">
  <Link to="/values/9"><a class = "column col-xs-6" id = "caption">
  <span class = "text"><h1>View detail</h1></span>
      <img class="pr3-img"/>
      <span class="pr-d">
        <br />Cinnamon Pear Donut<br />
        <p>3.00$</p>
      </span>
    </a></Link>
</div>
</div>   
    </div>
    <Link to='/prod'><button class="more" >All Sweets</button>
    </Link>

       <div
        id="team"
        class="team"
      ><div class="team1">Our Team<br/></div>
      <div class="pro">
      <a href = "pear.html" class = "co" id = "caption1">
      <span class = "text"><a href="https://www.instagram.com/sia17.1/" class="fa fa-instagram"></a>
      <a href="#" class="fa fa-youtube"></a>
</span>
        <div class="pr-img0"><img class="pr11-img"/>
        <span class="pr1-d">
          <br />James<br />
          <p>Sous Chef</p>
        </span>
      </div></a>
</div>
<div class="pro">      
<a href = "pear.html" class = "co" id = "caption1">
<span class = "text"><a href="https://www.instagram.com/sia17.1/" class="fa fa-instagram"></a>
<a href="#" class="fa fa-youtube"></a>
</span>
<div class="pr-img0"><img class="pr22-img"/>
  <span class="pr1-d">
    <br />Sali<br />
    <p>Pastry Chef</p>
  </span>
</div></a>
</div>
<div class="pro">     
 <a href = "pear.html" class = "co" id = "caption1">
 <span class = "text"><a href="https://www.instagram.com/sia17.1/" class="fa fa-instagram"></a>
 <a href="#" class="fa fa-youtube"></a>
</span>
<div class="pr-img0"><img class="pr33-img"/>
  <span class="pr1-d">
    <br />Laila<br />
    <p>Pastry Chef</p>
  </span>
</div></a>
</div>   
<div class="pro"> 
   <a href = "pear.html" class = "co" id = "caption1">
   <span class = "text"><a href="https://www.instagram.com/sia17.1/" class="fa fa-instagram"></a>
   <a href="#" class="fa fa-youtube"></a>
</span>
<div class="pr-img0"><img class="pr34-img"/>
  <span class="pr1-d">
    <br />Lilly<br />
    <p>Sous Chef</p>
  </span>
</div></a>
</div>    
    </div>
   
    <div id="about" class="About">
      <span class="Story">Our Story<br /></span>
      <span class="Story2">
        From such a young age Sali loved baking, she used to try new flavor. After college, she decided to start her small business, she used to get orders and prepares them at home, and after a while she noticed an increase in the demand, she decided to give birth to her childhood dream of owning a bakery.<br/>
        In late 2016, Gazelle was opened with a little help from talented friends along the way, a supportive community surrounding each store, and an endless supply of hungry and happy customers, Gazelle has grown up to become one of the best bakeries in town today. </span>
    </div>
      <div  class="sali2"></div>
      <div id="founder"class="sali"></div>

      <div
      id="line-1-outer"
      data-name="line 1"
      alt="line 1"
      class="line-1"
    >
    </div>
    <div
      id="line-2-outer"
      data-name="line 2"
      alt="line 2"
      class="line-2"
    >
    </div>
      <div class="Rectangle">
        
        <div class="pro">
          <div class="pr-img0"><img class="veg-img"/>
          <span class="pr1-l">
            <br />Vegan Option Available<br />
            <p>Healthier & Delicious</p>
        
          </span>
        </div>
        </div>
        <div class="pro">
          <div class="pr-img0"><img class="best-img"/>
          <span class="pr1-l">
            <br />Favorite Bakery<br />
            <p>2019 Reader's Choice</p>
          </span>
        </div>
        </div>   
        <div class="pro">
          <div class="pr-img0"><img class="del-img"/>
          <span class="pr1-l">
            <br />Free Delivery<br />
            <p>Delivered to your door step</p>
          </span>
        </div>
        </div>  </div> 
        
        <div class='container'>
        <h1 id="quest"> Question asked</h1>

        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Do you make custum cake design?   </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><p>Of course! Please feel free to email over any inspirational designs you may find through other sites, and will make a better one for you!</p></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What if I need to cancel my order?       </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><p>If paid in full, a 75% refund or a 100% store credit will be issued for any cancellations that are made 72 hours before the date of a custom order.   
</p></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
What makes your bakery so special?     </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><p>Yummmm, let’s start with our icing = Italian Buttercream…as if that wasn’t enough deliciousness. We sell at a PREMIUM PRICE, based on the following: We use 60% Single-Sourced Cacao chocolates, local & imported pureed fruits, and the best recipes in our arsenal. We create unique desserts & cakes to suite your taste, style, and size. Each cake, filling, and frosting is made with original recipes TO ORDER with local produce, dairy, & local veg-fed chickens’ eggs. </p></div>
    </div>
  </div>
</div>
        </div>

  <div class="Rectangle-outer">
    <div
      id="line-11-outer"
      
      class="line-11"
    >
    </div>
  <div
  id="line-22-outer"
  
  class="line-22"
>
</div>
<div
id="gaz-f-outer"
class="gaz-f"
><div key="0">Gazelle</div>
<div
id="opening-outer"
data-name="opening"
class="opening"
><div key="2">Opening Hours</div>
<div key="3">Mon - Fri | 7:00 AM - 9:00PM</div>
<div key="3">Saturday | 8:30 AM - 9:00PM</div>
<div key="3">Saturday | 8:30 AM - 11:00PM</div>
</div>
<div
id="home-ser-outer"
data-name="home-ser"
class="home-ser"
><div> 
  <span><a href="#"> Home </a></span>&nbsp;&nbsp;&nbsp;&nbsp;<span><a href="Shop.html"> Shop </a></span>&nbsp;&nbsp;&nbsp;&nbsp;<span><a href="#team"> Team </a></span>&nbsp;&nbsp;&nbsp;&nbsp;<span><a href="#founder"> About </a></span>&nbsp;&nbsp;&nbsp;&nbsp;<span><a href="#Rectangle-2"> Contact </a></span>&nbsp;&nbsp;&nbsp;&nbsp;<span><a href="FAQ.html"> FAQ </a></span></div>
</div>
<div
id="all-right-outer"
data-name="all-right"
class="all-right"
><div key="3">© 2022 Gazelle. All rights reserved.</div>
</div>
<div
id="adress-outer"
data-name="adress"
class="adress"
><div key="3">1170 Ste. Sandy Hill </div>
<div key="3">Ottawa, ON H4Y 1R7</div></div>
<div
id="contact11-outer"
data-name="contact11"
class="contact11"
><div key="3">(613) 577-4907</div>
<div key="3">contact@gazelle.agency.com</div></div>
<div
id="follow-outer"
data-name="follow"
class="follow"
>
<div key="3">Follow our delicious creation day by day!</div>
<a href="#" class="fa fa-facebook"></a>
<a href="#" class="fa fa-instagram"></a>
<a href="#" class="fa fa-youtube"></a></div>


</div>
        </div>
  </section>
    )
}
export default Home;