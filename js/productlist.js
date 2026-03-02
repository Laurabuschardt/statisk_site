console.log("henter");

const params = new URLSearchParams(window.location.search);
const mycategory = params.get("category");
console.log(mycategory);

const listURL = `https://kea-alt-del.dk/t7/api/products?category=${mycategory}`;
const listContainer = document.querySelector(".product-gallery");

function getProducts() {
  fetch(listURL).then((res) => res.json().then((products) => showProducts(products)));
}

function showProducts(products) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  products.forEach((product) => {
    listContainer.innerHTML += `
       <article class="product">
                <span class="udsolgt">Udsolgt</span>
                <span class="deal">Tilbud x%</span>
                <img src="https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp" alt="Produkt 6" />
                <div class="text">
                    <h3>${product.brandname}</h3>
                    <h3>${product.productdisplayname}</h3>
                    <p class="price">${product.price} kr.</p>

                </div>
                <a href="product.html?id=${product.id}" class="cta">Køb nu</a>

            </article>
    `;
  });
}

getProducts();
