// 정수 n을 전달하면 1 ~ n까지의 모든 짝수를 출력
function showEvenNumber(n) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      nums.push(i);
    }
  }
  console.log(nums);
}
showEvenNumber(7);


function showOddNumber(n) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 1 === 0) {
      nums.push(i);
    }
  }
  console.log(nums);
}
//showOddNumber(7);


function showOddEvenNumber(n,isOdd) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === isOdd) {
      nums.push(i);
    }
  }
  console.log(nums);
}
showOddEvenNumber(7,1);



//3의 배수
function showTripleNumber(n , x) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % x === 0) {
      nums.push(i);
    }
  }
  console.log(nums);
}
//showTripleNumber(10, 2);



/** 
//콜백을 이용한 솔루션
//정수 n을 전달하면 1~n까지의 정수를 조건에 맞게 출력
function showNumber(n){
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 4 === 0 && i % 8 === 0) { //4의 배수이면서 8의 배수가 아닌것들
      nums.push(i);
    }
  }
  console.log(nums);
}
*/


// 콜백을 이용한 솔루션
// 정수 n을 전달하면 1 ~ n까지의 정수를 조건에 맞게 출력
function showNumber(n, condition) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (condition(i)) {
      nums.push(i);
    }
  }
  console.log(nums);
}

showNumber(20, function(i) { return i % 2 === 0; });
//showNumber(20, function(i) { return i % 2 === 1; });
//showNumber(100, function(i) { return i % 6 === 0 && i % 12 !== 0; });


console.log('======================');

function makeCook(recipeName , recipeCode){
  console.log('나만의 맛도라 짭짭박사 레시피');
  console.log(`요리이름 : ${recipeName}`)
  //실제 레시피 출력을 만ㅁ들어서 전달해주세요.
  recipeCode();

  console.log('참 쉽죠');
}
makeCook('엽기떡볶이', () => {
  console.log('1. 물넣기');
  console.log('2. 대파 양파 넣기');
  console.log('3. 맛도리');
})































