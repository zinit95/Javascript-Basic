

// 정수값 20을 입력했을 떼
// 1,2,4,5,10,20 약수는 6개입니다 이랗게 출력 

/*
var int = +prompt('양의 정수를 입력하세요.');

for(var i = 2; i <= int; i++){
  if(i % 2 === 0){
    alert(i);
  }
}
*/

/*
//순서 1
// 입력받은 숫자의 모든 약수를 출력하고 약수의 개수를 출력하라
var targetNum = 10;

for (var i = 1; i <= targetNum; i++) {
  if (targetNum % i === 0) {
    console.log(i);
  }
}
*/

/*
//순서 2
// 입력받은 숫자의 모든 약수를 출력하고 약수의 개수를 출력하라
var targetNum = 9;

// 약수 카운트를 저장할 변수
var count = 0;

for (var i = 1; i <= targetNum; i++) {
  if (targetNum % i === 0) {
    console.log(i);
    count++;
  }
}
console.log(`약수의 개수: ${count}개`);

*/

/*
//순서 3
// 입력받은 숫자의 모든 약수를 출력하고 약수의 개수를 출력하라
var targetNum = +prompt('정수: ');

// 약수 카운트를 저장할 변수
var count = 0;

for (var i = 1; i <= targetNum; i++) {
  if (targetNum % i === 0) {
    alert(i);
    count++;
  }
}
alert(`약수의 개수: ${count}개`);
*/


/*
//순서 4
// 입력받은 숫자의 모든 약수를 출력하고 약수의 개수를 출력하라
var targetNum = +prompt('정수: ');

// 약수 카운트를 저장할 변수
var count = 0;

// 출력내용을 저장할 변수
var result = '';

for (var i = 1; i <= targetNum; i++) {
  if (targetNum % i === 0) {
    result += `${i} `;
    count++;
  }
}
result += `약수의 개수: ${count}개`;
alert(result);
*/






//순서 5
// 입력받은 숫자의 모든 약수를 출력하고 약수의 개수를 출력하라
var targetNum = +prompt('정수: ');

// 약수 카운트를 저장할 변수
var count = 0;

// 출력내용을 저장할 변수
var result = '';

for (var i = 1; i <= targetNum; i++) {
  if (targetNum % i === 0) {
    result += `${i}\n`;
    count++;
  }
}
result += `약수의 개수: ${count}개`;

alert(result);
