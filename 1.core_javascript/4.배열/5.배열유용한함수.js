



var foodList = ['닭꼬치','볶음밥','짜장면','족발'];

var target = '짜장면';
//indexOf() : 배열의 특정 요소(데이터)가 몇번 인덱스에 있는지 알려줌
var index = foodList.indexOf(target);
console.log(`indexOf() : ${index}`);
/*
for(var i = 0; i < foodList.length; i++){
  if(target === foodList[i]){
    index = i
    break;
  }
}
*/

//include() : 특정 데이터가 있는지 없는지 논리로 확인
var flag = foodList.includes('족발');
console.log(`flag : ${flag}`);

//slice() : 배열을 원하는 범위만큼 분할
var sliced = foodList.slice(1, 3); //1이상 3미만
console.log(`sliced: [${sliced}]`); //볶음밥,짜장면

var sliced2 = foodList.slice(3); //3번부터 끝까지
console.log(`sliced: [${sliced2}]`); //족발

var sliced3 = foodList.slice(); //3번부터 끝까지
console.log(`sliced: [${sliced3}]`); //'닭꼬치','볶음밥','짜장면','족발'

//slice를 해도 복사본에서 추출하는 개념이라 원본은 변하지 않음.
console.log(`foodList: [${foodList}]`); 

console.log('===========revers(); : 배열을 역정렬===========');
//revers() : 배열을 역정렬
//원본이 변경된다.
var nums = [10, 20, 30, 40, 50];
//카피를 본 생성 revers() 하자
var numsCopy = nums.slice()
numsCopy.reverse();
console.log(nums);
console.log(numsCopy); //[50, 40, 30, 20, 10]


console.log('========== concat(): 배열을 합친다, 결합한다 ============');
//concat(): 배열을 합친다, 결합한다, 배열을 결합한 사본을 가져다줌
var arr1 = [10, 20, 30];
var arr2 = [99, 999];
var concated = arr1.concat(arr2);
console.log(concated);



console.log('========== splice(): 배열의 삭제 및 삽입 ============');
// splice(): 배열의 삭제 및 삽입 
// 원본에서 삭제 삽입을 진행하므로 원본이 손상됨
console.log(foodList);
foodList.splice(2,1); //2번부터 1개 지워라         //1이상 2미만 : 볶음밥,짜장면 삭제  
console.log(foodList);

foodList.splice(0,1,'파스타','보쌈');
console.log(foodList);

foodList.splice(2,0,'마라탕'); //보쌈 볶음밥 사이에 마라탕을 넣어보자
console.log(foodList);

foodList.splice(2); //2번부터 끝까지 싹 지워라
console.log(foodList);




/*

var foodList = ['닭꼬치', '볶음밥', '짜장면', '족발'];

// indexOf(): 배열의 특정 요소(데이터)가 몇번 인덱스에 있는지 알려줌
var target = '짜장면';

var index = foodList.indexOf(target);
console.log(`index: ${index}`);

// for (var i = 0; i < foodList.length; i++) {
//   if (target === foodList[i]) {
//     index = i;
//     break;
//   }
// }

// include(): 특정 데이터가 있는지 없는지 논리로 확인
var flag = foodList.includes('족발');
console.log(`flag: ${flag}`);

// slice(): 배열을 원하는 범위만큼 분할
var sliced = foodList.slice(1, 3);
console.log(sliced);

// 3번부터 끝까지
var sliced2 = foodList.slice(3);
console.log(sliced2);

// 전체 복사 
var sliced3 = foodList.slice();
console.log(sliced3);

// slice를 해도 복사본에서 추출을 하는 개념이라 원본은 변하지 않음
console.log(foodList);

// reverse(): 배열을 역정렬
// 원본이 변경됨
console.log('=====================');
var nums = [10, 20, 30, 40, 50];
var numsCopy = nums.slice(); // 카피본 생성

numsCopy.reverse();

console.log(nums);
console.log(numsCopy);


// concat() : 배열을 결합한 사본을 갖다줌
console.log('==================');
var arr1 = [10, 20, 30];
var arr2 = [99, 999];

var concated = arr1.concat(arr2);
console.log(concated);

// splice() : 배열의 삭제 및 삽입, 
// 원본에서 삭제 삽입을 진행하므로 원본이 손상됨
console.log('====================');

console.log(foodList);

foodList.splice(2, 1);

console.log(foodList);

foodList.splice(0, 1, '파스타', '보쌈');

console.log(foodList);

foodList.splice(2, 0, '마라탕');
console.log(foodList);

foodList.splice(2); // 2번부터 끝까지 싹지워
console.log(foodList);
*/
