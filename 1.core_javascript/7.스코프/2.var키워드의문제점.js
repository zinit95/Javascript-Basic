

// 1. 변수의 중복선언을 암묵적으로 허용

var x = 10;
let y = 10;


// ......10만줄

var x = 'xxx';
console.log(`x : ${x}`); //오류가 나타나지 않고 덮어 쓴다.

//var y = 'yyy';
//console.log(`x : ${y}`); //오류가 나타난다

console.log('======================');

// 2. 블록 레벨 스코프 지원하지 않는다.

//var i = '메롱';
let i = '메롱';

for(let i = 0; i < 5; i++){
// for(var i = 0; i < 5; i++){
  console.log(`for - i : ${i}`);
}

console.log(`지역변수 - i : ${i}`);



console.log('======================');
//3. 호이스팅 : 선언위치와 관계없이 참조가능
hobby = '댄스';

var hobby; //나중에 선언해도 출력이 된다.
console.log(hobby);

