







var num = 27;
console.log(typeof num); //number
console.log(num / 5); //5.4
console.log(num % 5); // 2


var foodName1 = num; //[ 위에 var num 값이 27이니깐 num 값이 foodName에 할당함]
console.log(foodName1); //27 

console.log('===================================');

var foodName = '양장피'; //자바스크립트에서 문자열 감쌀 땐 '' 로 감쌈 java는 ""
//백틱 기능
var foodName2 = `마파두부`;
var element = '<nav>\n\t<ul>\n\t\t<li>딸기</li>\n\t</ul>\n</nav>';
console.log(element);

console.log('===================================');

var elem = `
  <nav>
    <ul>
      <li>메롱</li>
    </ul>
  <nav>   
`;
console.log(elem);


console.log('===================================');

var month = 3;
var day = 23;
var anni = 'zinit 생일';
var resultZinit = month + '월 ' + day + '일은 ' + anni + '입니다';
console.log(resultZinit);


console.log('=================백틱을 사용해 변수 출력==================');

//백틱을 사용해 변수 출력 
var sentence2 = `${month}월 ${day}일은 ${anni}입니다.`;
console.log(sentence2);


console.log('=================boolean : 논리 ==================');
//boolean : 논리 
var userAge = 30;
var flag = userAge > 19;
console.log(typeof flag); //boolean
console.log(flag); //true


console.log('===================================');
var TRUE = true;


console.log('================undefind , null===================');
//undefind , null
//undefind : 아직 값이 없는 상태 (고의로 값을 안넣은게 아님)
//null : 일부러 값을 없앤 상태 (고의로 값을 없앤 상태)
var petName;
console.log(petName); //undefined

var myHobby = '산책'; 
    myHobby = 'null'; 
console.log(myHobby); //null

function buyNewcar(money){
  if(money > 5000){
    return '그랜저';
  }else if(money > 3000){
    return '아반떼';
  }else if(money <= 0){
    return null;
  }
}









































