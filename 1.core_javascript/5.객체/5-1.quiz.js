/*
var userInfo = {
  userList: [{
          account: 'kim1234',
          password: 'kkk1234',
          username: '김두한'
      },
      {
          account: 'park9876',
          password: 'ppp9999',
          username: '박찬호'
      },
      {
          account: 'hong7766',
          password: 'hhh1234',
          username: '홍길동'
      },
  ]
};
*/

/*
Q. 회원의 아이디정보와 비밀번호 정보가 들어있는 객체 user가 있습니다. 
   아래 요구사항에 맞는 프로그램을 작성하고 브라우저에서 테스트하세요.
    var user = {
        kim1234:'kkk1234',
        lee4567:'lll4567',
        park9876:'ppp9876'
    }
- 요구사항
1. 사용자에게 아이디를 입력받으세요.
2. 입력된 아이디가 객체에 존재하는 key가 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 아이디가 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "로그인 성공"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.

*/

var userInfo = {
  userList: [
    {
      account: "aaa",
      password: "111",
      username: "김예진",
    },
    {
      account: "bbb",
      password: "222",
      username: "김건우",
    },
    {
      account: "ccc",
      password: "333",
      username: "박정민",
    },
  ],
};

//1. 사용자에게 아이디를 입력받으세요.
var userName = prompt(`아이디를 입력하세요.`);
// 2. 입력된 아이디가 객체에 존재하는 key가 아니라면
//    "존재하지 않는 회원입니다"를 출력하세요.
for (var id = 0; id < userInfo.userList.length; id++) {
  //console.log(userInfo.userList[id].account);
  if (userName === userInfo.userList[id].account) {
    var pwInt = prompt(`비번 적으라`);
    if (pwInt === userInfo.userList[id].password) {
      alert(`로그인 성공`);
      break;
    } else {
      alert(`비밀번호 틀림 다시 적어`);
    }
  }
}
// if (위에 포문에서 이프에 한번도 안걸렸다면){
if (userName !== userInfo.userList[id].account) {
  alert(`존재하지 않는 회원입니다`);
}

// for(var i in userInfo.userList){
//     if(userName === userInfo.userList[1].account ){
//         alert(`존재하는 회원 `);
//     }else{
//         alert(`존재하지 않는 회원 xxx`);
//     }
// }
