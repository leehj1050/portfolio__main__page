const hover__div = document.querySelector(".hover__div");
const last__list__errow = document.querySelector(".last__list__errow");
const last_list = document.querySelector("last_list");

hover__div.addEventListener("click", () => {
  last__list__errow.style.animation = "blink__arrow 1.5s forwards";
  last_list.style.animation = "make__rotate 0.5s ease infinite";
});
