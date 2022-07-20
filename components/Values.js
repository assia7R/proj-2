import React from "react";
import { Link, useParams } from "react-router-dom";
import Categories from "./Categories";
import "bootstrap/dist/css/bootstrap.min.css";

function Values() {
  const {id} = useParams();
  const thisProduct = Categories.find(prod => prod.id === id);
  var x =((Math.floor(Math.random() * 12)+1).toString());
  if(x!=id){
  var a =x;}
  var y =((Math.floor(Math.random() * 12)+1).toString());
  if(y!=a){
    var b =y;}
  var z =((Math.floor(Math.random() * 12)+1).toString());
  if(z!=b){
    var c =z;}
  const nextProduct = Categories.find(prod => prod.id === a);
  const nextnextProduct = Categories.find(prod => prod.id === b);
  const nextnextnextProduct = Categories.find(prod => prod.id === c);
  
  return (
    <div className="App">
<div class="header_content container">
<nav role="navigation">
  <div class="logo1">Gazelle</div>        
  <div id="menuTog">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu1">
    <Link to="/"><li>Home</li></Link>
    <Link to='/prod'><li>Shop</li></Link>
    <Link to="/"><a href="#team"><li>Team</li></a></Link>
      <Link to="/#founder"><a href="#founder"><li>About</li></a></Link>
      <Link to="/#quest"><a href="#quest"><li>FAQ</li></a></Link>
</ul>
  </div>
</nav>
</div>

    <div class="pr">
      <div class='filt'>Products / {thisProduct.category} / {thisProduct.title}</div>
        <div class="pr-img">
        <div class = "column col-xs-6" >
            <img class="pr-iimg" src={thisProduct.image}/>
          <span class="pr-prod">
          <br />{thisProduct.title}<br />
          <h3>{thisProduct.des}<br /></h3>
          <p>{thisProduct.price}</p>
        </span>
        </div>
      </div>
      <Link to='/pay'><button class="buy" >Purchase</button>
    </Link>
    
      <div class="b1">You might also like<br/></div>
        <div class="pr-img">
        <div class = "column col-xs-6" >
            <img class="prp-iimg" src={nextProduct.image}/>
            <Link to={"/values/"+nextProduct.id} ><span class="prp-prod">
          <br />{nextProduct.title}<br />
          <p>{nextProduct.price}</p>
        </span></Link>
        </div></div>
        <div class="pr-img">
        <div class = "column col-xs-6" >
            <img class="prp1-iimg" src={nextnextProduct.image}/>
            <Link to={"/values/"+nextnextProduct.id} ><span class="prp1-prod">
          <br />{nextnextProduct.title}<br />
          <p>{nextnextProduct.price}</p>
        </span></Link>
        </div></div>
        <div class="pr-img">
        <div class = "column col-xs-6" >
            <img class="prp2-iimg" src={nextnextnextProduct.image}/>
            <Link to={"/values/"+nextnextnextProduct.id} ><span class="prp2-prod">
          <br />{nextnextnextProduct.title}<br />
          <p>{nextnextnextProduct.price}</p>
        </span></Link>
        </div>
        </div>

        </div>

    </div>

  );
}

export default Values;
