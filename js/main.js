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
      <p class="pizza__price">$${pizzas[i].price}</p>
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


let arrNew = [];
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
    arrNew[arrNew.length] = pizzas[i];
    arrPrice[arrPrice.length] = pizzas[i].price;
    
    sub += pizzas[i].price;
    tax = sub * 10 / 100;
    total = (sub + tax);

    let li = document.createElement('li');
    li.className =("cart__item animation");
    li.innerHTML = `<div class="bgcolor bgcolor2 d-flex mb-5">
    <div class="pizza__imgdiv">
    <img class="pizza__img" src="${arrNew[i].imageUrl}" alt="">
      </div>
      <div class="pizza__pl">
      <p class="pizza__name">
        ${arrNew[i].desc}
        </p>
        <p class="pizza__price">$${arrNew[i].price}</p>
        <button class="minus"  onclick='removeItem(${i})'>
        <i class='bx bx-minus'></i>
      </button>
        <button class="pizza__number">1</button>
        </div>
        </div>
                  `;
    elSub.textContent = sub.toFixed(2);
    elTax.textContent = tax.toFixed(2);
    elTotal.textContent = total.toFixed(2);

    elListCart.appendChild(li);
  })
}

function removeItem(index) {
  let newArrRemove = [];

  for (let i = 0; i < arrNew.length; i++) {
    if (index != i) {
      newArrRemove.push(arrNew[i]);
    }
    
  }
  
  arrNew = newArrRemove;

  elListCart.innerHTML = "";
  sub = 0;
  tex = 0;
  total = 0;

  for (let i = 0; i < arrNew.length; i++) {
    let li = document.createElement("li");
    li.className =("cart__item");
    li.innerHTML = `<div class="bgcolor bgcolor2 d-flex mb-5">
    <div class="pizza__imgdiv">
    <img class="pizza__img" src="${arrNew[i].imageUrl}" alt="">
      </div>
      <div class="pizza__pl">
      <p class="pizza__name">
        ${arrNew[i].desc}
        </p>
        <p class="pizza__price">$${arrNew[i].price}</p>
        <button class="minus"  onclick='removeItem(${i})'>
        <i class='bx bx-minus'></i>
        </button>
        <button class="pizza__number">1</button>
        </div>
        </div>
    `;
    
    sub += arrNew[i].price;
    elSub.textContent = sub.toFixed(2);

    tax = sub % 10 / 100;
    elTax.textContent = tax.toFixed(2);
    
    total = (sub + tax);
    elTotal.textContent = total.toFixed(2);

    elListCart.appendChild(li);
  }
  if (arrNew.length == 0 ) {
    sub == 0;
    elSub.textContent = sub.toFixed(2);
    total == 0;
    elTotal.textContent = total.toFixed(2);
    tex == 0;
    elTax.textContent = tex.toFixed(2);
  }
}





// let arr = [5,2,1,1,3,5,5,2,2,4];

// let b = [];
// let count = arr.length;

// for(let i = 0; i < count; i++) {
//   let k = [];
//   let f = [];
//   for (let j = 0; j , arr.length; j++) {
//     if (arr[0] == arr[j]) {
//       k.push(arr[j]);
//     }else {
//       f.push(arr[j]);
//     }
//   }
//   arr = f;
//   if (k != "") b.push(k);
// }
// console.log(b);
