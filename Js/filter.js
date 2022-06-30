// filter
import config from "../conf/index.js";
let filterCategories = document.querySelector(".FilterCategories");
let filterCategoryData;
const FetchCategory = async () => {
  const response = await fetch(
    config.backendEndpoint + "/fetch_all_categories"
  );
  const data = await response.json();
  filterCategoryData = data.data;
  filterCategoryData.forEach((element, index) => {
    let option = document.createElement("option");
    option.innerHTML = `
      <option value="${element.category_id}">${element.category_name}</option>
    `;
    filterCategories.appendChild(option);
  });
};
FetchCategory();
