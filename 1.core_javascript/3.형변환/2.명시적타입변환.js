




var x = '30', y = '40';
var result = x + y;
var result = Number(x) + Number(y);
console.log(result);  

//parseInt 문자를 숫자로 바꿀 때 정수로 바꾼다. 소수점 이하는 버린다.
//parseDouble을 사용하면 소수점을 지킬 수 있음.
var result2 = parseInt(x) + parseInt(y);
console.log(result2); 

var result3 = +x + +y; 
console.log(result3);  

var m = 10 + 20;
console.log(m);  


//var f = false;
var f = '' + false;
console.log('======================');

console.log(Boolean('hellow'));
console.log(Boolean(null));
console.log(!!999); 
console.log(!!undefined); 
//! 논리를 반전시켜라 true 를 false로 false를 true로
console.log(!999); 



// 회원 로그인 여부 확인
function isLogin() {
  // const token = window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
  // return token !== null;

  return !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
}

const isLogin = () => !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');


























