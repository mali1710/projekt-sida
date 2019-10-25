$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
  $("nav ul li").on("click", function() {
    $("nav ul").removeClass("showing");
  });
});
