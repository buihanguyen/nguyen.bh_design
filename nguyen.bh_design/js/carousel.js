$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  items: 1,
});

var x = document.getElementById("x_icon");
var search = document.getElementById("action");
var active = document.getElementById("active_search");
x.onclick = function () {
  search.classList.add("hidden-form");
  search.classList.remove("toggle-form");
};
var abc = document.getElementById("abc");
abc.onclick = function () {
  search.classList.add("toggle-form");
};
active.onclick = function () {
  search.classList.add("toggle-form");
};
var scroll_top = document.getElementById("scroll-to-top");
scroll_top.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
