


// 첫번째 문제 : 세 수의 값이 같은지 판별

var n1 = +prompt('첫번째 문제 : 정수A');
var n2 = +prompt('첫번째 문제 : 정수B');
var n3 = +prompt('첫번째 문제 : 정수C');

if(n1 === n2 && n2=== n3){
   alert('3개 값이 모두 같다');
}else if(n1 == n2 || n2 === n3 || n3 === n1){
  alert('2개 값이 같다');
}else{
  alert('모두 다른 값이 다르다');
}



// 두번째 문제 
 
var n11 = +prompt('두번째 문제 : 정수AA');
var n22 = +prompt('두번째 문제 : 정수BB');
var diff;

if(n11 > n22){
  diff = n11 - n22;
}else{
  diff = n22 - n11;
}
alert(`두 값의 차이는 ${diff} 입니다.`);

//삼항연산자로 한줄로 표현하는 코드
// var diff = ( n11 > n22 ) ? n11 - n22 : n22 - n11;





// 세번째 문제 
var n111 = +prompt('세번째 문제 : 정수1');
var n222 = +prompt('세번째 문제 : 정수2');
var n333 = +prompt('세번째 문제 : 정수3');
var min = n111;
// var result3 = Math.min(n111, n222, n333);
if(n222 < min){
  min = n222
}
if(n333 < min){
  min = n333
}
alert(`최소값은 ${min} 입니다.`);

