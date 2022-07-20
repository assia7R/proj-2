import React, { useState } from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories";
function Prod() {
  const [data,setData]=useState(Categories);
  const filterResult=(catItem)=>{
const result = Categories.filter((curData)=>{
return curData.category===catItem;
});
setData(result);
  }
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
    <Link to="/"><a href="#team"><li>Team</li></a></Link>
      <Link to="/#founder"><a href="#founder"><li>About</li></a></Link>
      <Link to="/#quest"><a href="#quest"><li>FAQ</li></a></Link>
    </ul>
  </div>
</nav>
</div>
        <div
        class="product">
          <div class="be1">Our Sweets<br/></div>
          <div class='buttons-pr' id='buttons-pr'>
          <button class='btn1' exact onClick={()=>setData(Categories)}>All</button>
        <button class='btn1' exact onClick={()=>filterResult('Deserts')}>Deserts</button>
        <button class='btn1' exact onClick={()=>filterResult('Muffins')}>Muffins</button>
        <button class='btn1' exact onClick={()=>filterResult('Cookies')}>Cookies</button>
        <button class='btn1' exact onClick={()=>filterResult('Pastries')}>Pastries</button>
<button class='btn1'onClick={()=>filterResult('Donuts')}>Donuts</button>
</div>
{data.map((values)=>{
  const{id,title,price,image}=values;
  return(
    <>
        <div class="pro1" key={id}>
        <div class="pr-img">
        <Link to={"/values/"+values.id} ><a class = "column col-xs-6" id = "cap">
        <span class = "text"><h1>View detail</h1></span>
            <img class="pr00-img" src={image}/>
          <span class="pr-d">
          <br />{title}<br />
          <p>{price}</p>
        </span>
        </a>
        </Link>
        </div>
      </div>

</>
  )
})}

    </div>
    </div>
  );
}

export default Prod;