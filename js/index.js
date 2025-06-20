// TODO : hover_show _hide 넣기
$(function () {
  $(".gnb").hover(
    function () {
      // 마우스가 올라갔을때 실행
      $("#drop-down").show();
    },
    function () {
      // 마우스가 내려갔을때 실행
      $("#drop-down").hide();
    }
  );
});

// TODO : AOS 넣기
AOS.init();

// TODO : 이모지 스크롤 넣기
$(function () {
  $("#fab").click(function () {
    // #fab 를 클릭하면
    $("html").animate({ scrollTop: 0 }, 1000);
  });
});

// TODO : Swiper 넣기
var swiper = new Swiper(".mySwiper", {
  // TODO : 여기 옵션 넣기
  autoplay: { delay: 3000 },
});

$(function () {
  // TODO: 1) isotope 대상 태그(부모) 선택: product-box
  // TODO: 2) 자식박스(이미지) 선택       :.product
  // TODO: 3) filter: ".클래스명"        : 해당 클래스만 화면에 보임       :.product
  $(".product-box").isotope({
    // TODO: 자식박스(.product)
    itemSelector: ".product",
    // options
    layoutMode: "fitRows",
  });
  //   TOOD: 목록(li)을 클릭하면
  $(".product-list li").click(function () {
    // TODO: product-list 를 클릭하면
    $(".product-box").isotope({
      // TODO: 이미지 바꾸기: 태그속성 값 바꾸기
      // TODO: attr("data-filter")
      // TODO: li 태그 3개 중 클릭한 것
      filter: $(this).attr("data-filter"),
    });
  });
});

$(function(){
  $("#search").click(function () {
      $("#input-search");
  })
})