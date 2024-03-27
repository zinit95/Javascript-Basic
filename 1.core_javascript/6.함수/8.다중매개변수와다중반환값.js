





function add2(n1,n2){
  return n1 + n2;
}
function add3(n1,n2,n3){
  return n1 + n2 + n3;
}
var r1 = add2(5,9,2);
console.log(r1);

var r2 = add3(8,7,2);
console.log(r2);


// 만약 n갸의 정수 합을 구해주는 함수를 만ㅁ들어야 한다면
//파라미터에 집합자료형(배열,객체)을 전달한다

console.log('======================');
function addAll(number){
  var total = 0;
  for(var n of number){
    total += n;
  }
  return total;
}
var r3 = addAll([1,2,3]);
console.log(r3);
console.log(addAll([50,78,8]));


console.log('========== ES6 - spread문법 ============');
//ES6 - spread문법
function addAllES6(...numbers){ //1. numbers 앞에 ...을 적으면 배열로 만들어준다
//function addAllES6(numbers,numbers2){//1-1. 파라미터 2개를 사용하고 싶으면 
  console.log(numbers);
  var total = 0;
  for(var n of numbers){ //of 뒤에 꼭 배열이 들어와야 된다.
    total += n;
  }
  return total;
}
var r4 = addAllES6(10,20,30,50,70); //2. 파라미터에 ...을 안적으면 배열로 적어야 된다 ([10,20,30,50,70])
//var r4 = addAllES6([10,20],[55,85,97]); //2-1. 이렇게 배열을 만들어서 적으면 된다



console.log('======================');
//다중 반환값
//함수의 반환값은 언제나 하나다. (*바뀌지 않는다.)


function aruOper(n1,n2){
  var addRe = n1 + n2;
  var subRe = n1 - n2;
  var mulRe = n1 * n2;
  var divRe = n1 / n2;

  return [addRe, subRe, mulRe, divRe];
}
var r5 = aruOper(20,10);
console.log(`덧셈결과 : ${r5[0]}`);
console.log(`뺄셈결과 : ${r5[1]}`);
console.log(`곱셈결과 : ${r5[2]}`);
console.log(`나눗셈결과 : ${r5[3]}`);




console.log('======================');

function arithmeticOperate2(n1, n2) {
  var addResult = n1 + n2;
  var subResult = n1 - n2;
  var multiResult = n1 * n2;
  var divResult = n1 / n2;
  return {
    add : addResult, 
    sub : subResult, 
    multi : multiResult, 
    div : divResult,
  };
}

var r6 = arithmeticOperate2(20, 10);
console.log(`덧셈결과: ${r6.add}`);
console.log(`뺄셈결과: ${r6.sub}`);
console.log(`곱셈결과: ${r6.multi}`);
console.log(`나눗셈결과: ${r6.div}`);


console.log('==========위에코드 변수를 2회이상 사용하지 ㅇ안을때============');

function arithmeticOperate3(n1, n2) {
  
  return {
    add : n1 + n2, 
    sub : n1 - n2, 
    multi : n1 * n2, 
    div : n1 / n2,
  };
}

var r7 = arithmeticOperate3(20, 10);
console.log(`덧셈결과: ${r7.add}`);
console.log(`뺄셈결과: ${r7.sub}`);
console.log(`곱셈결과: ${r7.multi}`);
console.log(`곱셈결과: ${r7.div}`);

//만약 곱하기 결과값만 보고싶을 때
var r8 = arithmeticOperate3(5, 3).multi;
console.log(r8);

