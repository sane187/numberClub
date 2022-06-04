let cardArr = document.querySelectorAll(".card-row");
let cardSmArr = document.querySelectorAll(".card-sm-row");

const card = [...cardArr];
const cardSm = [...cardSmArr];

const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const Arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const Arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//------------------------------------------------------------------//

card.map((item) => {
  Arr.forEach((val) => {
    let dov = document.createElement("div");
    dov.classList.add("col-xl-3", "col-lg-3", "col-md-3", "col-18", "pull-up");
    dov.innerHTML = `<div style="border-radius:10px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
         <div class="d-flex justify-content-between align-items-center col-div px-2 py-1 ">
            
             <div class="d-inline-flex"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
             <button class="btn-card-heart"><i class="fa-solid fa-heart"></i></button>
           </div>
     <div class="d-flex flex-column bg-cont">
      
     
    
     <div class="d-flex justify-content-center col-div-2 mt-2">
       
    <h1 class="mb-0 fw-bold" style="font-size:2rem">8284-<span style="color:#9e48cd ;">095-909</span></h1>
    
       
     </div>
    
    <div class="d-flex justify-content-center col-div-3 py-1">
    Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span class="mx-1"> RTP</span> | <a href="#" class="ms-1" style="font-size:.6rem; margin-top:2px"><span>SIMILAR NUMBERS</span></a>
    </div>
    
    <div class="d-flex justify-content-center align-items-center card-icon-cont py-3">
  
   <h4 class="mb-0 fw-bold">₹59,999</h4><div class="vl mx-1"></div><button class=""><i class="fa-solid fa-cart-shopping"></i></button>
   
    <div class="vl mx-1"></div>
    <button class="py-2"><i class="fa-solid fa-clipboard-check d-block"></i></button>
     <div class="vl mx-1"></div>
    <button>Buy</button> 
    
    
    </div>
    </div>
    `;
    item.appendChild(dov);
  });
});

cardSm.map((item) => {
  Arr.forEach((val) => {
    let dov = document.createElement("div");
    dov.classList.add("col-6", "col-md-6", "col-18", "pull-up");
    dov.innerHTML = `  <div style="border-top-left-radius:5px;border-top-right-radius:5px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );">
    <div class="d-flex justify-content-between align-items-center col-div px-2 ">
    <div class="d-inline-flex"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
    <button class="btn-card-heart"><i class="fa-solid fa-heart"></i></button>
  </div>
      </div>
<div class="d-flex flex-column bg-cont">
 
<div class="d-flex flex-column align-items-center col-div-2 mt-1">
   
<h1 class="mb-0 fw-bold">82-<span style="color:rgb(21,30,82);">9095-9095</span></h1>
</div>

<div class="d-flex justify-content-center col-div-3 py-1">
Total -<strong class="mx-1">37</strong> | Sum - <strong class="mx-1">8</strong> | <span class="mx-1">RTP</span> |
<a href="#" class="ms-1"><span>SIMILAR NUMBERS</span></a>
</div>

<div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">

<h6 class="mb-0 fw-bold">₹59,999</h6><div class="vl mx-1"></div><button class=""><i class="fa-solid fa-cart-shopping"></i></button>
   
    <div class="vl mx-1"></div>
    <button class="py-2"><i class="fa-solid fa-clipboard-check d-block"></i></button>
     <div class="vl mx-1"></div>
    <button>Buy</button> 
    
</div>
</div>
</div>
    `;
    item.appendChild(dov);
  });
});

//------------------------------------------------------------------------------------------------------//

// const select=document.querySelector(".vip-select");
// const pills=document.querySelector("#select-pills");

// let filterArr=[];

// select.addEventListener("change",function(event){
//   const val=event.target.value;
//   if(!filterArr.includes(val) )
//   {filterArr.push(val);
//   pillsDisplay();
// }
// })

// const clearCategory=()=>{
//   filterArr.splice(0,filterArr.length);
//   pills.innerHTML="";

// }

// const pillsDisplay =()=>{
//   pills.innerHTML="";
// filterArr.forEach((item,index)=>{

//   const pillDiv=document.createElement("div");
// pillDiv.className="pill-div";

//   const p=document.createElement("p");
//   p.innerText=item;
//   p.className="pills-content";
//   const btn=document.createElement("button")
//   btn.innerText="X";
//   btn.classList.add("pill-btn",`${index}`);
//   btn.addEventListener('click', function(e){
//     let rmv = e.target.classList[1];
//     if (rmv > -1) {
//       filterArr.splice(rmv, 1);}
//       pillsDisplay();
//   }
//   );
//   pillDiv.append(p);
//   pillDiv.append(btn);
//   pills.append(pillDiv);

// })
// }

//------Card Vip ----------------------------//
let cardArr2 = document.querySelectorAll(".card-vip-row");
const card2 = [...cardArr2];

