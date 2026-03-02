const listURL = `https://kea-alt-del.dk/t7/api/categories`;
const listContainer = document.querySelector(".links");

function getProducts() {
  fetch(listURL).then((res) => res.json().then((categorys) => showProducts(categorys)));
}

function showProducts(categorys) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  categorys.forEach((category) => {
    listContainer.innerHTML += `
      <a class="knap" href="productlist.html?category=${category.category}">${category.category}</a>
    `;
  });
}

getProducts();
