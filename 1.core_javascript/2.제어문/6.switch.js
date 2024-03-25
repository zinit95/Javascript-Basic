







//var season = '가을';
//var season = 'spring';
var season = prompt('선호하는 계절이 뭔디');

//switch(조건을 판별할 변수를 작성해야 됨 (비교식x, 문자값이나 숫자만 써야 됨))
switch(season){
  case '봄': case 'spring': case '1': 
    //console.log('봄에는 여의도 벚꽃축제');
    alert('봄에는 여의도 벚꽃축제');
    break;
  case '여름': case 'summer': case '2': 
    //console.log('여름에는 속초');
    alert('여름에는 속초');
    break;
  case '가을': case 'fall': case '3': 
    //console.log('가을에는 설악산');
    alert('가을에는 설악산');
    break;
  case '겨울': case 'winter': case '4': 
    //console.log('겨울에는 스키장');
    alert('겨울에는 스키장');
    break;
    default:
      alert('봄, 여름, 가을, 겨울 중 하나를 입력하라고');
}







































