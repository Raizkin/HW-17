// Створити розмітку з кнопкою та текстовим полем.За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.





// Створити розмітку з заголовком та зображенням.За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.
const titleEl = document.querySelector(".second-title");
const imgEl = document.querySelector(".second-img");

imgEl.src = "./img/img1.jpg";

console.log(titleEl);
console.log(imgEl);
 


// Створити розмітку з посиланням та зображенням.За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL - адресу.Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.

const linkEl = document.querySelector(".third-link");
const imgRef = document.querySelector(".third-img");
linkEl.href =
  "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg";
imgRef.alt = "tree";
console.log(linkEl);
console.log(imgRef);



// Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.

const itemsEl = document.querySelector(".items");
itemsEl.firstElementChild.textContent = "somethinkNew";
console.log(itemsEl);