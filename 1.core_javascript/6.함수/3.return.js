

//return은 함수의 탈출문 (종료문)

function add(n1,n2){
  console.log(`n1 : ${n1}, n2 : ${n2}`);
  return n1 + n2; 
  //return 밑에 코드를 써도 작동하지 않는다.
}



//반환값 (return) : 함수 호출부로 함수의 결과값을 전달해 주는 것

console.log(add(10,20));

var result = add(10,20); 
console.log(result);

var result = add(10,20) * add(5,2); 
console.log(result);

var result = add(10,20) * add(add(1,4),2); 
console.log(result);

var result = add(10,20) * add(add(1,4),add(1,1)); 
console.log(result);

console.log(add(10,20));




//리턴이 없는 함수
function multi(n1,n2){
  console.log(`${n1} x ${n2} = ${n1 * n2}`);
}
console.log('======================');
var r1 = multi(3,4);
multi(2,9);
console.log(`${r1}`);
multi(add(2,3),add(5,6));

//리턴이 없는 함수는 변수에 저장하지 말고 다른함수의 매개값으로도 쓰면 안됨
var r2 = add(multi(1,2),multi(3,4));
console.log(`${r2}`); //NaN


//데이터베이스를 접속하는 함수
// function connectDatabase(id, pw, auth){
  
// }



//return이 업는 함수에서 return을 break처럼 사용하기
function callName(nickName){
  var pro = ['바보','병신','미친놈','지랄','개새끼'];
  if(pro.includes(nickName)){
    console.log('나쁜말 쓰지마세요');
  }
  return; //종료의 의미 
  console.log(`${nickName}님 안녕하세요!!`);
}
console.log('======================');

callName('바보');


