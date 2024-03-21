






var count = +prompt('정수 : ');  //반복문 회전 수
var mark = "";
var i = 1;
while(i <= count){
  if(i % 2 === 1){  //i가 홀수일땐 + 출려
    mark += '+';
  }else{                //i가 짝수일댄 - 출력
    mark += '-';
  }
  i++;
}
alert(mark);

/*
var count = +prompt('정수: '); // 반복문 회전 수
var mark = ''; // 기호를 누적할 변수

var i = 1;
while (i <= count) {
  if (i % 2 === 1) {
    mark += '+';
  } else {
    mark += '-';
  }
  i++;
}
alert(mark);
*/


