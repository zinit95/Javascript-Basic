








console.log('======================');

for(var i = 1; i < 50; i++){
  console.log(i);
  if(i > 10){
    break;
  }
}



console.log('======================');

for(var i = 0; i < 3; i++){
  for(var x = 0; x < 2; x++){
    if( i === x ){
      break;
    }
    console.log(`${i},${x}`);
  }
}
















