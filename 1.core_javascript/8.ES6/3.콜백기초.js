

// 어떤 계산을 하는 함수
function operate(param) {
  console.log(`param: ${param}`);
  
  console.log('계산기 작동!!');
  const n1 = 10, n2 = 20;
  const result = param(n1, n2);
  return result;
}
const abc = '123';

function add(n1, n2) {
  return n1 + n2;
}

// operate 호출 -> 다른 이름이 없는 함수를 전달
const result = operate(function(n1, n2) {return n1 + n2;});
//const result = operate(function(n1, n2) {return n2 ** n1;});
//const result = operate(function(n1, n2) {return [n1 , n2];});

console.log(`result: ${result}`);







/*
//어떤 계산을 하는 함수
function operate(param){
  console.log(param);

  //console.log('계산기 작동');
  const n1 = 10, n2 = 20;
  //const result = n1 + n2;
  const result = param(10,20);
  return result;
}

function add(n1,n2){
  return n1 + n2;
}

operate(add); //add 함수를 통째로 집어넣은것
console.log('======================');
operate(add(1,2));
console.log('======================');

//operate 호출 -> 이름이 없는 다른 함수를 전달 
operate(function(n1,n2){
  return n1 + n2;
});

*/


































