$(document).ready(function () {
//  1st nav menu
  $('.navi > li').mouseover(function () {
    $(this).find('.submenu').stop().slideDown(500);
  }).mouseout(function () {
    $(this).find('.submenu').stop().slideUp(500);
  });

// 2nd nav menu
  $(".notice li:first").click(function () {
    $("#modal").addClass("active");
  });
  $('.navi2 > li').mouseover(function () {
    $(this).find('.submenu2').stop().slideDown(300);
  }).mouseout(function () {
    $(this).find('.submenu2').stop().slideUp(300);
  });

// Modal popup
        $(".menu li:first").click(function(){
          $("#modal").addClass("active");
      });
      $(".modalBtn").click(function(){
          $("#modal").removeClass("active");
      });

// FAQ click function
  var faq = document.getElementsByClassName("faq-page");
  var i;
  for (i = 0; i < faq.length; i++) {
      faq[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var body = this.nextElementSibling;
          if (body.style.display === "block") {
              body.style.display = "none";
          } else {
              body.style.display = "block";
          }
      });
  }
});