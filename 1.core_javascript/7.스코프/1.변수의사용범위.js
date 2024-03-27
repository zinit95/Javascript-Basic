

var x = 77; //gloval scope : 전역변수
var y = true;
function foo(){
  var x = '홍길동'; //local scope : 지역변수
  console.log(`foo x: ${x}`);

  var y = '메롱';
  console.log(`foo y: ${y}`);

  
  var z = 100;

  //변수 x를 함수 밖에서 쓰고 싶으면 return을 해야 된다.
  //return을 안하면 함수가 끝나면 사라진다.
  return x; 
}
foo(); //함수 안에 변수를 호출하고 싶으면 함수를 먼저 호출해야 된다.
console.log(`x : ${x}`);
console.log(`y : ${y}`);
//console.log(`z : ${z}`);


console.log('=========== 중첩함수 ===========');
//중첩함수 : 함수 안에 함수를 정의

function outer(m){
  var n = 'outer 지역변수 n'
  var v = 'outer 지역변수 v'
  console.log(n);
  console.log(v);
  console.log(m);


  //헬퍼 함수 : 바깥쪽 함수 전용함수
  function inner(){
    console.log(n);
    var m = 'inner local m'
    console.log(m);

    var inner = 'inner 함수';
    //console.log(inner);
  }
  inner();
  
}
outer('outer 파라미터 m');



