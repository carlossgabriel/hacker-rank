function staircase(n){
  for(let i=1;i<=n;i++){
    if(i!=n){
    console.log(" ".repeat(n-1-i),"#".repeat(i))
    }
    if(i==n){
      console.log("#".repeat(n))
    }
  }
}

staircase(8);
