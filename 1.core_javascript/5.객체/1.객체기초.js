

console.log('=========== 1. 객체 생성 ===========');
// 1. 객체 생성
// 우리 집 강아지 정보 저장
var name = '뽀삐';
var kind = '진돗개';
var age = 3;
var injection = true;
var favorite = ['산책', '간식'];
var bark = () => console.log('왈왈!');

var dog = [
  '뽀삐',
  '진돗개',
  3,
  true,
  ['산책', '간식'],
  () => console.log('왈왈!'),
];

var dog = {
  name: '뽀삐',
  kind: '진돗개',
  age: 3,
  injection: true,
  favorite: ['산책', '간식'],
  bark: () => console.log('왈왈!'),
  hate: null,
};
console.log(dog.name);
console.log(dog.favorite);


// 우리 집 고양이 정보 저장
var cat = {
  kind: '코숏',
  favorite: ['낮잠', '방 어지르기'],
  name: '콩순이',
  age: 2,
  injection: true,
  hate: {},
  //for wating : 33  //키에 띄어쓰기 하지마라
  // 33 : 33 //안됨 쓸 수 업서
};
console.log(cat.name);
console.log(cat.favorite);
console.log(cat.kind);


var 게시판글 = {
  글번호 : 11,
  작성자 : {
    계정명 : 'abc',
    닉네임 : '깜찍이',
    가입일자 : '1995-03-23'
  },
  글내용 : '울랄랄랄라~~~~~~',
  작성일자 : '2024-03-23'
}


console.log('=========2. 객체에 저장된 데이터 참조=============');
//2. 객체에 저장된 데이터 참조 (조회) 하나를 찝어서 가져오는거
console.log(`${dog.age} 살`);
console.log(cat.injection);
//favorite은 배열이라서 [1] 인덱스 번호 사용가능
console.log(`고양이가 좋아하는것은? : ${cat.favorite[1]}`);


console.log('=========3. 데이터타입 =============');
//3. 데이터 타입 : 어떤 데이터가 할 수 있는 일을 정의
dog.age++   //dog.age가 숫자 타입이기 때문에 가능하다 
!dog.injection  //논리타입
//dog.kind.push(`메롱`); // kind는 배열이 아니기때문에 push 사용할수xxxxx
dog.favorite.push(`메롱`); // favorite이 배열이기때문에 push 할수잇다
dog.favorite.splice(0,1); // favorite이 배열이기때문에 splice 할수잇다


dog.favorite.splice(1,1);
dog.favorite.reverse();
console.log(dog.favorite);


console.log('========== 객체를 참조하는 두번째 방법 ============');
//객체를 참조하는 두번째 방법
var key = 'name';
console.log(dog.name);
console.log(` dog['name'] :  ${dog['name']}`); // 벨류에 따옴표 감싸기
console.log(dog[key]); 
console.log(dog[name]); //undefined


console.log('========== 프로퍼티 수정 (기존에 있는 key로 접근) ============');
//프로퍼티 수정 (기존에 있는 key로 접근)
dog.age = 4;
cat.favorite[1] = '실뭉치';
console.log(dog);
console.log(cat);


console.log('========== 프로퍼티 동적 추가 (기존에 없!!는!! key로 접근)============');
//프로퍼티 동적 추가 (기존에 없!!는!! key로 접근)
cat.friend = '철수';
console.log(cat);


console.log('========== 프로퍼티 삭제 ============');
//프로퍼티 삭제
delete cat.hate;
delete cat.friend;
console.log(cat);
