$(function () {
    $("#btn1").click(function () {
        alert("검색어를 입력해주세요")
    })
})

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
  