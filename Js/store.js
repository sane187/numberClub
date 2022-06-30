let cardArr2 = document.querySelectorAll(".card-vip-row"); // store desktop
const card2 = [...cardArr2]; // store desktop
let cardVip = document.querySelectorAll(".card-vipSm-row"); // store mobile
const VipSmCard = [...cardVip]; // store mobile
// store card Desktop
let VipCardData;
let count = 1;
const FetchVip = async () => {
  const response = await fetch(
    "http://167.71.237.36/api/v1/customer/fetch_all_products/1"
  );
  const data = await response.json();
  VipCardData = data.data;
  card2.map((item) => {
    VipCardData.forEach((val) => {
      let dov = document.createElement("div");
      dov.classList.add(
        "col-xl-4",
        "col-lg-4",
        "col-md-4",
        "col-18",
        "pull-up"
      );
      let num = val.number.toString();
      const first3 = num.slice(0, 2);
      const reamaning = num.slice(2, 6);
      const last = num.slice(6, 10);
      dov.innerHTML = `<div style="border-radius:10px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
         <div class="d-flex justify-content-between align-items-center col-div px-2 py-1 ">
            
             <div class="d-inline-flex"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
             <button class="btn-card-heart"><i class="fa-solid fa-heart"></i></button>
           </div>
     <div class="d-flex flex-column bg-cont">
      
     
    
     <div class="d-flex justify-content-center col-div-2 mt-2">
       
    <h1 class="mb-0 fw-bold" style="font-size:2rem">${first3}-<span style="color:#9e48cd ;">${reamaning}-${last}</span></h1>
    
       
     </div>
    
    <div class="d-flex justify-content-center col-div-3 py-1">
    Total-<strong class="mx-2">${val.sum_total}</strong> | Sum-<strong class="mx-2">${val.first_sum}</strong> | <span class="mx-1">${val.number_status}</span> | <a href="./vipNumber.html" class="ms-1" style="font-size:10px;"><span>SIMILAR NUMBERS</span></a>
    </div>
    
    <div class="d-flex justify-content-center align-items-center card-icon-cont py-3">
  
   <h4 class="mb-0 fw-bold">₹${val.price}</h4><div class="vl mx-1"></div><button class=""><i class="fa-solid fa-cart-shopping"></i></button>
   
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
};
FetchVip();

// Store card Mobile
const FetchVipMobile = async () => {
  const response = await fetch(
    "http://167.71.237.36/api/v1/customer/fetch_all_products/1"
  );
  const data = await response.json();
  HomeCardData = data.data;
  HomeCardData.length = 12;
  VipSmCard.map((item) => {
    HomeCardData.forEach((val) => {
      let dov = document.createElement("div");
      let num = val.number.toString();
      const first3 = num.slice(0, 2);
      const reamaning = num.slice(2, 6);
      const last = num.slice(6, 10);
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
   
<h1 class="mb-0 fw-bold">${first3}-<span style="color:#9e48cd;">${reamaning}-${last}</span></h1>
</div>

<div class="d-flex justify-content-center col-div-3 py-1">
Total- <strong class="mx-1">${val.sum_total}</strong> | Sum- <strong class="mx-1">${val.first_sum}</strong> | <span class="mx-1">${val.number_status}</span> |
<a href="./vipNumber.html" class="ms-1"><span>SIMILAR NUMBERS</span></a>
</div>

<div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">

<h6 class="mb-0 fw-bold" style="font-size:12px">₹${val.price}</h6><div class="vl mx-1"></div><button class=""><i class="fa-solid fa-cart-shopping"></i></button>
   
    <div class="vl mx-1"></div>
    <button class="py-2" onClick="Detail(this)"><i class="fa-solid fa-solid fa-circle-info d-block"></i></button>
     <div class="vl mx-1"></div>
    <button>BUY</button> 
    
</div>
</div>
</div>
    `;
      item.appendChild(dov);
    });
  });
};
FetchVipMobile();
// add more data desktop
let more = document.querySelector(".more");
const Increment = async () => {
  count = count + 1;
  let url = `http://167.71.237.36/api/v1/customer/fetch_all_products/${count}`;
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.data;
  card2.map((item) => {
    newData.forEach((val) => {
      let dov = document.createElement("div");
      dov.classList.add(
        "col-xl-4",
        "col-lg-4",
        "col-md-4",
        "col-18",
        "pull-up"
      );
      let num = val.number.toString();
      const first3 = num.slice(0, 2);
      const reamaning = num.slice(2, 6);
      const last = num.slice(6, 10);
      dov.innerHTML = `<div style="border-radius:10px;background:linear-gradient( 40deg, #bf68e6 20%, #9e48cd 51%, #bf68e6 90% );border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
         <div class="d-flex justify-content-between align-items-center col-div px-2 py-1 ">
            
             <div class="d-inline-flex"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
             <button class="btn-card-heart"><i class="fa-solid fa-heart"></i></button>
           </div>
     <div class="d-flex flex-column bg-cont">
      
     
    
     <div class="d-flex justify-content-center col-div-2 mt-2">
       
    <h1 class="mb-0 fw-bold" style="font-size:2rem">${first3}-<span style="color:#9e48cd ;">${reamaning}-${last}</span></h1>
    
       
     </div>
    
    <div class="d-flex justify-content-center col-div-3 py-1">
    Total-<strong class="mx-2">${val.sum_total}</strong> | Sum-<strong class="mx-2">${val.first_sum}</strong> | <span class="mx-1">${val.number_status}</span> | <a href="./vipNumber.html" class="ms-1" style="font-size:10px;"><span>SIMILAR NUMBERS</span></a>
    </div>
    
    <div class="d-flex justify-content-center align-items-center card-icon-cont py-3">
  
   <h4 class="mb-0 fw-bold">₹${val.price}</h4><div class="vl mx-1"></div><button class=""><i class="fa-solid fa-cart-shopping"></i></button>
   
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
};
more.addEventListener("click", Increment);

// add more data mobile
let moreSm = document.querySelector(".more-sm");
const IncrementMobile = async () => {
  count = count + 1;
  let url = `http://167.71.237.36/api/v1/customer/fetch_all_products/${count}`;
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.data;
  newData.length = 12;
  VipSmCard.map((item) => {
    newData.forEach((val) => {
      let dov = document.createElement("div");
      let num = val.number.toString();
      const first3 = num.slice(0, 2);
      const reamaning = num.slice(2, 6);
      const last = num.slice(6, 10);
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
   
<h1 class="mb-0 fw-bold">${first3}-<span style="color:#9e48cd;">${reamaning}-${last}</span></h1>
</div>

<div class="d-flex justify-content-center col-div-3 py-1">
Total- <strong class="mx-1">${val.sum_total}</strong> | Sum- <strong class="mx-1">${val.first_sum}</strong> | <span class="mx-1">${val.number_status}</span> |
<a href="./vipNumber.html" class="ms-1"><span>SIMILAR NUMBERS</span></a>
</div>

<div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">

<h6 class="mb-0 fw-bold" style="font-size:12px">₹${val.price}</h6><div class="vl mx-1"></div><button class=""><i class="fa-solid fa-cart-shopping"></i></button>
   
    <div class="vl mx-1"></div>
    <button class="py-2" onClick="Detail(this)"><i class="fa-solid fa-solid fa-circle-info d-block"></i></button>
     <div class="vl mx-1"></div>
    <button>BUY</button> 
    
</div>
</div>
</div>
    `;
      item.appendChild(dov);
    });
  });
};
moreSm.addEventListener("click", IncrementMobile);
