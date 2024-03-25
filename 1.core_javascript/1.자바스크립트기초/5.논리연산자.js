
console.log('●●●●●●●●●논리연산자●●●●●●●●●');

var t = true , f = false;

// and연산 : 논리곱 - &&  [ 둘 다 만족해야 true ] 
console.log('===========and연산 : 논리합 - &&  [ 둘 다 만족해야 true ] ===========');

console.log( t && t); //true
console.log( t && f); //false
console.log( f && t); //false
console.log( f && f); //false


// or연산 : 논리합 - ||  [ 둘 중에 하나라도 만족하면 true ]
console.log('==========or연산 : 논리곱 - ||  [ 둘 중에 하나라도 만족하면 true ]============');

console.log( t || t); //true
console.log( t || f); //true
console.log( f || t); //true
console.log( f || f); //false



// not연산 : 논리반전 - !
console.log('========== not연산 : 논리반전 - ! ============');

console.log(!t); //false


console.log('==========논리 연습============');
var money = 0;
if(!money){
  console.log('나는 그지다');
}else{
  console.log('나는 돈이 있다');
}

var money2 = 1000;
if(money){
  console.log('나는 그지다');
}else{
  console.log('나는 돈이 있다');
}












