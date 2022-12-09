// Prime Problem


let count = 0
let num = 19
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    count++
  }
}
if(count==1){
  console.log("Prime Number")
} else{
  console.log("No")
}