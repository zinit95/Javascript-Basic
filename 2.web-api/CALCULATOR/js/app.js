//console.log($userInput);
//실행코드 (함수 호출, 이벤트등록,,, 핸들러정의)



//이벤트 핸들러 바인딩
$addBtn.addEventListener('click', e =>{
  //console.log('+ 클릭');
  //연산처리함수
  calculate('+');
  
});
$subtractBtn.addEventListener('click', e =>{
  //console.log('- 클릭');
  calculate('-');

});
$multiplyBtn.addEventListener('click', e =>{
  //console.log('x 클릭');
  calculate('*');

});
$divideBtn.addEventListener('click', e =>{
  //console.log('/ 클릭');
  calculate('/');

});




