


var pets = ['멍멍이','냐옹이','짹쨱이'];
console.log(pets); //['멍멍이', '냐옹이', '짹쨱이']

//push(): 배열 맨 끝에 데이터 추가
pets.push('징징이');
console.log(pets); //['멍멍이', '냐옹이', '짹쨱이', '징징이']
pets.push('어흥이');
console.log(pets); //['멍멍이', '냐옹이', '짹쨱이', '징징이', '어흥이']
pets.push('거부기','닭둘기','팬더쓰');
console.log(pets); //['멍멍이', '냐옹이', '짹쨱이', '징징이', '어흥이', '거부기', '닭둘기', '팬더쓰']

//pop(): 배열 맨 끝 데이터 삭제
pets.pop();
//'팬더쓰' 삭제 됨
console.log(pets);//['멍멍이', '냐옹이', '짹쨱이', '징징이', '어흥이', '거부기', '닭둘기']
//아래 적은 '어흥이', '거부기', '닭둘기 배열이 삭제 됨
pets.pop( '어흥이', '거부기', '닭둘기');
console.log(pets);//['멍멍이', '냐옹이', '짹쨱이', '징징이', '어흥이', '거부기']

var mupet1 = pets.pop();
pets.pop();
var mupet2 = pets.pop();
pets.pop();
console.log(pets);
console.log(mupet1);
console.log(mupet2);

//shift() : 배열의 맨 첫 데이터 삭제
//unshift() : 배열의 맨 첫번째에 추가

pets.shift();//맨 앞 멍멍이 삭제
console.log(pets);

pets.unshift('뽈뽈이','빨빨이','띨띨이'); // 맨 앞에 ('뽈뽈이','빨빨이','띨띨이') 추가
console.log(pets);




