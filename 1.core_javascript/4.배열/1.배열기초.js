



//var food1 = '짬뽕 , 탕수욕 , 양장피';
var food1 = '짬뽕';
var food2 = '탕수욕';
var food3 = '양장피';
var all = `${food1},${food2},${food3}`;

var arr = [10,20,30,40];
console.log(typeof arr);  //object


console.log(arr[0]);//10
console.log(arr[1]);//20
console.log(arr[2]);//30
console.log(arr[3]);//40

console.log(arr[2]**2); //900 
console.log(arr[2] = arr[2]**2); //배열값 갱신하라믄


arr[1] = 999;
arr[3]++;
console.log(arr); //배열값 변경


console.log('===========//배열 데이트 수 확인===========');
//배열 데이트 수 확인
console.log(arr.length);

console.log(`첫번째 데이터 ${arr[0]}`);
console.log(`마지막 데이터 ${arr[arr.length - 1 ]}`);


console.log('===========배열데이터 순회 (전체참조 : travis)===========');
//배열데이터 순회 (전체참조 : travis)
for(var i = 0; i < arr.length; i++){  
  console.log(arr[i]);
}

console.log('===========for ~ of 반복문 (배열 전용 반복문)===========');
//for ~ of 반복문 (배열 전용 반복문)
var weedDays = ['월','화','수','목','금','토','일'];

for(var i = 0; i < weedDays.length; i++){
  console.log(`${weedDays[i]}요일!!!`);
}

//위에랑 아래 코드 결과값이 똑같다.
//for(변수를 만든다 -> of -> 배열)
for(var day of weedDays){
  console.log(`${day}요일~~~`);
}
//for(var n of [0,1,2,3,4,5,6,7]) of 뒤에 배열이 와야 된다.
for(var n of [0,1,2,3,4,5,6,7]){
  console.log(`${n}요일`);
}


console.log('=========== 배열 생성 관례 : 이름 복수형, -list 어미 ===========');
//배열 생성 관례 : 이름 복수형, -list 어미 
var fruits = ['자몽','딸기','오렌지'];
var fruits1 = ['자몽','딸기','오렌지', ];
var fruitList = ['자몽','딸기','오렌지'];
var fruitArray = ['자몽','딸기','오렌지'];

console.log(fruits1.length); //뒤에 , 적어도 값이 들어간다