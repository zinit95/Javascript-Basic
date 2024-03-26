/* 
console.log(`김철수님 안녕하세요 방가방가!!`);
console.log(`오늘도 즐거운 하루 되세용~`);
console.log(`홍길동님 안녕하세요 hello!!`);
console.log(`오늘도 즐거운 하루 되세용~`);
console.log(`김수한무님 안녕하세요 방가방가!!`);
console.log(`오늘도 즐거운 하루 되세용~`);
*/

//함수 정의(만든다)
function sayHello(userName){
  console.log(`${userName}님 안녕하세요 하이루!!`);
  console.log(`오늘도 즐거운 하루 되세용~`);
}

//함수 호출(사용한다) 함수call
sayHello('김예진');
fakeLine();
sayHello('김건우');

// 라인만들기
function fakeLine(){
  console.log('============================================');
}
fakeLine();


//나으 프로그램에서는 원의 넓이를 자주 구함
const PI = 3.14159265;

//반지름이 r인 원의 넓이를 구하는 함수정희
function carculator(r){
  return PI * r **2;
}


//반지금이 5인 원의 넓이
var circle1 = carculator(5);
console.log(circle1);

//반지금이 17인 원의 넓이
var circle2 = carculator(17);
console.log(circle2);

//변수 이름은 명사 함수이름은 동사 
//예) 게시글을 삭제하는 함수 
function removeBoardArticle(){
  //실행할 코드 작성
}













