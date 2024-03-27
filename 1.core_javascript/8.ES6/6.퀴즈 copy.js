const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "서울",
    hobbys: ["수영", "축구", "테니스"],
  },
  {
    account: "banana",
    userName: "빠나나",
    job: "과일",
    address: "서울",
    hobbys: ["푸드파이팅", "테니스"],
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: "경기",
    hobbys: ["족구", "축구", "테니스", "영화감상"],
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbys: ["독서", "테니스"],
  },
];
//console.log(userList.length);

//회원정보에서 회원들의 이름들만 다 추출해서 배열에 담아줘
console.log('=========================');
/*
function map(){
  const flliteredArray = []; //필터링 회원들을 다시 담을 배열
  for(const names of userList){
    flliteredArray.push(names.userName);
  }
  console.log(flliteredArray);
}
*/

//콜백을 활용하여 회원정보에서 회원들의 이름들만 다 추출해서 배열에 담아줘
function map(user){
  const flliteredArray1 = []; //필터링 회원들을 다시 담을 배열
  for(const names of userList){
    if(user(names)){ 
      flliteredArray1.push(names);
    }
    return map;
  }
}
//const nameList = map(user => user.userName);
const nameList = map(function(names){
  return true;
})
console.log(nameList);











//회원정보에서 회원의 주소들만 다 추철해서 배열에 담아줘
const addressList = map(user => user.address);
console.log(addressList);






//회원의 첫번째 치미들만 다 추철해줘
const firstHobbyList = map(user => user.hobbys);
console.log(firstHobbyList);