// Wish list card Desktop
let wishArr = [1, 2];
let cardWish1 = document.querySelectorAll(".card-wish-row");
const cardWish = [...cardWish1];
cardWish.map((item) => {
  wishArr.forEach((val) => {
    let dov = document.createElement("div");
    dov.classList.add("col-6", "col-md-6", "col-18", "pull-up");
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
    Total-<strong class="mx-2">37</strong> | Sum-<strong class="mx-2">8</strong> | <span class="mx-1"> RTP</span> | <a href="./vipNumber.html" class="ms-1" style="font-size:12px;"><span>SIMILAR NUMBERS</span></a>
    </div>
    
    <div class="d-flex justify-content-center align-items-center card-icon-cont py-3">
  
   <h4 class="mb-0 fw-bold">₹59,999</h4><div class="vl mx-1"></div><button class=""><i class="fa-solid fa-cart-shopping"></i></button>
   
    <div class="vl mx-1"></div>
    <button class="py-2" onClick="Detail(this)"><i class="fa-solid fa-circle-info d-block"></i></button>
     <div class="vl mx-1"></div>
    <button>BUY</button> 
    
    
    </div>
    </div>
    `;
    item.appendChild(dov);
  });
});

// Wish list card Mobile
let cardWish1Sm = document.querySelectorAll(".card-wish-sm-row");
const cardWishSm = [...cardWish1Sm];
cardWishSm.map((item) => {
  wishArr.forEach((val) => {
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
   
<h1 class="mb-0 fw-bold">82-<span style="color:#9e48cd">9095-9095</span></h1>
</div>

<div class="d-flex justify-content-center col-div-3 py-1">
Total- <strong class="mx-1">37</strong> | Sum- <strong class="mx-1">8</strong> | <span class="mx-1">RTP</span> |
<a href="./vipNumber.html" class="ms-1"><span>SIMILAR NUMBERS</span></a>
</div>

<div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">

<h6 class="mb-0 fw-bold" style="font-size:12px">₹59,999</h6>
<div class="vl mx-1"></div><button class=""><i class="fa-solid fa-cart-shopping"></i></button>
   
    <div class="vl mx-1"></div>
    <button class="py-2" onClick="Detail(this)"><i class="fa-solid fa-circle-info d-block"></i></button>
     <div class="vl mx-1"></div>
    <button>BUY</button> 
    
</div>
</div>
</div>
    `;
    item.appendChild(dov);
  });
});
