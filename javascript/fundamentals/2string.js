const myvar="Mathamatics";

console.log(myvar);
console.log(myvar.length);
// Return the cherecter at the specfied index
console.log(myvar.charAt(1));
// where start the character or string -string position
console.log(myvar.indexOf("at"));
console.log(myvar.lastIndexOf("at"));
// slice the string at the index
console.log(myvar.slice(3,9));

console.log(myvar.toUpperCase());
console.log(myvar.toLowerCase());
// boolean output
console.log(myvar.includes("ma"));
console.log(myvar.split("m"));
console.log(myvar.substr());

// reverse string
const str="i am vel"
let reverse="";
for(i=str.length-1;i>=0;i--)
{
reverse += str[i];
}
console.log(str.length);
console.log(reverse);