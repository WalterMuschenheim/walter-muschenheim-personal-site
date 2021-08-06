document.querySelector("#header-dropdown").addEventListener("click", () => {
  document.querySelector(".frontispiece-header").classList.toggle("show");
  document.querySelector("#header-dropdown").classList.toggle("show");
  document.querySelector(".frontispiece-title").classList.toggle("show");
});

document.querySelector(".frontispiece-title").addEventListener("click", () => {
  document.querySelector(".frontispiece-header").classList.toggle("show");
  document.querySelector("#header-dropdown").classList.toggle("show");
  document.querySelector(".frontispiece-title").classList.toggle("show");
});
