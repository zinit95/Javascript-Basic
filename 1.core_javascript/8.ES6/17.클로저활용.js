
/*
const increase = (() => {
  let conut = 0;
  return () => ++conut;
})();

const decrease = (() => {
  let conut = 0;
  return () => --conut;
})();

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());

console.log(decrease());
console.log(decrease());
*/


const countClosure = () => {
  let conut = 0;
  const increase = () => ++conut;
  const decrease = () => --conut;
  return{
    increase : increase,
    decrease : decrease,
  };
}

const {increase, decrease} = countClosure();
//console.log(typeof conut);

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());

console.log(decrease());
console.log(decrease());






