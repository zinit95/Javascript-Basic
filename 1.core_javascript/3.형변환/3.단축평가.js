
console.log('========== && ============');
//둘다 참일 떄 참 오른쪽이랑 왼쪽이랑 같아야 됨
true && true;   //true
true && false;  //false
false && true;  //false
false && false; //false


console.log('=========== || ===========');
//왼쪽이 true면 오른쪽꺼는 볼 필요 없다.
true || true;   //true
true || false;  //true
false || true;  //true
false || false; //false



console.log('=========== OR 연산 : 첫번째 truthy를 반환 ===========');
//OR 연산 : 첫번째 truthy를 반환
//왼쪽이 true면 오른쪽꺼는 볼 필요 없다.
console.log('hello' || 'bye'); //'hello' true 여서 hello 출력
console.log(null || '앙뇽');

console.log('=========== AND 연산 : 첫번째 falsy를 반환 ===========');
//AND 연산 : 첫번째 falsy를 반환
// 첫번째가 true 니깐 오른쪽꺼도 본다
console.log('메롱' && '즐~~~');
// 첫번째가 0 false 니깐 오른쪽꺼도 보지도 않는다
console.log(0 && '룰루랄라');


if(조건이){
  console.log('블라블라블라~~~');
}

조건 && console.log('블라블라블라~~~');



/*
쿠폰당첨여부 && sendCoupon();

!쿠폰당첨여부 && sendMessage();
*/

