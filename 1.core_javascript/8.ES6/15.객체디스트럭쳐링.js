



const employee = {
  empName : '뽀로로',
  age : 10,
  hireDate: '2020-01-30',
  bireDate: '2015-12-31'
};

// const name = employee.empName;
// const hire = employee.hireDate;

const {empName, hireDate} = employee;

console.log(empName, hireDate);

/*
//방법 1
function foo(employee){
  const {empName, age} = employee;
  console.log(`내 이름은 ${empName}`);
  console.log(`내 나이는 ${age}`);
}
//방법 2

function foo({empName, age}){
  console.log(`내 이름은 ${employee.empName}`);
  console.log(`내 나이는 ${employee.age}`);
}
*/

const age = 10;
const {age: empAge, bireDate} = employee;
console.log(empAge)


const divStyle = {
  'font- size' : '18px',
  'background-color' : 'red'
}
const {'font- size' : fontSize,'background-color' : backgroundColor } = divStyle;
console.log(fontSize);
console.log(backgroundColor);


const dog = {
  kind : '마티즈',
  name : '해피',
  age : 3,
  injection : false
}
const {kind, age : petAge, ...rest} = dog;
console.log(kind);
console.log(petAge);
console.log(rest);


//객체 안전복사 
//방법1
const copyDog = { ...dog };
copyDog.age = 10;
console.log(dog);     //{ kind: '마티즈', name: '해피', age: 3, injection: false }
console.log(copyDog); //{ kind: '마티즈', name: '해피', age: 10, injection: false }

//방법2
const copyDog2 = {
  ...dog, //dog 복사해 옴
  age : 20,  //age만 수정 됨
  favorit : ['산책'] //favorit 추가
}
console.log(copyDog2);















