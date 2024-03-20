
console.log('●●●●●●●●●조건연산자●●●●●●●●●');


console.log('==========삼항연산자 코드============');
var money = 3000;
var food = (money >= 8000) ? '마파두부밥' : '짜장면';
console.log(`선택한 음식 : ${food}`);



console.log('==========if문 코드============');
var food2;
var money2 = 10000;
if(money2 >= 8000){
  food2 = '쫄면';
}else{
  food2 = '김밥';
}
console.log(`선택한 음식 : ${food2}`);



console.log('==========선생님 코드============');
var money3 = 10000;

var food3 = (money3 >= 8000) ? '돈까스' : '라면';

var food3;
if (money3 >= 8000) {
  food3 = '돈까스';
} else {
  food3 = '라면';
}
console.log(`선택한 음식: ${food3}`);



var money4 = 9000;
var food4 = (money4 >= 8000) ? '돈까스' 
: (money4 >= 5000) ? '쫄면' 
: (money4 >= 3000) ? '라면' : '굶어';

var food4;
if (money4 >= 8000) {
  food4 = '돈까스';
} else if (money4 >= 5000) {
  food4 = '쫄면';
} else if (money4 >= 3000) {
  food4 = '라면';
} else {
  food4 = '굶어';
}




