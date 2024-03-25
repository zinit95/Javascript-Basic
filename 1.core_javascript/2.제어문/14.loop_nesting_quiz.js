





/*
var n1 = prompt('한 변 1');
var n2 = prompt('한 변 1');
var star = '';

for(var i = 0; i < n1; i++){
  for(var j = 0; j < n2; j++){
    
    star += "*";
  }
  star += '\n';
} 
alert(star);
*/



//가로길이 , 세로길이
var width = +prompt('한 변 1');
var height = +prompt('한 변 2');

//사각형을 저장할 변수
var result = '';

for(var i = 0; i < width; i++){ //width 반복
  for(var j = 0; j < height; j++){ //height 반복
    
    result += " * ";
  }
  result += '\n';
} 
alert(result);







