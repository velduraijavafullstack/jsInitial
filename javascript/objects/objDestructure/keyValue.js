// iteration 

// for in loop or iteration

const movie ={
  name      :"Mangatha",
  actor     : "Ajith",
  direcor   : "Venget",
  producer  : "raj"
};
console.log(Object.keys(movie)); //print keys
delete movie.producer //
console.log(Object.values(movie)); // print values 
console.log(movie); 
for(let obj in movie){   // for in loop
  
  console.log(`${obj}, it's  ${movie[obj]}`);
  // console.log(eT);
}

