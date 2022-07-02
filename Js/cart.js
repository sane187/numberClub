import config from "../conf/index.js";
const cartArr = [];
window.cart = async (id) => {
  const response = await fetch(
    config.backendEndpoint + `/fetch_single_product?product=${id}`
  );
  const data = await response.json();
  let item = data.data;
  cartArr.push(item);
  console.log(cartArr);
  localStorage.setItem("cart", JSON.stringify(cartArr));
};
