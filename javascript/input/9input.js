let user=confirm("Hello");
console.log(user);

let user1=alert("Hello");
console.log(user);

let user2=prompt("enter name");
console.log(user);
// null colloxing
let user3=prompt("enter your name");
if(user3.length){
console.log(user ?? "you didn't enter your name");
}
else{
  console.log(user ?? "you didn't enter your name");

}
console.log(user3.trim().length);