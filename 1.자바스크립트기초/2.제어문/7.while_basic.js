




console.log('===========while 1===========');

var n = 10;
while(n >= 0){
  console.log(`${n}!!`);
  //n--;
  n -= 1;
}//아래있는 코드가 실행하는 순간 while문까지 다시 올라감

/* 

회차      n
===========
 1       10
 2        9
 3        8
 4        7
 5        6
 6        5
 7        4
 8        3
 9        2
10        1
11        0

*/


console.log('===========while 2===========');

var begin = 10, end = 0, step = 1;
var n1 = begin;
while(n1 >= end){
  console.log(`${n1}!!`);
  //n--;
  n1 -= step;
}



console.log('===========while 3===========');

var n2 =1;
while(n2 <= 10){
  console.log(`2 x ${n2} = ${2 * n2}`);
  n2++;
}

console.log('======================');

var level = 8;
var n3 =1;
while(n3 <= 10){
  console.log(`${level} x ${n3} = ${level * n3}`);
  n3++;
}



console.log('=========== 10 ~ 34까지의 정수를 1씩 증가하면서 출력 ===========');
//10 ~ 34까지의 정수를 1씩 증가하면서 출력
var m = 10;
/*
증가하는 방향
m <= 34
감소하는 방향
m >= 34
*/
while(m <= 34){
  console.log(m);
  m++;
}


console.log('=========== 10 ~ 34까지의 정수를 홀수만 출력 ===========');
//10 ~ 34까지의 정수를 홀수만 출력
var m2 = 10;
while(m2 <= 34){
  if(m2 % 2 === 1){
    console.log(m2);
  }
  m2++
}



console.log('======================');
// 1~10까지의 누적합

var total = 0;
var i = 1;
// i = 1 , total = 0
while(i <= 10){
  total += i;
  i++;
}
console.log(total);





