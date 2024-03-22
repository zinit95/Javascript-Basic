



/*
var count = 0;
for(var i = 0; i < 3; i++){//3회 반복
  for(var j = 0; j < 2; j++){//2회 반복
    //console.log('zinit - ' + ++count);
    console.log(`${i}, ${j}`);
  }  
}
*/

//구구단 2단 출력

console.log('============111111==========');

var level = 8; //단수

for(var line = 1; line < 10; line++){
  console.log(`-> ${level} x ${line} = ${level * line}`);
  
}
console.log('===========2222222쌤===========');

// 구구단 2단
 // 단수
 for (var level = 2; level <= 9; level++) {
  console.log(`# 구구단 ${level}단`);
  for (var line = 1; line <= 9; line++) {
    console.log(`-> ${level} x ${line} = ${level * line}`);
  }
  console.log('======================');
}


console.log('===========zinit가 한거===========');

for(var num1 = 1; num1 < 10; num1++){
  for(var num2 = 1; num2 < 10; num2++){
    console.log(`${num1} x ${num2} = ${num1 * num2}`)
  }
}



var count = 0;
for (var i = 0; i < 3; i++) { // 3회 반복
  for (var j = 0; j < 2; j++) { // 2회 반복
    console.log('메롱' + ++count);
    // console.log(`${i}, ${j}`);
  }
  console.log('냠냠' + count);
}




