//비동기함수 setTimeout
//코를 순서대로 진행시키는게 아니라 시간차로 진행시킬 수 있게 함.

console.log("오늘 할일은 뭔가용?");
setTimeout(() => {
  console.log("빨리 집가서 진짜 잘래 졸려");
}, 3000);

setTimeout(() => {
  for (let i = 0; i < 3; i++) {
    console.log(`hello ${i}`);
  }
}, 2000); //밀리초 : 1/1000초

setTimeout(() => {
  for (let i = 0; i < 4; i++) {
    console.log(`bye ${i}`);
  }
}, 0);
