let containerDesserts = document.querySelector("#containerDesserts");
let containerCart = document.querySelector("#containerCart");

let i = 1;
fetch("data.json").then((response) => {
    response.json().then((dados) => {
        dados.desserts.map((dessert) => {
            containerDesserts.innerHTML += 
        `<div class="desserts">
            <img src="${dessert.image.desktop}" class="imageDessert">

            <button class="btnAddToCart btn" id="btnAddToCart${i}" onclick="switchButton(${i}, 'none', 'flex')">  
                <img src="assets/images/icon-add-to-cart.svg" class="imgAddToCart">
                <p class="textAddToCart">Add to Cart</p>
            </button>

            <button id="btnAddAmount${i}" class="btn btnAddAmount">
                <a onclick="decreaseAmount(${i})">
                    <img class="amountProduct" src="assets/images/icon-decrement-quantity.svg">
                </a>
                <p class="amountProduct" id="amountProduct${i}">1</p>
                <a onclick="increaseAmount(${i})">
                    <img class="amountProduct" src="assets/images/icon-increment-quantity.svg">
                </a>
            </button>

            <h5 class="simpleNameDessert">${dessert.category}</h5>
            <h3 class="nameDessert">${dessert.name}</h3>
            <h3 class="price" value=${dessert.price}>R$ ${dessert.price}</h3>
        </div>`;
        i++;
        })
    })
})
const switchButton = (position, displayBtn1, displayBtn2) => {
    document.getElementById(`btnAddToCart${position}`).style.display = displayBtn1;//btn add to cart
    document.getElementById(`btnAddAmount${position}`).style.display = displayBtn2;//btn amount
}
const increaseAmount = (position) =>{
    let elementClicked = document.getElementById(`amountProduct${position}`);
    let amountOfElement = parseInt(elementClicked.textContent);
    if(amountOfElement<10){
        amountOfElement++;
    elementClicked.innerHTML = amountOfElement;
    showCart();
    }
 }
 const decreaseAmount = (position) => {
    let elementClicked = document.getElementById(`amountProduct${position}`);
    let amountOfElement = parseInt(elementClicked.textContent);
    if(amountOfElement>1){
        amountOfElement--;
    elementClicked.innerHTML = amountOfElement;
    showCart();
    }else{
        switchButton(position, "flex", "none");
    }
 }
 const showCart = () => {
    containerCart.innerHTML +=  ``
 }