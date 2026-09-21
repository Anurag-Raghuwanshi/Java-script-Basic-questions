       //prnit odd number
// let n = prompt("Emter a number");
// for(let i = 0; i<=n ; i++){
//   if(i%2!=0){
//     console.log(i);
//   }
// }

//       //print even number 2 to 10
// let n = prompt("Emter a number");
// for(let i=2; i<=n; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//      //print multiplication table of 5
// let n = prompt("Enter a number of table");
// for(let i=1 ;i<=10; i++){
//    let m = n*i;
//    console.log(n + " " + "x" + " " + i + " "+ "="+ " " + m);
// }

//      //nested loops
// for(let i=1; i<=3;i++){
//     for(let j=1;j<=3;j++){
//         console.log(j)
//     }
// }

//       //guess favourite movie
// const favmovie = "avatar";
// let guess = prompt("guess my favourite movie");
// while ((guess != favmovie)) {
//     if(guess=="quit"){
//         console.log("you quit")
//         break;
//     }
//     guess = prompt("wrong guess. please try again");
// }
// if (guess === favmovie){
//     console.log("congrats you win");
// }
     
//      //loop with array
// let fruits = ['mango', 'orange','litchi','banana','grapes'];
// for(let i=0;i<fruits.length;i++){
//     console.log(i+ " " + fruits[i]);
// }

//       //nested loops with nested array
// let heroes = [["ironman","thor","spiderman"],["superman","flash","wonder-woman"]];
//     for(let i=0; i<heroes.length;i++){
//         console.log((i),heroes[i])
//     for(let j=0;j<heroes[i].length; j++){
//         console.log( j,heroes[i][j]);
//     }
// }

//       //nested loops with nested array = 2
// let student = [["aman",97],["anurag",98],["satyam",99]];
// for(let i=0; i<student.length; i++){
//     for(let j=0; j<student[i].length; j++){
//         console.log(student[i][j]);
//     }
// }

//        //for of loop in js
//  let fruits = ['mango','banana','orange','apple','litchi'];
// for(fruit of fruits){
//       console.log(fruit)
// }
 
//        //nested for of loop
// let heroes = [["ironmman","spiderman","thor"] ,["superman","wonder women","flash"]];
// for(list of heroes){
//     for(hero of list){
//       console.log(hero);
//     }
// }


//                         //to do app in js 
// let Todo = [];
// let Request = prompt("please enter your request")
// while (true) {
//     if (Request == "quit") {
//         console.log("quitting todo");
//         break;
//     } else if (Request == "list") {
//         console.log("-----------");
//         for (let i = 0; i < Todo.length; i++) {
//             console.log(i, Todo[i]);
//         }
//         console.log("-----------");
//     } else if (Request == "add") {
//         let task = prompt("please enter the task you want to add");
//         Todo.push(task);
//         console.log("task added");
//     } else if (Request == "delete") {
//         let indx = prompt("please enter the task index");
//         Todo.splice(indx, 1);
//         console.log("task deleted");
//     }else{
//         console.log("incorrect request")
//     }

//     Request = prompt("PLease enter your request");

// }