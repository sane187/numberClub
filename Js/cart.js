import config from "../conf/index.js";
const cartArr = [];
window.cart = async (id) => {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user === null) {
    Toastify({
      text: "Login to add add item ",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "red",
      },
    }).showToast();
  } else {
    const response = await fetch(
      config.backendEndpoint + `/fetch_single_product?product=${id}`
    );
    const data = await response.json();
    let item = data.data;
    cartArr.push(item);
    Toastify({
      text: "item added to card",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#32cd32",
      },
    }).showToast();
    localStorage.setItem("cart", JSON.stringify(cartArr));
  }
};
