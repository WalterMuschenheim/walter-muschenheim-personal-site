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

let scrolling = false;
let lastScrollY = 0;

document.addEventListener("scroll", () => {
  scrolling = true;
});

setInterval(() => {
  if (scrolling) {
    scrolling = false;
    console.log("lastScrollY" + lastScrollY);
    if (
      document.querySelector(".frontispiece + section").getBoundingClientRect()
        .top < 0
    ) {
      if (
        !document.querySelector(".frontispiece").classList.contains("fixed")
      ) {
        document.querySelector(".frontispiece").classList.add("fixed");
      }
      if (window.scrollY > lastScrollY) {
        console.log("lastScrollY" + window.scrollY);
        document.querySelector(".frontispiece").classList.remove("drop-down");
      }
      if (window.scrollY < lastScrollY) {
        console.log("lastScrollY" + window.scrollY);
        document.querySelector(".frontispiece").classList.add("drop-down");
      }
    }
  }
  lastScrollY = window.scrollY;
}, 30);
