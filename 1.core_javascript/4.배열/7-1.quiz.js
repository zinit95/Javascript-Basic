/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 수정할 멤버 이름과 새로운 이름을 입력받고 
  해당 멤버를 수정한 뒤 수정 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 
   다시 수정할 이름을 입력할 수 있도록 하세요.
4. 한 명의 멤버를 정확하게 수정할때까지 프로그램은 계속되어야 합니다.
*/

var bigbang = ['탑', '지디', '태양', '대성','패배'];

var modifyName = prompt(`수정할 멤버 이름을 작성하쇼 `);

while(true){
  if(bigbang.includes(modifyName)){
    var newName = prompt(`새로운 이름 작성 `);
    // var index = bigbang.indexOf(modifyName) ;
    // bigbang[index] = newName;
    bigbang[bigbang.indexOf(modifyName)] = newName;
    alert(`${modifyName}에서 ${newName}로 수정되었고 현재멤버는 ${bigbang}`);
    break;
  }else{
  
    alert(`배열에 없는 이름임`);
  }
}

///var newName = prompt(`새로운 이름 작성 `);





