const mobile__text = document.querySelector(".mobile__text");
const last__list__errow = document.querySelector(".last__list__errow");
const last_list = document.querySelector("last_list");

mobile__text.addEventListener("click", () => {
  last__list__errow.style.animation = "blink__arrow 1.5s forwards";
  last_list.style.animation = "make__rotate 0.5s ease infinite";
});
