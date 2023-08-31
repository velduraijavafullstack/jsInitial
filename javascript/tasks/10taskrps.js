let playgame = confirm("let play Rock,Scissor or Paper");
if(playgame){
  let playerchoice = prompt("lets play Rock,Scissor or Paper");
  if(playerchoice){
    let playOne = playerchoice.trim().toLowerCase();
    if(playOne==="rock"||
    playOne==="scissor"||
    playOne==="paper")
    {
      let computerChoice = Math.floor(Math.random()*3+1);
      let computer = computerChoice===1? "rock": computerChoice===2? "scissor" :"paper"

      // let result = playOne===computer? "Match Tie" :playOne==="rock"&&computer==="scissor"? "You Won the game" :playOne==="rock"&&computer==="paper"? "Computer Wins" :playOne==="scissor"&& computer==="rock"? "Computer Wins" :playOne==="scissor"&& computer==="paper"? "You Won the game": playOne==="paper"&&computer==="rock"? "You Won the game" : "Computer Wins";

      let result = playOne===computer? "Match Tie" :playOne==="paper"&&computer==="scissor"? `playOne:${playOne}\ncomputer: ${computer}\nComputer Win` 
      :playOne==="rock"&&computer==="paper"? `playOne:${playOne}\ncomputer: ${computer}\nComputer Win` 
      :playOne==="scissor"&& computer==="rock"? `playOne:${playOne}\ncomputer: ${computer}\nComputer Win`
       :`playOne:${playOne}\ncomputer: ${computer}\nYou Won The Game`
      
      alert(result);
       let playAgain = confirm("Play Again");
       playAgain ? location.reload(): alert("ok \n Thanks For Playing");

    }else{
      alert("you Didn't Enter Rock,Paper or Scissor")
      let playAgain = confirm("Play Again");
      playAgain ? location.reload(): alert("ok \n Thanks For Playing");
    }
    
  }
  else{
      alert("I guess you change your mind. \n Maybe next time")
  }
}else{
  alert("Ok, Maybe next time")
}





