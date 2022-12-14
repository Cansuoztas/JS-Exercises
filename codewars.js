// // https://www.codewars.com/kata/572059afc2f4612825000d8a
// // switch is the keyword and n is the variable to switch. case 1 means when n===1. Following the ":" you can add your code for what to do in that case. The keyword break is used as termination - if you forget break, the code will continue running through the other case statements and default until a break appears. default is always entered if you've reached it.

// // In some instances, the switch statement is clearer than the if..else statement.

// // For example, we can write a function to calculate what day today is, like this:

// function howManydays(month){
//     var days;
//     switch (month){
//     case 2:
//         days=28
//         break;
//         case 4:
//         case 6:
//        case 9:
//         case 11:
//             days=30;
//             break;
//             case 2:
//                 days=28;
//                 break;
//                 default:
//                     days=31;
//     }
 
//     return days;
   
//   }  
//     console.log(howManydays(2))

// // https://www.codewars.com/kata/579ba41ce298a73aaa000255

// // In this kata, you'll be given an integer of range 0 <= x <= 99 and have to return that number spelt out in English. A few examples:

// // nameThatNumber(4)   // returns "four"
// // nameThatNumber(19)  // returns "nineteen"
// // nameThatNumber(99)  // returns "ninety nine"
// // Words should be separated by only spaces and not hyphens. No need to validate parameters, they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!

// function nameThatNumber(num) {
//     let returnedValue = "";
//     let tens ={2:"twenty", 3:"thirty",4:"forty",5:"fifty", 6:"sixty",7:"seventy" , 8:"eighty", 9:"ninety"};
//     let units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
//     if (num == 0) {
//         returnedValue = "zero";
//     }
//     if(num<20 && num>0 ){
//         returnedValue =units[num];

//     }
//     if(num>=20){
//         returnedValue = tens[Math.floor((num/10))]+((num%10 !=0)? " " : "")+units[num%10];
//     }
//     return returnedValue; 

//   }
// console.log(nameThatNumber(99))

// // https://www.codewars.com/kata/583d10c03f02f41462000137
// // Description:
// // Given an array arr that contains some integers(positive, negative or 0), and a range list such as [[start1,end1],[start2,end2],...], start and end are the index of arr and start always less than end. Your task is to calculate the sum value of each range (start index and end index are both inclusive), and return the maximum sum value.

// function maxSum(arr,range){
//  return Math.max(...range.map(i=> arr.slice(i[0],i[1]+1).reduce((a,b) => a+b )))
//   }
//   console.log(maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]]))

// // https://www.codewars.com/kata/56606694ec01347ce800001b
// // DESCR??PT??ON:
// // Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// // (In this case, all triangles must have surface greater than 0 to be accepted).
// function isTriangle(a,b,c)
// {
//    return a + b > c && a + c > b && c + b > a;
// }
// console.log(isTriangle(1,2,2))

// // https://www.codewars.com/kata/542c0f198e077084c0000c2e
// // DESCR??PT??ON:
// // Count the number of divisors of a positive integer n.

// // Random tests go up to n = 500000.

// // Examples (input --> output)

// function getDivisorsCnt(n){
//  let num = 0
//  for(let i = 1; i<= n; i++){
//     if(n% i==0){
//         num +=1
//     }
//  }
//  return num
// }
// console.log(getDivisorsCnt(12))

//! *********************

// https://www.codewars.com/kata/54da539698b8a2ad76000228
// DESCRIPTION:
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
//?1
// function isValidWalk(walk) {
//     let n=[],s=[],e=[],w=[];
//     walk.map(x=>{
//         if(x ==="n")n.push(1)
//         if(x ==="s")s.push(1)
//         if(x ==="e")e.push(1)
//         if(x ==="w")w.push(1)
//     })
//     return(n.length===s.length)&&(w.length===e.length)&&(walk.length===10)
//   }

// //?2.
// function isValidWalk(walk){
//     if( walk.length != 10) return false;

//     let yol  ={ n: 0 , s:0 ,e:0, w:0};
//     walk.forEach((x)=>{ yol [x]++; });
//     return(yol.n == yol.s && yol.e == yol.w )

// }
//   console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s','n']))


// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
// DESCRIPTION:
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.