card2.map((item) => {
  Arr3.forEach((val) => {
    let dov = document.createElement("div");
    dov.classList.add("col-xl-4", "col-lg-4", "col-md-4", "col-18", "pull-up");
    dov.innerHTML = `
<div style="border-radius:10px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
    <div class="d-flex justify-content-around align-items-center col-div mt-2 mb-1">
        <i class="fa-solid fa-crown"> </i>
        <h4 class="mb-0">₹3500/-</h4>
      </div>
<div class="d-flex flex-column bg-cont" style="border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;">
 


<div class="d-flex flex-column align-items-center col-div-2 mt-2">
  
<h2 class="mb-0 fw-bold">82-<span style="color:rgb(21,30,82);">9095-9095</span></h2>
<a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
</div>

<div class="d-flex justify-content-center col-div-3 py-1">
Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span>R2P</span>
</div>

<div class="d-flex justify-content-center align-items-center card-icon-cont py-3">
<div>
<button class="me-1 btn-eye"><i class="fa-solid fa-eye"></i> 0</button> 
<button class="me-1"><i class="fa-solid fa-heart"></i> 0</button> </div>
<div class="ms-3">
<button class="me-1"><i class="fa-solid fa-cart-shopping"></i></button> 
<button>Buy</button> </div>

</div>
</div>
</div>
`;
    item.appendChild(dov);
  });
});

//--------------------------------------------------//

// CArd SOLD-------------------------//
let cardSold = document.querySelectorAll(".card-sold-row");
const card3 = [...cardSold];
card3.map((item) => {
  Arr2.forEach((val) => {
    let dov = document.createElement("div");

    dov.classList.add("col-xl-3", "col-lg-3", "col-md-3", "col-18", "pull-up");
    dov.innerHTML = `
<div style="border-radius:10px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );border:1px solid #e6e6e6;box-shadow:0 0 10px grey;position: relative;">
<figure>
  <img src="./Assets/soldout.png" />
</figure>
<div class="d-flex justify-content-between align-items-center col-div px-2">
    <i class="fa-solid fa-crown"> </i>
    <h4 class="mb-0">₹3500/-</h4>
  </div>
<div class="d-flex flex-column bg-cont" style="background:#fff">



<div class="d-flex flex-column align-items-center col-div-2 mt-2">

<h1 class="mb-0 fw-bold">82-<span style="color: rgb(21,30,82);">9095-9095</span></h1>
<a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>

</div>

<div class="d-flex justify-content-center col-div-3 py-1 mb-2" style="border-bottom-left-radius:10px ;border-bottom-right-radius:10px ;">
Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span>R2P</span>
</div>


</div>
</div>
`;
    item.appendChild(dov);
  });
});

let cardSmSold = document.querySelectorAll(".card-sold-sm-row");
const card4 = [...cardSmSold];

card4.map((item) => {
  Arr2.forEach((val) => {
    let dov = document.createElement("div");

    dov.classList.add("col-6", "col-md-6", "col-18", "pull-up");
    dov.innerHTML = `
 <div style="border-radius:10px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );border:1px solid #e6e6e6;box-shadow:0 0 10px grey;position: relative;">
 <figure>
   <img src="./Assets/soldout.png" />
 </figure>
 <div class="d-flex justify-content-between align-items-center col-div px-2">
     <i class="fa-solid fa-crown"> </i>
     <h4 class="mb-0">₹3500/-</h4>
   </div>
 <div class="d-flex flex-column bg-cont" style="background:#fff">
 
 
 
 <div class="d-flex flex-column align-items-center col-div-2 mt-2">
 
 <h1 class="mb-0 fw-bold">82-<span style="color:rgb(21,30,82);">9095-9095</span></h1>
 <a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
 
 </div>
 
 <div class="d-flex justify-content-center col-div-3 py-1 mb-2" style="border-bottom-left-radius:10px ;border-bottom-right-radius:10px ;">
 Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span>R2P</span>
 </div>
 
 
 </div>
 </div>
 `;
    item.appendChild(dov);
  });
});
//-----------------------------------------------//

//  Offer card //

let cardOffer = document.querySelectorAll(".card-offer-row");
const card5 = [...cardOffer];

card5.map((item) => {
  Arr.forEach((val) => {
    let dov = document.createElement("div");
    dov.classList.add("col-xl-3", "col-lg-3", "col-md-3", "col-18", "pull-up");
    dov.innerHTML = `<div style="border-radius:10px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;position:relative">
    <div class="badge-bg-cont">
   <p class="mb-0 blink_me">20% <br />Off</p>
  </div>
         <div class="d-flex justify-content-between align-items-center col-div px-2">
             <i class="fa-solid fa-crown"> </i>
             <h4 class="mb-0">₹3500/-</h4>
           </div>
     <div class="d-flex flex-column bg-cont">
     <div class="d-flex flex-column align-items-center col-div-2 mt-2">
       
    <h1 class="mb-0 fw-bold">82-<span style="color:rgb(21,30,82);">9095-9095</span></h1>
    <a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
       
     </div>
    
    <div class="d-flex justify-content-center col-div-3 py-1">
    Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span>R2P</span>
    </div>
    
    <div class="d-flex justify-content-center align-items-center card-icon-cont py-3">
    <div>
    <button class="me-2 btn-eye"><i class="fa-solid fa-eye"></i> 0</button> 
    <button><i class="fa-solid fa-heart"></i> 0</button> </div>
    <div class="ms-3">
    <button class="me-2"><i class="fa-solid fa-cart-shopping"></i></button> 
    <button>Buy</button> </div>
    
    </div>
    </div>
    </div>
    `;
    item.appendChild(dov);
  });
});

