

console.log('==========================================================');

// 화살표함수와 this
const dog = {
  name: '뽀삐',
  regularFn: function() {
    console.log('regular: ', this); //자기 자신의 객체 
  },
  arrowFn: () => {
    console.log('arrow: ', this); //window 객체 
  }
};

dog.regularFn();
dog.arrowFn();

console.log('==========================================================');


const cat = {
  name : '나비',
  introduce : function(){
    console.log(`introduce this`, this);

    setTimeout(function(){
      console.log(`setTimeout this`, this);
    },200);

    //화살표 함수의 this는 scope 체인 안의 this 를 가르킴
    setTimeout(() => {
      console.log(`setTimeout this`, this);
    },200);
  }
};
cat.introduce();

//실제 사용 예시 
$modal.addEventListener('click', function(e) {

  console.log(this); // this : $modal

  $ok.addEventListener('click', function(e) {
    console.log(this); // this : $ok
  });

  //옛날 방식 
  $ok.addEventListener('click', function(e) {
    console.log(this); // this : $modal
  }.bind($modal));

  //화살표 함수의 this는 scope 체인 안의 this 를 가르킴
  $cancel.addEventListener('click', (e) => {
    console.log(this); // this : $modal
  });

});



















