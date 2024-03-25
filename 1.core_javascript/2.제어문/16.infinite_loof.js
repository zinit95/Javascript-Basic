
//while 횟수가 정해지지 않은 반복문일 때 while문을 사용한다
//for문은 횟수가 정해져있는 반복문일 때 for문을 사용한다.


//1~100사이의 랜덤정수
//random() * (y - x + 1) + x
var rn = Math.floor(Math.random() * 100) + 1;
while(true){
  var rn = Math.floor(Math.random() * 100) + 1;
  console.log('hello');
  if(rn === 10){
    break;
  }
}  console.log('반복문 종료!!');
