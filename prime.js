let N=13;

    count=0;
  for(i=1;i<=N;i++){
    if(N%i===0){
      count++;
    }
  }
    if(count===2){
      console.log("Prime");
    }
    else {
      console.log("Not Prime");
    }
  
  