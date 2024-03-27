

const NOT_FOUBD = -1
//배열안에 특정 요소의 인덱스를 찾아 반환하는 함수
function myIndexOf(array, searchElement){
  for(var i = 0; i < array.length; i++){
    if(searchElement === array[i]){
      return i;
    }
  }
  //return -1;
  return NOT_FOUBD;
}
var foods = ['족발', '피자', '파스타', '깅치찌개'];

var idx = myIndexOf(foods, '깅치찌개');
console.log(idx);


function myIncludes(array, searchElement){
  for(var i = 0; i < array.length; i++){
    if(searchElement === array[i]){
      return true;
    }
  }
  return false;
}

var flag = myIncludes (foods, '족발');
console.log(flag);



function myIncludes2(array, searchElement){
  
  // var idx2 = myIndexOf(array, searchElement);
  // return idx2 !== -1;

  var idx2 = myIndexOf(array, searchElement);
  return myIndexOf(array, searchElement) !== NOT_FOUBD;
}
