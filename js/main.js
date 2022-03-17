let pizzas = [{
    imageUrl: '../images/pizza1.png',
    desc: 'Pepperoni',
    price: 2.23,
    id: 1
  },
  {
    imageUrl: '../images/pizza2.jpg',
    desc: 'Cheesy',
    price: 5.99,
    id: 2
  },
  {
    imageUrl: '../images/pizza3.jpg',
    desc: 'Margarita',
    price: 7.48,
    id: 3
  },
  {
    imageUrl: '../images/pizza4.jpg',
    desc: 'Hawaiian',
    price: 9.32,
    id: 4
  },

]

let ulList = document.querySelector('.pizza__list');


for (let i = 0; i < pizzas.length; i++) {

  let li = document.createElement("li");
  li.classList.add('pizza__item');
  li.innerHTML = `
  <div class="bgcolor d-flex">
  <div class="pizza__imgdiv">
  <img class="pizza__img" src="${pizzas[i].imageUrl}" alt="">
    </div>
    <div class="pizza__pl">
    <p class="pizza__name">
      ${pizzas[i].desc}
      </p>
      <p class="pizza__price">${pizzas[i].price}</p>
      <div class="pizza__btnbox">
      <button class="btn pizza__btn" id = ${pizzas[i].id}>
      Add to Cart
      </button>
      </div>
      </div>
      </div>
      `
  ulList.appendChild(li);
}


let arrShopNew = [];
let arrPrice = [];
const elBtnAdd = document.querySelectorAll('.btn');
const elListCart = document.querySelector('.cart__list')
const elSub = document.querySelector('.title-pr');
const elTax = document.querySelector('.tax-pr');
const elTotal = document.querySelector('.total-pr');


let sub = 0;
let tex = 0;
let total = 0;

for (let i = 0; i < elBtnAdd.length; i++) {
  elBtnAdd[i].addEventListener('click', () => {
    arrShopNew[arrShopNew.length] = pizzas[i];
    arrPrice[arrPrice.length] = pizzas[i].price;
    
    sub += pizzas[i].price;
    tax = sub * 10 / 100;
    total = (sub + tax);

    let li2 = document.createElement('li');
    li2.classList.add("cart__item");
    li2.innerHTML = `<div class="bgcolor bgcolor2 d-flex mb-5">
    <div class="pizza__imgdiv">
    <img class="pizza__img" src="${pizzas[i].imageUrl}" alt="">
      </div>
      <div class="pizza__pl">
      <p class="pizza__name">
        ${pizzas[i].desc}
        </p>
        <p class="pizza__price">${pizzas[i].price}</p>
        <button class="minus">-</button>
        <button class="pizza__number">1</button>
        </div>
        </div>
                  `;
    elSub.textContent = sub.toFixed(2);
    elTax.textContent = tax.toFixed(2);
    elTotal.textContent = total.toFixed(2);

    elListCart.appendChild(li2);
    console.log(elSub);
    console.log(elTax);
    console.log(elTotal);
    let del = document.querySelectorAll(".minus")

    for (let i = 0; i < arrShopNew.length; i++){
      del[i].addEventListener('click', (e) => {
    e.target.parentNode.parentNode.remove(); 
    
    // sub -= pizzas[i].price;
    // elSub.textContent = sub.toFixed(2);

    // tax = sub % 10 / 100;
    // elTax.textContent = tax.toFixed(2);

    // total = (sub + tax);
    // elTotal.textContent = total.toFixed(2);
    sub -= pizzas[i].price;
    console.log(sub);
    elSub.textContent = sub.toFixed(2);

    tax = sub % 10 / 100;
    elTax.textContent = tax.toFixed(2);
    
    total = (sub + tax);
    elTotal.textContent = total.toFixed(2);
  });
}
  })
}

console.log(arrShopNew);



