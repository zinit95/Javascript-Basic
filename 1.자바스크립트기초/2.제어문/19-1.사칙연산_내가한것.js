




var randomNumber = Math.floor(Math.random() * 100) + 1;
var result = randomNumber + randomNumber;
var num = 1; //문제 번호임 예)1번 2번 3번 등등
var success; //정답횟수
var failure; // 틀린횟수

//console.log(randomNumber)
// for(var i = 1; i <= 5; i++){
while(true){
  var userNumberInt = +prompt(`재미없는 사칙연삼 게임ㅋ \n  문제풀다가 하기시르면 0 적으면 됨 \n ${num}번문제 => ${randomNumber} + ${randomNumber}`);
  num++;
  if(result === userNumberInt){
    alert(`정답`);
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var result = randomNumber + randomNumber;
  }else if(userNumberInt === 0){
    alert(`게임을 종료한다.`);
    break;
  }else{
    alert(`틀렷어 이 바보야`);
  }
}



/*
var randomNumber = Math.floor(Math.random() * 100) + 1;
var result = randomNumber + randomNumber;
//console.log(randomNumber)

var num = 1;
while(true){
  var userNumberInt = +prompt(`재미없는 사칙연삼 게임ㅋ \n ${randomNumber} + ${randomNumber}`);
  if(result === userNumberInt){
    alert(`정답입니다. ${num}번 문제 정답!`);
    num++;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    result = randomNumber + randomNumber;
    //console.log(randomNumber)
  } else {
    alert(`틀렸습니다. ${num}번 문제 오답!`);
  }
}
*/


