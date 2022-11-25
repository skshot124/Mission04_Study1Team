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
  $(".menu li:first").click(function () {
    $("#modal").addClass("active");
  });
  $(".modalBtn").click(function () {
    $("#modal").removeClass("active");
  });

  var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapCenter = new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심 좌표
    mapOption = {
      center: mapCenter, // 지도의 중심 좌표
      level: 4 // 지도의 확대 레벨
    };

});