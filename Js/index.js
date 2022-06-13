let cardArr = document.querySelectorAll(".card-row");
let cardSmArr = document.querySelectorAll(".card-sm-row");
let cardVip = document.querySelectorAll(".card-vipSm-row");
const card = [...cardArr];
const cardSm = [...cardSmArr];
const VipSmCard = [...cardVip];
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
    Total-<strong class="mx-2">37</strong> | Sum-<strong class="mx-2">8</strong> | <span class="mx-1"> RTP</span> | <a href="#" class="ms-1" style="font-size:10px;"><span>SIMILAR NUMBERS</span></a>
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
    dov.classList.add("col-12", "col-md-6", "col-18", "pull-up");
    dov.innerHTML = `  <div style="border-top-left-radius:10px;border-top-right-radius:10px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );">
    <div class="d-flex justify-content-between align-items-center col-div px-2 ">
    <div class="d-inline-flex">
    <i class="fa-solid fa-star" style="font-size: 14px;"></i>
    <i class="fa-solid fa-star" style="font-size: 14px;"></i>
    <i class="fa-solid fa-star" style="font-size: 14px;"></i>
    <i class="fa-solid fa-star" style="font-size: 14px;"></i>
    <i class="fa-solid fa-star" style="font-size: 14px;"></i>
    </div>
    <button class="btn-card-heart"><i class="fa-solid fa-heart"></i></button>
  </div>
      </div>
<div class="d-flex flex-column bg-cont">
 
<div class="d-flex flex-column align-items-center col-div-2 mt-1">
   
<h1 class="fw-bold"">82-<span style="color:rgb(21,30,82);">9095-9095</span></h1>
</div>

<div class="d-flex justify-content-center col-div-3 py-1">
<span style="font-size:.8rem;">Total -<strong class="mx-1">37 | </strong> </span> 
<span style="font-size:.8rem"> Sum - <strong class="mx-1">8 |</strong>  </span> 
<span class="mx-1" style="font-size:.8rem">RTP |</span> 
<a href="#" class="ms-1"style="font-size:.8rem"><span>SIMILAR NUMBERS</span></a>
</div>

<div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">

<h6 class="mb-0 fw-bold" style="font-size:1.2rem">₹59,999</h6>
<div class="vl mx-1"></div>
<button style="width:30px;height:30px"><i class="fa-solid fa-cart-shopping" style="font-size:.8rem"></i></button>
     <div class="vl mx-1"></div>
    <button class="py-2" style="width:30px; height:30px;"><i class="fa-solid fa-clipboard-check d-block" style="font-size:1rem"></i></button>
     <div class="vl mx-1"></div>
    <button style="width:60px; height:30px; font-size:.8rem">BUY</button> 
    
</div>
</div>
</div>
    `;
    item.appendChild(dov);
  });
});
VipSmCard.map((item) => {
  Arr.forEach((val) => {
    let dov = document.createElement("div");
    dov.classList.add("col-6", "col-md-6", "col-18", "pull-up");
    dov.innerHTML = `  <div style="border-top-left-radius:5px;border-top-right-radius:5px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );">
    <div class="d-flex justify-content-between align-items-center col-div px-2 ">
    <div class="d-inline-flex">
    <i class="fa-solid fa-star" style="font-size: 12px;"></i>
    <i class="fa-solid fa-star"  style="font-size: 12px;"></i>
    <i class="fa-solid fa-star"  style="font-size: 12px;"></i>
    <i class="fa-solid fa-star"  style="font-size: 12px;"></i>
    <i class="fa-solid fa-star"  style="font-size: 12px;"></i>
    </div>
    <button class="btn-card-heart"><i class="fa-solid fa-heart"></i></button>
  </div>
      </div>
<div class="d-flex flex-column bg-cont">
 
<div class="d-flex flex-column align-items-center col-div-2 mt-1">
   
<h1 class="mb-0 fw-bold">82-<span style="color:rgb(21,30,82);">9095-9095</span></h1>
</div>

<div class="d-flex justify-content-center col-div-3 py-1">
Total- <strong class="mx-1">37</strong> | Sum- <strong class="mx-1">8</strong> | <span class="mx-1">RTP</span> |
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
<a href="#" styl><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
</div>

<div class="d-flex justify-content-center col-div-3 py-1">
Total-<strong class="mx-2">37</strong> | Sum- <strong class="mx-2">8</strong> | <span class="mx-2">R2P</span>
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
  </div>
         <div class="d-flex justify-content-between align-items-center col-div px-2">
             <i class="fa-solid fa-crown"> </i>
             <h4 class="mb-0">₹3500/-</h4>
           </div>
     <div class="d-flex flex-column bg-cont">
     <div class="d-flex flex-column align-items-center col-div-2 mt-2">
       
    <h1 class="mb-0 fw-bold" style="font-size:1.8rem">82-<span style="color:rgb(21,30,82);">9095-9095</span></h1>
    <a href="#" style="color:#000"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
       
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
<a href="#" style="color:#000"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
</div>

<div class="d-flex justify-content-center col-div-3 py-1">
Total-<strong class="mx-2">37</strong> | Sum- <strong class="mx-2">8</strong> | <span class="mx-2">R2P</span>
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

let wishArr = [1, 2];
let cardWish1 = document.querySelectorAll(".card-wish-row");
const cardWish = [...cardWish1];
cardWish.map((item) => {
  wishArr.forEach((val) => {
    let dov = document.createElement("div");
    dov.classList.add("col-6", "col-md-6", "col-18", "pull-up");
    dov.innerHTML = `  <div style="border-radius: 10px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;position:relative">
      
      <div class="d-flex justify-content-between align-items-center col-div my-1 px-2">
          <i class="fa-solid fa-crown"> </i> 
         
          <h4 class="mb-0">₹3500/-</h4>
        </div>
  <div class="d-flex flex-column bg-cont">
   
  
  
  <div class="d-flex flex-column align-items-center col-div-2 mt-1">
     
  <h1 class="mb-0 fw-bold">82-<span style="color: rgb(21,30,82);">9095-9095</span></h1>
  <a href="#" style="color:#000"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
  </div>
  
  <div class="d-flex justify-content-center col-div-3 py-1">
  Total-<strong class="mx-2">37</strong> | Sum- <strong class="mx-2">8</strong> | <span class="mx-2">R2P</span>
  </div>
  
  <div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">
  
  <button class="me-1" ><i class="fa-solid fa-heart wish-heart" ></i></button> 
  
  <button class="me-1"><i class="fa-solid fa-cart-shopping"></i></button> 
 
  
  </div>
  </div>
  </div>
      `;
    item.appendChild(dov);
  });
});

let cardWish1Sm = document.querySelectorAll(".card-wish-sm-row");
const cardWishSm = [...cardWish1Sm];
cardWishSm.map((item) => {
  wishArr.forEach((val) => {
    let dov = document.createElement("div");
    dov.classList.add("col-6", "col-md-6", "col-18", "pull-up");
    dov.innerHTML = `  <div style="border-radius: 10px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
      <div class="d-flex justify-content-between align-items-center col-div px-2 my-1">
          <i class="fa-solid fa-crown"> </i> 
          <h4 class="mb-0">₹3500/-</h4>
        </div>
  <div class="d-flex flex-column bg-cont">
   
  
  
  <div class="d-flex flex-column align-items-center col-div-2 mt-1">
     
  <h1 class="mb-0 fw-bold">82-<span style="color: rgb(21,30,82);;">9095-9095</span></h1>
  <a href="#" style="color:#000"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
  </div>
  
  <div class="d-flex justify-content-center col-div-3 py-1">
  Total- <strong class="mx-2">37</strong> | Sum- <strong class="mx-2">8</strong> | <span class="mx-2">R2P</span>
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
