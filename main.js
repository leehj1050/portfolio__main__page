const mobile__text = document.querySelector(".mobile__text");
const last__list__errow = document.querySelector(".last__list__errow");

mobile__text.addEventListener("click", () => {
  last__list__errow.style.animation = "blink__arrow 1.2s forwards";
});
