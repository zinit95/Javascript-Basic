

// 양의정수를 50이라 입력했을 때 2의 제곱수등중에 50이하인 제곱수가 나타나야된다




//var int = +prompt('양의 정수를 입력하세요.');
/*
var int = 50
;
for(var i = 1; i < int; i*=2){
  if (i * i <= int) {
    alert(i * i);
  }
}
*/




//입력받은 숫자 이하의 2의 제곱수를 가로로 출력

var n = 70;
var i = 2;
while(i <= n){
  console.log(i);
  i *= 2 
}

// 입력받은 숫자 이하의 2의 제곱수를 가로로 출력
var n1 = +prompt('양의 정수를 입력하세요.'); 
//제곱수를 누적할 변수
var accum = '';
for (var i = 2; i <= n1; i *= 2) {
  accum += `${i} `;
}
alert(accum);


