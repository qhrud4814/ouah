// TODO : 이모지 스크롤 넣기
$(function () {
  $("#fab").click(function () {
    // #fab 를 클릭하면
    $("html").animate({ scrollTop: 0 }, 1000);
  });
});

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
