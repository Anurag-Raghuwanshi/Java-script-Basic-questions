      // question no = 1;
// function Avearge(a,b,c){
//       let sum = a+b+c;
//       let average = sum/3;
//       console.log(average);
// }
//   Avearge(14,13,10);
 
       //question no = 2;
// function printTable(n){ 
//     for(let i=1; i<=10; i++){
//         console.log(i*n);
//     }
// }
//   printTable(3);
 

          //question no = 3;
// function sum(n){
//       let result = 0;
//       for(let i=1; i<=n; i++){
//         result = result + i;
//         }
//         return result;
// }

       //question no = 4;
// let str = ["A", "n", "u","r","a","g"];
// function concat(str){
//       let result = "" ;
//   for(let i=0; i<str.length; i++){
//      result+=str[i];
//   }
//   return result;
// } 

        // understanding for Scope
// let greet = "hello"; //Global Scope
// function outergreet(){
//        let greet = "namaste"; // function Scope
//        console.log(greet);
// function innergreet(){
//        console.log(greet);
//  }
// }
// outergreet();
// console.log(greet);

         //Higher order fuction(Returns)
// function oddOrEvenTest(request){
//     if(request == "odd"){
//        let odd = function(n){
//              console.log(!(n%2==0));       
//        }
//        return odd;
//     }else if(request=="even"){
//        let even=  function(n){
//              console.log((n%2==0)); 
//        }
//        return even;
//     }else{
//            console.log("Wrong request"); 
//     }
// }
// let request = "odd";
// let checker = oddOrEvenTest(request);
// checker(5);
 
              //Methods 
// const calculator = {
//        add : function(a,b){
//               return a+b;
//        },
//        sub : function(a,b){
//               return a-b;
//        },
//        mul : function(a,b){
//               return a*b;
//        }

// };
// calculator.add(3,4);

          // question no = 5
// let arr = [1,10,15,27,33];
// function checklargernum(arr,num){ 
//        for(let i=0; i<arr.length; i++){
//           if(num<arr[i]){
//            console.log(arr[i]);
//           }
//        }
// };
// checklargernum(arr,20);

         //remove duplicates in string
// let str = "abcdabcdefgggh";
//  function removedupl(str){
//      let ans = " ";
//      for(let i=0; i<str.length; i++){
//        let currchar = str[i];
//        if(ans.indexOf(currchar) == -1){
//                ans+=currchar;
//        }
//     }
//     return ans;
// }
// removedupl(str);

        //find longest string 
// let country = ["Australia", "Germany", "United States of America"];
// function longestName(country) {
// let ansIdx = 0;
// for (let i = 0; i < country.length; i++) {
// let ansLen = country[ansIdx].length;
// let currLen = country[i].length;
// if (currLen > ansLen) {
// ansIdx = i;
// }
// }
// return country[ansIdx];
// }
// longestName(country);

        //find vowels
// let str = "apnacolllege";
// function countVowels(str){ 
//    let count = 0;
// for(let i =0; i<str.length; i++){
//        if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u"){
//               count++;
//     }
// }
// return count;
// };
// countVowels(str);

          //generate a random number
// let start = 100;
// let end = 200;
// function generateRndmNum(start,end){
//        let diff = (end-start)+1;
//        let result = Math.floor(Math.random()*diff+start);
//        console.log(result);
// };
// generateRndmNum(start,end);