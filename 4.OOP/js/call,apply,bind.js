

console.log('============================ call () ================================');

//this 를 조적하는 메서드
const kim = {
  name : '김철수',
  age : 33
};
const park = {
  name : '박영희',
  age : 66
};
function sayHello(lang1, lang2){
  console.log(this);
  console.log(`hello i am ${this.name}, i can speak ${lang1} and ${lang2}`);
};

//call
//sayHello('koean', 'enlish');
//param1 : 조작할 this를 전달
//...param2 : 원래 해당 함수가 받아야 할 파라미터 전달
//sayHello('spanish','japanese')
sayHello.call(kim,'spanish','japanese');
sayHello.call(park,'koean','chinese');


console.log('=========================== apply () =================================');

//apply : call 이랑 같다, 다만 param2를 배열로 묶어서 전달 
// sayHello.apply(park,'한국어','영어'); //에러코드 
sayHello.apply(park,['한국어','영어']);


console.log('=========================== bind () =================================');

//bind : call, apply 와 같으나 함수를 바로 실행시키지 않고 this 를 조작한 새로운 함수를 반환 
const newSayHello = sayHello.bind(kim, '힌두어','일본어');
newSayHello();

// bind 실제 사용 예시
const clickHandler = function(fruitName, e) {
  console.log('event객체: ', e);
  console.log('this: ', this);
  this.style.background = 'red';
  console.log('전달한과일명:', fruitName);
};

const $input = document.getElementById('fruit');
const $btn = document.getElementById('btn');

const bindedClickHandler = clickHandler.bind($btn, '레몬');

// $btn.addEventListener('click', clickHandler.bind($input));

// $btn.addEventListener('click', bindedClickHandler);

$btn.addEventListener('click', function(name, e) {
  console.log('이름:', name);
}.bind($btn, '김멍멍'));




















