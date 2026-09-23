const Twitter ={
    username: "0._anu._0",
    likes : "230",
    content : "coding",
    tags: "mayank,satyam,neeraj",
    repost : "om,pradeep,dishant",
};
console.log(Twitter);


           //guessing game 
const  max = prompt("Enter you number");
const random =  Math.floor(Math.random()*max)+1;
  let guess = prompt("Enter your guess");
while(true){
    if(guess=="quit"){
      console.log("user quit");
      break;
  }
   if(guess==random){
    console.log("you guess is right.congrats! random number was", random);
    break;
  } else if(guess<random){   
   guess = prompt(" hint : your guess is to small.please try again");
  } else{
   guess = prompt("hint : your guess is to big.please try again");
  }
 
}
  