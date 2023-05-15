const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

//traemos los elementos del DOM
const form = document.querySelector("#form__container");
const formText = document.querySelector(".form__text");
const inputNumber = document.querySelector("#input__number");
const formLink = document.querySelector("#form__carta");
const submitBtn = document.querySelector("#form__btn");

//funcion para guardar en el local storage
const saveToLocalStorage = (inputValue) => {
  localStorage.setItem("Ultima pizza", inputValue);
};

const ultimaPizza = localStorage.getItem("Ultima pizza");
//console.log(ultimaPizza);

//funcion para manejar el submit del form
const submitHandler = (e) => {
  e.preventDefault();
  const inputValue = inputNumber.value;
  const pizza = pizzas.find((pizza) => pizza.id === Number(inputValue));
  //Si se encuentra una pizza con el id ingresado, se muestra la info de la pizza y se guarda la data en LS; si el input esta vacio se muestra un mensaje de error; si no se encuentra la pizza se muestra un mensaje de error diferente
  if (pizza) {
    form.innerHTML = `
    <h1 class="form__text__small">${pizza.nombre} 🤤</h1>
    <img class="card__content__img" src="${pizza.imagen}" alt="${pizza.nombre}">
    <p class="form__text__description"><span>Ingredientes: </span>${pizza.ingredientes.join(
      ", "
    )}</p>
    <p class="form__text__small">Precio: $${pizza.precio}</p>
    <button class="btn__primary"><a href="index.html"><i class="fa-solid fa-angle-left"></i> Volver</a></button>
    `;
    saveToLocalStorage(form.innerHTML);
  } else if (inputValue === "") {
    form.innerHTML = `
    <p class="form__text__description">Elija una pizza del 1 al 5 😡</p>
    <button class="btn__primary" id="form__carta"><a href="index.html"><i class="fa-solid fa-angle-left"></i> Volver</a></button>`;
  } else if (!pizza) {
    form.innerHTML = `
    <p class="form__text__small">No tenemos esa pizza ☹️</p>
    <button class="btn__primary" id="form__carta"><a href="index.html"><i class="fa-solid fa-angle-left"></i> Volver</a></button>`;
  }
};

//funcion para inicializar el programa
function init() {
  form.addEventListener("submit", submitHandler);
  formLink.addEventListener("click", () => {
    alert("Funcionalidad en construcción");
  });
}

init();
