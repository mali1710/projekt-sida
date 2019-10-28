$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
  $("nav ul li").on("click", function() {
    $("nav ul").removeClass("showing");
  });
  $(document).scroll(function() {
    var height = 100;
    if ($(this).scrollTop() > height) {
      $("nav").css("background-color", "rgba(237, 235, 232, 1)");
    } else {
      $("nav").css("background-color", "rgba(237, 235, 232, 0)");
    }
  });
});
