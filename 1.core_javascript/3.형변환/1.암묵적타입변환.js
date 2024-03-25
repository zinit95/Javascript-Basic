

//숫자가 문자로 변경됨
var n1 = 10;      //typeof = number
var n2 = '20';   //typeof = string;
console.log(n1+n2);  //1020


var n3 = n1 + '';
console.log(typeof n3);  //string


//문자가 숫자로 변경됨
var n4 = n2 - n1;
var n4 = n2 - n1 -5;  //10
var n4 = n2 - n1 -2; //8
var n4 = n2 - n1 -2 -'3'; //5
console.log(n4);


var n5 = n2 * n1;
console.log(n5);


var n6 = 'hello' * 3;
console.log(n6); //NaN : 숫자가 아니다. 


console.log('======================');

var n7 = +'99';
//true = 1; false = 0;
console.log(true + true);
console.log(true + false);
console.log(false + false);


console.log('======================');

falsy =0, '', null, undefined, NaN  //외워!!!

/*
if(true){
  console.log('hello-1');
}
*/
//★★★★★flase  0, '', null, undefined, NaN는 무조건 flase!!!!★★★★★
if(0) console.log('hello-1');
if('') console.log('hello-2');
if(null) console.log('hello-3');
if(undefined) console.log('hello-4');
if(NaN) console.log('hello-5');

/*
if(flase){
  console.log('hello-2');
}
*/

//★★★★★true 0, '', null, undefined, NaN는 제외한 모든것들은 true!!!!!!★★★★★
if(99) console.log('hello-6');
if(-87.876) console.log('hello-7');
if(`안뇨오오옹`) console.log('hello-8');
if(' ') console.log('hello-9'); //스페이스가 있어서 true
if([10, 20, 30]) console.log('hello-10');
if([]) console.log('hello-10');
if({kind : '개'}) console.log('hello-10');
if(function(){}) console.log('hello-10');


for(var i = 1; i <= 10; i++){
  if(i % 2 ){
    console.log(`${i}는 홀수입니다`);
  }else{
    console.log(`${i}는 짝수입니다`);
  }
}

var apple = 10;
if(apple > 0){
  console.log(`사과 있음`);
}else{
  console.log(`사과 없음`);
}

var n = 10;
var flag = n > 10;
//if(flag === flase){
//if(flag === true){
if(!flag){

}

/*
//트루임 
while('oijoiwejewijef'){

}
*/


