let cardSmOffer = document.querySelectorAll(".card-offer-sm-row");
const card6 = [...cardSmOffer];
card6.map((item) => {
  Arr.forEach((val) => {
    let dov = document.createElement("div");
    dov.classList.add("col-6", "col-md-6", "col-18", "pull-up");
    dov.innerHTML = `  <div style="border-radius: 10px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;position:relative">
    
    <div class="d-flex justify-content-around align-items-center col-div my-1 px-1">
        <i class="fa-solid fa-crown"> </i> 
        <div class="ribbon "><span>20% off</span></div>
        <h4 class="mb-0">₹3500/-</h4>
      </div>
<div class="d-flex flex-column bg-cont">
 


<div class="d-flex flex-column align-items-center col-div-2 mt-1">
   
<h1 class="mb-0 fw-bold">82-<span style="color:rgb(21,30,82);">9095-9095</span></h1>
<a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
</div>

<div class="d-flex justify-content-center col-div-3 py-1">
Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span>R2P</span>
</div>

<div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">
<div>
<button class="me-1 btn-eye"><i class="fa-solid fa-eye"></i> 0</button> 
<button class="me-1"><i class="fa-solid fa-heart"></i> 0</button> </div>
<div class="ms-md-5 ms-2">
<button class="me-1"><i class="fa-solid fa-cart-shopping"></i></button> 
<button>Buy</button> </div>

</div>
</div>
</div>
    `;
    item.appendChild(dov);
  });
});

// let min=document.querySelector(".min")
// let max=document.querySelector(".max")
// let range_min=document.querySelector(".range_min")
// let range_max=document.querySelector(".range_max")

// min.addEventListener("change",function(e){
// let val=e.target.value;
// range_min.innerText=val

// })
// max.addEventListener("change",function(e){
//   let val=e.target.value;
// range_max.innerText=val
//   })

//   const hardBtn=document.querySelector("#hard-btn");
//   const colNone=document.querySelectorAll(".collapse-none");
//   const cont=document.querySelector(".collapse-icon-cont");
//   const mark=document.querySelector(".x-none-mark");

//   const colNoneArr=[...colNone];

//   let bool=false;
//   hardBtn.addEventListener("click",function(){

//     if(!bool){
//     colNoneArr.forEach(item=>item.style.display="none");
//     cont.classList.remove("justify-content-around");
//     cont.classList.add("ps-2");
//     mark.style.display="inline-block"

//     bool=true;
//   }
//   else{
//     colNoneArr.forEach(item=>item.style.display="block");
//     cont.classList.add("justify-content-around");
//     cont.classList.remove("ps-2");
//     mark.style.display="none"
//     bool=false;
//   }
//   })
let btnHeartArr = document.querySelectorAll(".btn-card-heart");
let bool1 = false;

Array.from(btnHeartArr).forEach((link) => {
  link.addEventListener("click", function (event) {
    if (!bool1) {
      event.target.style.color = "red";
      bool1 = true;
    } else {
      event.target.style.color = "white";
      bool1 = false;
    }
  });
});

function format(input) {
  if (input.value < 0) input.value = Math.abs(input.value);
  if (input.value.length > 2) input.value = input.value.slice(0, 2);
  $(input).blur(function () {
    // if(input.value.length == 1) input.value=0+input.value;
    // if(input.value.length == 0) input.value='01';
    //* if you want to allow insert only 2 digits *//
  });
}

function getVals() {
  // Get slider values
  var parent = this.parentNode;
  var slides = parent.getElementsByTagName("input");
  var slide1 = parseFloat(slides[0].value);
  var slide2 = parseFloat(slides[1].value);

  // Neither slider will clip the other, so make sure we determine which is larger
  if (slide1 > slide2) {
    var tmp = slide2;
    slide2 = slide1;
    slide1 = tmp;
  }

  var displayElement = parent.getElementsByClassName("rangeValues")[0];
  displayElement.innerHTML = slide1 + " - " + slide2;
}

window.onload = function () {
  // Initialize Sliders
  var sliderSections = document.getElementsByClassName("range-slider");
  for (var x = 0; x < sliderSections.length; x++) {
    var sliders = sliderSections[x].getElementsByTagName("input");
    for (var y = 0; y < sliders.length; y++) {
      if (sliders[y].type === "range") {
        sliders[y].oninput = getVals;
        // Manually trigger event first time to display values
        sliders[y].oninput();
      }
    }
  }
};
