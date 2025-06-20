// TODO : 메뉴 상단바 내리기
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
  
  // TODO : 전체동의
function selectAll(selectAll) {
  const checkboxes = document.getElementsByName("TermsofUse");

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
}

