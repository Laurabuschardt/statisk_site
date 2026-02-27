const id = 1528;
const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector("#productContainer");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  productcontainer.innerHTML = `
     <div class="buy">

        <img src="https://kea-alt-del.dk/t7/images/webp/1000/${+id}.webp" alt="Produkt 1"></img>


        <div class="text">
            <h3>${data.brandname}</h3>
            <h3>${data.productdisplayname}</h3>
            <p class="price">${data.price} kr.</p>
            <a href="product.html" class="cta">Tilføj til kurv</a>
            <h4>Lagerstatus: 1 tilbage.</h4>
        </div>


    </div>
  `;
}

getData();
