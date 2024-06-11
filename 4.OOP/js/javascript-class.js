

// 객체의 설계도 class
class Pet {

  //생성자를 통해 필드를 선언, 자바스크립트의 생성자 : constructor

  // constructor(){
  //   this.name = '해피';
  //   this.age = 100;
  // }

  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  //메서드 선언, function 을 떼면 된다 
  introduce() {
    console.log(`내 이름은 ${this.name} 이고, 나이는 ${this.age} 살 이다.`)
  }
}

//상속 
class Dog extends Pet{
  constructor(name, age, hobby){
    super(name, age)
    this.hobby = hobby;
  }
}
class Cat extends Pet{
  constructor(name, age, sleep){
    super(name, age)
    this.hobby = sleep;
  }
}


// const dog = new Pet(); //객체 생성 
//const dog = new Pet('처키', 10); //객체 생성 
const dog = new Dog('하쿠', 1); //객체 생성 
console.log(dog);

// const cat = new Pet(); //객체 생성 
//const cat = new Pet('빵구', 5); //객체 생성 
const cat = new Cat('나비', 7); //객체 생성 
console.log(cat);

console.log(dog == cat); //false

dog.introduce();
cat.introduce();





































