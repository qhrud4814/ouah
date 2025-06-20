var swiper = new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

$(function () {
  $("#fab").click(function () {
    $("html").animate({ scrollTop: 0 }, 1000);
  });
});
$(function () {
  $(".search").click(function () {
    //#btn 클릭하면 실행
    $(".search2").fadeToggle("slow");
  });
});

$(function () {
  $(".heart").click(function () {
    if ($(".heart").attr("src") === "./img/heart.png") {
      $(".heart").attr("src", "./img/fillheart.png");
    } else {
      $(".heart").attr("src", "./img/heart.png");
    }
  });
});
