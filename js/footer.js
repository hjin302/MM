function goPage1(){
  location.replace('/mandal')
}

function goPage2(){
  location.replace('/mandalt')
}

function goPage3(){
  location.replace('/shop')
}

function goPage4(){

}

function goHome(){
  location.replace('/')
}

function pressLogoBtn(){
  // setTimeout("timer()", 1000);
  setTimeout("showDiaryReportBtn()", 1000);
}


function NopressLogoBtn(){
  
  diaryBtn = document.getElementsByClassName("diaryBtn"); //  숨기기
  reportBtn = document.getElementsByClassName("reportBtn"); // 숨기기

  diaryBtn[0].style.display="none";
  reportBtn[0].style.display="none";

}

function showDiaryReportBtn() {
  // console.log('show');
  diaryBtn = document.getElementsByClassName("diaryBtn"); // 보이기
  reportBtn = document.getElementsByClassName("reportBtn"); // 보이기

  diaryBtn[0].style.display = "block";
  reportBtn[0].style.display = "block";

  diaryBtn[0].style.opacity = 0;
  reportBtn[0].style.opacity = 0;

  diaryBtn[0].style.animationName = "showDiaryReportBtn";
  reportBtn[0].style.animationName = "showDiaryReportBtn";

  diaryBtn[0].style.animationDuration = "1s";
  reportBtn[0].style.animationDuration = "1s";

  diaryBtn[0].style.animationIterationCount = 1;
  reportBtn[0].style.animationIterationCount = 1;

  diaryBtn[0].style.animationFillMode = "forwards";
  reportBtn[0].style.animationFillMode = "forwards";
}