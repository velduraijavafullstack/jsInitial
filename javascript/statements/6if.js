// let val="Veldurai"
// let val1;
// if(val){
//   val1 =`My Name is ${val}`
// }
// else if (condition) {
  
// } else {
  
// }{
//   val1 = "Sorry"
// }
// console.log(val1);

let score=101;
let grade;

if(score>90 && score<=100){
  grade = "S";
}
else if(score >= 80 && score<90 ){
  grade = "A";
}
else if(score >= 70 && score<80){
grade = "B";
}
else if(score >= 60 && score<70) {
grade = "D";
}
else if(score>=50 && score < 60){
 grade = "E";
}
else if(score<50) {
  grade = "RA";
}
else{
  grade = "Error";
}

console.log(grade);