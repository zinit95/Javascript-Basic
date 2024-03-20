
var result; //변수 선언
result = 10 + 20; // 값을 변수에 할당(대입)한다 " = " 은 같다가 아니라 우항에 있는 값을 좌항에 있는 값에 저장해라 라는 뜻
result * 3; // 90

var multiple = result * 3; //90
console.log(multiple);


 //변수 선언
var fruit;
//변수를 초기화하라 -> 값을 넣어라 (var 넣으면 안됨)
fruit = '자몽';
 //변수 출력 
console.log(fruit); //undefined

//변수를 선언하며 초기화 한다. 
var food = "회덮밥";
//변수 재할당 (변수 값을 할당(변경 및 대입 , var 넣으면 안됨) 
food = '참치덮밥'; //회덮밥 값이 사라지고 참치덮밥으로 덮어 씌이게 된다 , 값이 재할당 새롭게 저장된다.
console.log(food); //참치덮밥



//변수 이름 규칙
//var 7number;  ( X ) 변수 이름 앞에 숫자가 들어오면 안된다.
var number7; //가능
// var nuse name; 변수 이름에 띄어쓰기 안됨.
var current_login_user_phone_number; // snake case
var currentLoginUserPhoneNumber // camel case (js : 0) javascript에서 관례로 쓰고있다.


//같은 뜻이지만 3개 다 다른 변수이다. 각각의 독립된 저장소이다.
var apple;
var APPLE;
var Apple;

//var myPetName!!; ( X )특수문자 안됨.
var $myPetName; //사용 가능한 특수문자 $
var myPetName_; //사용 가능한 특수문자 _


//var for; ( X ) 예약어로 변수 이름으로 사용할 수 없다. xxxxxxxx
var For; //( O )
var LEt; //( O )




// 식별자: 데이터를 구분하기 위한 고유 이름(변수, 함수..)
// 1. 대소문자를 구분할 것!
var banana = '바나나';
var Banana = '뻐네너';
var BaNaNa = '버네이너으';

console.log(banana);
console.log(Banana);

//2. 숫자로 시작하거나 숫자만으로 만들면 안됨!
// var 800 = '메롱';
// var 70apple = '사과';
var number7 = 7;
var app99le = 99;

//3. 특수문자는 $, _ 외 사용불가
// var hi! = '안녕';
var $bye = '잘가';
var my_friend = '둘리';

//4. 띄어쓰기 불가능
// var user phone number = '01012344321';
var userphonenumber = '01099993333';

// naming convention : 이름 규칙
var user_phone_number = 1; // snake case (파이썬, SQL 선호)
var userPhoneNumber = 1;   // camel case (자바, 자바스크립트 선호)
var UserPhoneNumber = 1;   // pascal case (C계열)

//5. 키워드(예약어)는 이름으로 쓰지 말것!
// var var = 1;
// var if = 1;
// var break = 1;

// 식별자 이름은 구체적이고 명확하고 일관성있게 지을 것!
var a = '홍길동';   //  userName
var zzzz = 'abc1234@gmail.com';  // userEmail
var fzd = '남자'  // userGender

var money = 50000;

var myMoney = 1000;
const $orange = '#ffa808'; //const는 값을 바꿀 수 없다, 재할당이 불가능.
console.log($orange);

//$orange = '#000';  const는 값을 바꿀 수 없다, 재할당이 불가능.
//console.log($orange);



























