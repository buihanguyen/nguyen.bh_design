$(document).ready(function () {
  $(window).bind("mousewheel", function (event) {
    if (event.originalEvent.wheelDelta >= 0) {
      $(".ishare").css("right", "0");
    } else {
      $(".ishare").css("right", "-50px");
    }
  });
});
////
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
//
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
