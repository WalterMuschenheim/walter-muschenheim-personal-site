document.querySelector("#header-dropdown").addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("show");
  document.querySelector("#header-dropdown").classList.toggle("show");
  document.querySelector(".title").classList.toggle("show");
});

document.querySelector(".title").addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("show");
  document.querySelector("#header-dropdown").classList.toggle("show");
  document.querySelector(".title").classList.toggle("show");
});
