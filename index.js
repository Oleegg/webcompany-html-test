const body = document.querySelector("body");

// types
const types = document.querySelector(".types");
const typesTitle = types.querySelector(".types__title-wrapper");
const typesTitleContent = types.querySelector(".types__title");
const typesLabels = types.querySelectorAll(".select__label-types");

typesTitle.addEventListener("click", () => {
  if ("active" === types.getAttribute("data-state")) {
    types.setAttribute("data-state", "");
  } else {
    types.setAttribute("data-state", "active");
  }
});

for (let i = 0; i < typesLabels.length; i++) {
  typesLabels[i].addEventListener("click", (evt) => {
    typesTitleContent.textContent = evt.target.textContent;
    types.setAttribute("data-state", "");
  });
}

// brand
const brand = document.querySelector(".brand");
const brandTitle = brand.querySelector(".brand__title-wrapper");
const brandTitleContent = brand.querySelector(".brand__title");
const brandLabels = brand.querySelectorAll(".select__label-brand");

brandTitle.addEventListener("click", () => {
  if ("active" === brand.getAttribute("data-state")) {
    brand.setAttribute("data-state", "");
  } else {
    brand.setAttribute("data-state", "active");
  }
});

for (let i = 0; i < brandLabels.length; i++) {
  brandLabels[i].addEventListener("click", (e) => {
    brandTitleContent.textContent = e.target.textContent;
    brand.setAttribute("data-state", "");
  });
}

const cards = document.querySelectorAll(".card");
window.addEventListener("resize", () => {
  if (window.innerWidth <= 1024) {
    for (let i = 0; i < cards.length; i++) {
      if (i > 6) {
        cards[i].style.display = "none";
      }
    }
  } else {
    for (let i = 0; i < cards.length; i++) {
      if (i > 6) {
        cards[i].style.display = "flex";
      }
    }
  }
});

// burger
const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav__list");
let count = 0;

burger.addEventListener("click", () => navList.classList.toggle("open"));

body.addEventListener("click", () => {
  console.log(123);
  if (navList.classList.contains("open") && count > 0) {
    navList.classList.remove("open");
    count = 0;
  } else {
    count++;
  }
});
