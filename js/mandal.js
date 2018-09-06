window.onload = async ()=>{
  
  document.getElementsByClassName("diaryBtn").style.display="none"; // 숨기기

  var mandalTitle = new Vue({
    el: '.mandalTitle',
    data:{
      title : '',
      achievement : ''
    }
  })
  var result = await axios.post('/getTitle',{some : "thing"});
  if(result.status == 404){
    alert('오류입니다!')
    location.replace('/login');
  }
  else if(result.status == 401){
    alert('세션이 만료되었습니다.')
    location.replace('/login');
  }
  else if(result.status == 200){
    mandalTitle.title = result.data.re.title;
    mandalTitle.achievement = result.data.re.achievement;
  }
}
