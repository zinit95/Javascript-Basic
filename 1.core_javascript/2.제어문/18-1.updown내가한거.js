



//random() * (y - x + 1) + x
var randomNumber = Math.floor(Math.random() * 10) + 1;
var num5 = 5;
// for(var i = 1; i <= num5; i++){
while(true){
  var userNumberInt = +prompt('1~10 사이의 숫자를 적어보세요');
  if(userNumberInt > 0 && userNumberInt <= 10  ){
    //alert('1~50 사이 숫자를 잘 적음');
    if(randomNumber  ===  userNumberInt){
      alert(`축하합니다! 숫자를 맞췄습니다!`);
      break;
    }else if(randomNumber < userNumberInt){
      alert(`down!!! ${num5} 남았습니다`);
    }else if(randomNumber > userNumberInt){
      alert(`up!!! ${num5} 남았습니다`);
    }
    num5 -= 1;
    if(num5 === 0){
      alert(`${num5} 남았습니다 기회를 모두 소진했다`);
      break;
    }
  }else{
    alert('야 1부터 10사이의 숫자를 적으라고 아놔');
  }
  
}























