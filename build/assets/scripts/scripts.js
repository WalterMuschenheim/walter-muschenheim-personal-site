document.querySelector("#header-link").addEventListener("click", () => {
  const scrollPosition =
    document.querySelector(".frontispiece-subtitle").getBoundingClientRect()
      .bottom +
    window.pageYOffset -
    window.innerHeight +
    20;

  window.scroll({ top: scrollPosition, left: 0, behavior: "smooth" });
  document.querySelector(".frontispiece-header").focus();
});

document.querySelector("#info-link").addEventListener("click", () => {
  const scrollPosition =
    document.querySelector(".info").getBoundingClientRect().bottom -
    document.querySelector(".info").getBoundingClientRect().height / 2 +
    window.pageYOffset -
    window.innerHeight / 2 +
    (window.innerHeight > window.innerWidth
      ? document.querySelector(".frontispiece-header").getBoundingClientRect()
          .height
      : 0);

  window.scroll({ top: scrollPosition, left: 0, behavior: "smooth" });
  document.querySelector(".info").focus();
  document.querySelector(".frontispiece-header").classList.remove("show");
  document.querySelector("#header-dropdown").classList.remove("show");
  document.querySelector(".frontispiece-title").classList.remove("show");
});

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
