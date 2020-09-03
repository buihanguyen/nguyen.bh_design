var m_search = document.getElementById("m-active_search");
var form = document.getElementById("m-search-form");
var mx = document.getElementById("mx_icon");
m_search.onclick = function () {
  form.classList.add("active");
  form.classList.remove("hidden-icon");
};
mx.onclick = function () {
  form.classList.remove("active");
  form.classList.add("hidden-icon");
};
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
      $("#m-header").css("top", "-55px");
    } else if ($(window).scrollTop() < 1) {
      $("#m-header").css("top", "0");
    }
  });
});

var header = document.getElementById("m-container");
var toggle = document.getElementById("m_toggle_menu");
var icon = document.getElementById("icon-toggle");
var hidden = document.getElementById("hidden-icon");
var logo = document.getElementById("i-logo");
var body = document.getElementsByTagName("HTML")[0];
var layout = document.getElementById("m_layout");
function doToggle() {
  toggle.classList.add("m-hidden-menu");
  icon.classList.toggle("hidden-icon");
  hidden.classList.toggle("hidden-icon");
  body.classList.add("static");
  header.classList.add("static");
  layout.classList.add("overlow");
}
function doHidden() {
  toggle.classList.remove("m-hidden-menu");
  icon.classList.toggle("hidden-icon");
  hidden.classList.toggle("hidden-icon");
  body.classList.remove("static");
  header.classList.remove("static");
  layout.classList.remove("overlow");
}
//s
var info = document.getElementById("icon-info");
var mess = document.getElementById("message");
info.onclick = function () {
  mess.classList.remove("hidden");
  mess.classList.add("actived");
};
window.addEventListener("mouseup", function (event) {
  var box1 = document.getElementById("icon-info");
  var background1 = document.getElementById("m-dark-background");
  if (event.target != box1 && event.target.parentNode != box1) {
    mess.classList.add("hidden");
    mess.classList.remove("actived");
  }
});
////
var x = document.getElementById("x_icon");
var search = document.getElementById("action");
var active = document.getElementById("active_search");
x.onclick = function () {
  search.classList.add("hidden-form");
  search.classList.remove("toggle-form");
};
active.onclick = function () {
  search.classList.add("toggle-form");
};
//
var scroll_top = document.getElementById("scroll-to-top");
scroll_top.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
