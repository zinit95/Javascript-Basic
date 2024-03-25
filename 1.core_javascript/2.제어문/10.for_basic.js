

//begin end step

//실행순서 :  1 -> 2 -> 3-> 4 -> 2 -> 3 -> 4 -> 2 -> 3 -> 4 이렇게 반복
/*
var i = 1; // 1.begin
while(i <= 5){ // 2.end
  console.log('hellow'); // 3.실행코드 execute
  i++; //4. step
}
*/


// var i = 1; -> i <= 5; -> console.log('hellow'); -> i++
/*
for(var i = 1; i <= 5; i++){
  console.log('hellow');
}
*/


var total = 0;
for(var i = 1;  i <= 10; i++){  
  total += i;
}
console.log(total);


//횟수 지정 반복문

/*
for(var i = 1; i <= 5; i++){
  console.log('zinit');
}
*/

//위 아래 코드가 같으나 프로그램에서는 아래 코드를 선호한다.
for(var i = 0; i < 5; i++){
  console.log('zinit');
}



