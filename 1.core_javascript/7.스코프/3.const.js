


//변수 : 변경 가능한 데이터
let x; //변수 선언
x = '도리'; //변수 재선언
console.log(x);

//const : 상수 선언, 변수 재선언이 불가능하다. (변수와 반대 되는 개념), 변경 불가능한 데이터
const y = '니모';
console.log(y);

const COLOR_GREEN = '#0f0';
/*
 * $div.style.background = COLOR_GREEN;
 */

// 상수는 객체의 불변셩을 유지할 수 있다.
const kim = {
  name : '김예진',
  age : 30,
};
kim.age = 95;
kim.name = '김수한무';
console.log(kim);

const array = {
  0 : 'A',
  1 : 'B',
  2 : 'C',
  length : 3,
}
array.length;
console.log(typeof array);
// * 큰 카테고리로 보면 배열도 객체이다.




