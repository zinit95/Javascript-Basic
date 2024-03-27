//함수 선언문
function add(n1,n2){
  return n1 + n2;
}

console.log('======================');
//함수 표현식
const multiply = function(n1,n2){
  return n1 * n2;
};  //값이기 때문에 세미콜론을 붙여야 된다


console.log('======================');
//화살표 함수1
const arrowFnc = (n1,n2) => {
  return n1 + n2;
};  //값이기 때문에 세미콜론을 붙여야 된다
const r1 = arrowFnc(100,200);
console.log(`r1 : ${r1}`);


console.log('======================');
//화살표 함수2 코드가 한줄밖에 없으면?
const arrowFnc2 = (n1,n2) => n1 + n2;

const r2 = arrowFnc2(100,200);
console.log(`r2 : ${r2}`);


console.log('======================');
function sayHello(){
  console.log('안녕못해');
}
sayHello();


const sayHello2 = function(){
  console.log('값을 넣은 function : 안녕못한다');
}
sayHello2();


console.log('======================');
//함수 코드가 한줄이라면
const sayHello3 = () => console.log('화살표함수 : 안녕못한다');
sayHello3();


console.log('======================');
//함수 코드가 한줄이 이상이라면
const sayHello4 = () => {
  console.log('함수 코드가 한줄이 이상이라면 : 안녕못한다');
};
sayHello4();


const kim = {
  name : '김니모',
  greeting : sayHello,
  dance : () => console.log(`춤을 신나게 춥니다.`)
}
kim.greeting();
kim.dance();


/*
function pow(n1){
  return n1 ** 2;
}
var a = pow(1);
console.log(a);
*/

//파라미터가 1개라면!! 괄호를 지울 수 있다
const pow = n1 => n1 ** 2;
//const pow = (n1) => n1 ** 2;
console.log(pow(5));

//파라미터가 2개라면 괄호를 꼭!!써야 된다
//const pow = (n1,n2) => n1 ** 2;



