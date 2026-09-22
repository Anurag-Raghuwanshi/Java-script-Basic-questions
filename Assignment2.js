     //question no = 1;
// let array = [1,2,3,4,5,6,2,3];
// let num = prompt("Please enter the number you want to delete from this array ");
// for(let i=0; i<array.length; i++){
//     if(num == array[i]){
//         array.splice(i,1);
//     } 
// }
// console.log(array);

     //question no = 2;
// let number = 2699883;
// let count = 0;
// let copy = number;
// while(copy>0){
//     count++;
//     copy = Math.floor(copy/10);
// }
//  console.log(count);
     
     //question no = 3;
//   let number = 287152;
//   let count = 0;
//   let copy = number;
//   while(copy>0){
//     digit = copy%10;
//     sum+=digit;
//     copy=  Math.floor(copy/10);
//   }   
//   console.log(sum);

     //Question no = 4;
// let numfact = prompt("Enter the number you want to given the factorial ");
// let fact=1 ;
// for(let i=1; i<=numfact; i++){
//      fact*=i;
// }
// console.log(fact);
 
    //question no = 5;
let arr = [2,4,5,6,20,355,60];
let largest = 0;
for(let i=0; i<=arr.length; i++){
    if(largest<arr[i]){
        largest= arr[i];
    }
}
console.log(largest);