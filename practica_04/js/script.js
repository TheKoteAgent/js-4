// Task 1 ============================================
/* Додайте на блок .div-1 подію клік і по кліку запуск функції t1. Функція повинна повертати та виводити на екран вміст блоку (тільки текст). Вивід здійснюється у out-1.  */

const div1 = document.querySelector("#div-1");
const out1 = document.querySelector("#out-1");

// function t1() {
//   out1.textContent = div1.textContent;
// }

// div1.addEventListener("click", t1);

div1.addEventListener("click", () => {
  out1.textContent = div1.textContent;
});

Math.floor(Math.random() * 100) + 1; // диапазон от 1 до 100
Math.floor(Math.random() * 100); // диапазон от 0 до 99
Math.round(Math.random() * 100); // диапазон от 0 до 100
Math.ceil(Math.random() * 100); // диапазон от 1 до 100

// Task 2 ============================================
const div2 = document.querySelector("#div-2");
const out2 = document.querySelector("#out-2");

function t2(event) {
  const result = event.altKey;
  out2.textContent = result;
  return result;
}

div2.addEventListener("click", t2);

// Task 3 ============================================
const div3 = document.querySelector("#div-3");
const out3 = document.querySelector("#out-3");

div3.addEventListener("click", () => {
  const currentWidth = parseInt(getComputedStyle(div3).width);
  const newWidth = currentWidth + 5;
  div3.style.width = newWidth + "px";
  out3.textContent = newWidth + "px";
});

// Task 4 ============================================
const out4 = document.querySelector("#out-4");
const btn4 = document.querySelector("#b-4");

btn4.addEventListener("click", () => {
  const random = Math.floor(Math.random() * 101);
  out4.textContent = random;
});

// Task 5 ============================================
const btn5 = document.querySelector("#b-5");
const element5 = document.querySelector("#element-5");

btn5.addEventListener("click", () => {
  if (element5.style.display === "none") {
    element5.style.display = "block";
  } else {
    element5.style.display = "none";
  }
});

// Task 6 ============================================
const div6 = document.querySelector("#div-6 img");

div6.addEventListener("mouseenter", () => {
  div6.src = "img/2.png";
});
div6.addEventListener("mouseleave", () => {
  div6.src = "img/1.png";
});

// Task 7 ============================================
const div7 = document.querySelector("#div-7");

div7.addEventListener("mousemove", () => {
  let number = parseInt(div7.textContent);
  div7.textContent = number + 1;
});

// Task 8 ============================================
const div8 = document.querySelector("#div-8");

div8.addEventListener("mousemove", () => {
  const currentWidth = parseInt(getComputedStyle(div8).width);
  div8.style.width = currentWidth + 1 + "px";
});

// Task 9 ============================================
const newsContainer = document.querySelector("#news");

newsContainer.addEventListener("click", (event) => {
  const target = event.target;
  const card = target.closest(".card");

  if (target.classList.contains("button-delete")) {
    card.remove();
  } else if (target.classList.contains("button-hide")) {
    const content = card.querySelector(".new-content");
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }
});
