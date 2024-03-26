
var phone = {
  company : '삼성',
  color : '펄 화이트',
  model : '갤럭시 S24 Ultra',
  price : 1200000
};

console.log('=========== or ~ in : 값이 아닌 키가 반복된다. ===========');
//for ~ in : 값이 아닌 키가 반복된다.
for (var data in phone){
  console.log(data); //키가 반복되고 있다 company color model price들은 스트링데이터다
  //console.log(phone.data); // undefined
  console.log(typeof data); // string 
  console.log(`대괄호로 접근하기 phone[data] : ${phone[data]}`);
  console.log(`스트링 데이터는 이렇게 접근 phone['model'] ${phone['model']}`);
}


console.log('=========== 객체 프로퍼티 유무 확인  ===========');
//객체 프로퍼티 유무 확인 
// phone에 새로운 프로퍼티 추가하고 싶음
console.log('memory' in phone); //false memory라는 key가 phone 안에 있나요 
console.log('model' in phone); //true
phone.memory = '32GB';

//phone 안에 memory가 없으면 추가해주세요 괄호로 감싼다 !()
if(!('memory' in phone)){
  phone.memory = '32GB';
}
console.log(phone); //메모리 추가 됨

//변수를 이용하여 key 추가 방법
var newkey = 'memory';
if(!('newkey' in phone)){
  phone[newkey] = '32GB';
}
console.log(phone);




































