let printTriangle = (x) => {
    for(let i=x; i>=1; i--) {
    let str = ""
    for(let j=1; j<=i; j++) {
        str += j;
    }
    console.log(str);
  }
}
printTriangle(5)
