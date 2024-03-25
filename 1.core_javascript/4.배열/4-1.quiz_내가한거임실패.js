/* 
var pets = ['멍멍이', '야옹이', '쩝쩝이'];

console.log(pets);

// push(): 배열 맨 끝에 데이터 추가
pets.push('징징이');
pets.push('어흥이', '거부긔', '닭둘긔');

console.log(pets);

// pop(): 배열 맨 끝 데이터 삭제
var myPet1 = pets.pop();
pets.pop();
var myPet2 = pets.pop();

console.log(pets);
console.log(myPet1);
console.log(myPet2);

// shift() : 배열의 맨 첫데이터 삭제
// unshift() : 배열의 맨 첫번째에 추가
pets.shift();

console.log(pets);
pets.unshift('뽈뽈이');

console.log(pets);

*/




/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/

var userNumberArr = [];
var sum = 0;

while(true){
   var userPrompt = prompt("숫자입력 하고 그만하면 내가 적은값 나옴");
      
   if(userPrompt === '그만'){
      for(var i = 0; i < userNumberArr.length; i++){
         sum += userNumberArr[i];
      }
      userNumberArr.push(+userPrompt);
      alert(`그만한다햇음 ${sum} `);
      break;
      console.log(+sum);
   }
}


