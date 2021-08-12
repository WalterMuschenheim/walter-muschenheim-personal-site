if (document.querySelector("#header-link")) {
  document.querySelector("#header-link").addEventListener("click", () => {
    const scrollPosition =
      document.querySelector(".subtitle").getBoundingClientRect().bottom +
      window.pageYOffset -
      window.innerHeight +
      20;

    window.scroll({ top: scrollPosition, left: 0, behavior: "smooth" });
    document.querySelector(".header").focus();
  });
}

function sectionScroller(sectionName) {
  const scrollPosition =
    document.querySelector(`.${sectionName} .info`).getBoundingClientRect()
      .bottom -
    document.querySelector(`.${sectionName} .info`).getBoundingClientRect()
      .height /
      2 +
    window.pageYOffset -
    window.innerHeight / 2 +
    (window.innerHeight > window.innerWidth
      ? document.querySelector(".header").getBoundingClientRect().height
      : 0);
  window.scroll({ top: scrollPosition, left: 0, behavior: "smooth" });
  document.querySelector(`.${sectionName}`).focus();
  document.querySelector(".header").classList.remove("show");
  document.querySelector("#header-dropdown").classList.remove("show");
  document.querySelector(".title").classList.remove("show");
}

let scrolling = false;
let lastScrollY = 0;

document.addEventListener("scroll", () => {
  scrolling = true;
});

setInterval(() => {
  if (scrolling) {
    scrolling = false;
    nextSection =
      document.querySelector(".frontispiece") != null
        ? document.querySelector(".frontispiece + section")
        : document.querySelector(".page-header + section");
    pageHeader =
      document.querySelector(".frontispiece") != null
        ? document.querySelector(".frontispiece")
        : document.querySelector(".page-header");

    if (nextSection.getBoundingClientRect().top < 0) {
      if (
        !document.querySelector(".header-container").classList.contains("fixed")
      ) {
        const frontisHeight = pageHeader.getBoundingClientRect().height;
        document.querySelector(".header-container").classList.add("fixed");
        pageHeader.style.minHeight = frontisHeight + "px";
      }
      if (window.scrollY > lastScrollY) {
        document
          .querySelector(".header-container")
          .classList.remove("drop-down");
      }
      if (window.scrollY < lastScrollY) {
        document.querySelector(".header-container").classList.add("drop-down");
      }
    } else if (
      pageHeader.getBoundingClientRect().bottom >=
      document.querySelector(".title").getBoundingClientRect().bottom
    ) {
      if (
        document.querySelector(".header-container").classList.contains("fixed")
      ) {
        document.querySelector(".header-container").classList.remove("fixed");
        pageHeader.style.minHeight = "unset";
      }
    }
  }
  lastScrollY = window.scrollY;
}, 30);
