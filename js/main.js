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
      <button onclick="getAdd(${pizzas[i].id})" class="btn pizza__btn">Add to Card</button>
      </div>
      </div>
      </div>
      `
    ulList.appendChild(li);
}
const elBtnAdd = document.querySelectorAll('.btn');
const elListCart = document.querySelector('.cart__list')
const elSub = document.querySelector('.title-pr');
const elTax = document.querySelector('.tax-pr');
const elTotal = document.querySelector('.total-pr');




let newArr = [];




function findFood(id) {
    for (let i = 0; i < pizzas.length; i++) {
        if (id == pizzas[i].id) {
            return pizzas[i]
        }
    }

}

function checkArray(item) {


    if (!newArr.length) {
        const newFood = item
        newFood.count = 1
        return newArr.push(newFood)
    }

    for (let i = 0; i < newArr.length; i++) {
        if (item.id === newArr[i].id) {
            return newArr[i].count = newArr[i].count + 1
        }
    }

    const newFood = item
    newFood.count = 1

    newArr.push(newFood)
}

function deleteFood(id) {
    const arr = [];

    for (let i = 0; i < newArr.length; i++) {
        if (id === newArr[i].id) {
            if (newArr[i].count > 1) {
                const newFood = newArr[i]

                newFood.count = newFood.count - 1;

                arr.push(newFood)
            }
        } else {
            arr.push(newArr[i]);
        }
    }

    newArr = arr
    renderCardFood()
}

function renderCardFood() {
    elListCart.innerHTML = '';

    let subtitle = 0;

    for (let i = 0; i < newArr.length; i++) {
        let li = document.createElement('li');
        li.className = ("cart__item animation");
        li.innerHTML = `<div class="bgcolor bgcolor2 d-flex mb-5">
          <div class="pizza__imgdiv">
          <img class="pizza__img" src="${newArr[i].imageUrl}" alt="">
            </div>
            <div class="pizza__pl">
            <p class="pizza__name">
              ${newArr[i].desc}
              </p>
              <p class="pizza__price">$${newArr[i].price}</p>
              <button class="count-btn">${newArr[i].count}</button>
              <div class = "btndiv">
              <button class="push-btn" onclick="btn(${i})">+</button>
              <button onclick = "removeButton(${i})" class="remove-btn">-</button>
              </div>
              </div>
              </div>
        `

        subtitle += newArr[i].count * newArr[i].price
        elListCart.appendChild(li);

    }

    let taxiPrice = subtitle * 0.1;
    total = (subtitle + taxiPrice);
    elTax.innerHTML = `${taxiPrice.toFixed(2)}$`;
    elTotal.innerHTML = `${total.toFixed(2)} $`
    elSub.innerHTML = `${subtitle.toFixed(2)} $`;
}

function btn(foodIndex) {
    newArr[foodIndex].count = newArr[foodIndex].count + 1

    renderCardFood()
}

function removeButton(foodIndex) {
    let foundFood = newArr[foodIndex]
    if (foundFood.count > 1) {
        foundFood.count = foundFood.count - 1
        return renderCardFood()
    }

    let arr = []

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].id !== foundFood.id) {
            arr.push(newArr[i])
        }
    }

    newArr = arr

    renderCardFood()
}


function getAdd(id) {
    let foundFood = findFood(id)

    checkArray(foundFood)

    renderCardFood();
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

// let arr2 = pizzas.filter(function(pic) {
//   if()
// });
// console.log(arr2);