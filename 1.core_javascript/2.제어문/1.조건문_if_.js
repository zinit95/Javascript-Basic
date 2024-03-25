

console.log('=========== 랜덤값 함수 ===========');
/**
  0 이상 1 미만의 난수 생성하기↓↓↓↓↓
  랜덤 정수 생성하기 : Math.random();



  1이상 10이하의 랜덤 정수 생성
  Math.random()       - 0.0 <= ~ < 1.0
  Math.random() * 10  - 0.0 <= ~ < 10.0

  소수점 버리는 함수 
  Math.floor() : 소수점 이하 버림
  ex ) Math.floor(9.544587) => 9 
  ex ) Math.floor(5.151254) => 5 
  Math.floor( Math.random() * 10);      - 0 <= ~ < 10

  Math.floor( Math.random() * 10) + 1;  - 1 <= ~ < 11

  //랜덤 범위 정수값 공식 
  x 이상 y 이하의 랜덤정수 생성
  Math.floor( Math.random() * (y - x + 1) )+ x 

  예) 117 ~ 142 
  Math.floor( Math.random() * (142 - 117 + 1) )+ 117 
  Math.floor( Math.random() * 26 )+ 117 

 */

var randomNumber = Math.floor( Math.random() * 10 ) + 1;
console.log(`랜덤값 : ${randomNumber}`);


console.log('======================');

//var score = 90;
var score = Math.floor( Math.random() * 101 );
console.log(`점수 : ${score}점`);

if(score > 60){
  console.log('합격하셨습니다!짝짜짝!!');
  console.log('마 고생해따');
}else{
  console.log('시험 탈락 ㅋㅋㅋㅋㅋ');
}







































