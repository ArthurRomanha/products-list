let divContent = document.querySelector("#containerDesserts");
let i = 1;
fetch("data.json").then((response) => {
    response.json().then((dados) => {
        dados.desserts.map((dessert) => {
            divContent.innerHTML += 
        `<div class="desserts">
            <img src="${dessert.image.desktop}" class="imageDessert">
            <button class="btnAddToCart" id="btnAddToCart${i}" onclick="switchButton('btnAddToCart${i}')"> <img src="assets/images/icon-add-to-cart.svg" class="imgAddToCart">
    <p class="textAddToCart">Add to Cart</p>
  </button>
            <h5 class="simpleNameDessert">${dessert.category}</h5>
            <h3 class="nameDessert">${dessert.name}</h3>
            <h3 class="price">R$ ${dessert.price}</h3>
        </div>`;
        i++;
        })
    })
})
const switchButton = (btnAddToCart) => {
    document.getElementById(`${btnAddToCart}`).style.display = "none";
}
