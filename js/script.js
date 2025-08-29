window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const body = document.body;

  if (window.scrollY > 50) {
    header.classList.add("header-gradient");
    body.classList.add("scroll-active");
  } else {
    header.classList.remove("header-gradient");
    body.classList.remove("scroll-active");
  }
});
