





console.log('======================');
var a = 5;
var b = '5';
console.log(a == b); //true == 앵간하믄 쓰지말자
console.log(a === b); //false
console.log(a !== b); //true
console.log(a != b); //false


console.log('======= "==" 비교는 결과 예측이 어려움 =========');

console.log('0' == '');
console.log(0 == '');
console.log('0' == 0);
console.log(false == 'false');
console.log(false == '0');



console.log('======= "===" 되도록이면 쓰자 =========');

console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === '0');



console.log('======= 대소 비교 =========');

//아스킷코드 참고 : https://namu.wiki/w/%EC%95%84%EC%8A%A4%ED%82%A4%20%EC%BD%94%EB%93%9C
console.log('a' > 'A'); //97 > 55 true
console.log('c' > 'a'); //99 > 97 true
console.log('ace' > 'ade'); //false 
















