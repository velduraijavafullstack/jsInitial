// Switch Statement
let player1 = ["rock","scissor","paper"]
let player2 = ["rock","scissor","paper"]
// let match1 = ((player1.charAt(Math.floor(Math.random())*player1.length-1))===(player2.charAt(Math.floor(Math.random())*player2.length-1)));
const match = (player1.length===player2.length)&&player1.every((value,index)=>value===player2[index]);

// console.log(match1);
switch(match)
{
  case true:
    //  console.log((player1.charAt((Math.floor(Math.random)*player1.length))===player.charAt((Math.floor(Math.random)*player.length))));
    
    console.log("Match Tie");
    
    break;
  case false:
    console.log("Second");
    break;
   default:
      console.log("No Match");
}