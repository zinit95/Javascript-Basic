console.log('menu-open.js 로딩함');

const $menuOpen = document.querySelector('.menu-open');
const $gnb = document.querySelector('header .gnb');
const $close = document.querySelector('.close');

// $menuOpen.addEventListener('click',() =>{
//   //alert('클릭');
//   $gnb.style.right = '0';
// });

// $close.addEventListener('click',() =>{
//   $gnb.style.right = '-100%';
// });


$menuOpen.addEventListener('click',() =>{
  //alert('클릭');
  $gnb.style.right = '0';
});

$close.addEventListener('click',() =>{
  $gnb.style.right = '-100%';
});




