console.log("hentet");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("id:", id);

// const id = 1528;
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
            <h2>${data.brandname}</h2>
            <h3>${data.productdisplayname}</h3>
            <p class="price">${data.price} kr.</p>
            <a href="product.html" class="cta">Tilføj til kurv</a>
            <h4>${data.soldout >= 1 ? `Antal på lager: ${data.soldout}` : `Ikke på lager`} </h4>
        </div>


    </div>
  `;
}

getData();
