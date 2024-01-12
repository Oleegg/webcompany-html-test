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
