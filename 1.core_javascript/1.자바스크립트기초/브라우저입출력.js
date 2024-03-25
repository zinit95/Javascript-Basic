


const food = '돈까스';
const userName = '스윙스';

console.log(`${food}의 왕 ${userName}`);



// 브라우저 전용함수 : node.js 환경에서는 작동불가
//prompt() : 브라우저에서 입력을 입력을 할 수 있게 해주는 함수
//confirm() : 브라우저에서 확인/취소를 할 수 있게 해주는 함수
//alert() : 브라우저에서 알림창을 띄우는 함수


//console.log('=========== prompt() ===========');
//var youName = prompt(`당신의 닉네임을 입력하세용가리!`);
//console.log(`니 이름은 : ${youName}`);



//console.log('=========== confirm() ===========');

//var resultFlag = confirm(`정말로 진짜 닉네임이 맞습니기까?!`);
//console.log(`나의 대답은 : ${resultFlag}`);


console.log('======================');
// +prompt('첫번째 수 입력'); 에 + 를 붙이면 숫자로 인식한다.
var n1 = +prompt('첫번째 수 입력');
var n2 = +prompt('두번째 수 입력');

alert(typeof n1);
alert(`두 수의 합 : ${n1 + n2}`);









