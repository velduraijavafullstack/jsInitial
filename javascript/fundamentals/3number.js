const int=22;
const float=22.2;
const myvar="22.256778s3a"

console.log(int);
console.log(float);
console.log(myvar);  //String
console.log(Number(myvar)*3); //string convert number
console.log(Number("num")+3); //NaN - not a number
console.log(Number(true)+4); //true = 1

        //Number method
  console.log(Number.isInteger(24.1)); // Boolean output
  console.log(Number.parseFloat(myvar).toFixed(3));
  console.log(typeof float.toString());

        //Chaining
  console.log(parseFloat(myvar).toFixed(3).toString());

          //ISNAN

          Number.isNaN();
          isNaN();
          console.log(Number.isNaN("tf"));
          console.log(isNaN("tf"));