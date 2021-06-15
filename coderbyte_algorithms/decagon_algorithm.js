// dynamic programing: a way of making complex algo reading run faster, technically a way to increase the time and space complexity of your aalgorithm.
// so it is not enough to solve a problem, the solution must be scalabe.
// dynamic algorithm is divided into 1. momoization and 2. tabulation.

// DECAGON FINAL ALGORRITHM QUESTION
// WRITE A FUNCTION THAT RETURNS FALSE IF AN ARRAY IS SEARILISED
// IT SHPOULD RETURN THE MISSING NUMBER IF THE ARRAY IS NOT SSERIALISED.
// [1,2,3,4,5,6,7,8,9] SHOULD RETURN FALSE
// [1,2,3,4,5,7,8,9] SHOULD RETURN 6
// i solved this algorithm question 13th/may 2021


// const serial = (arr) => {

//     if(arr == []) return false;

//     for (let num of arr){
//         const rem = arr.slice(arr.indexOf(num) + 1);
//         if(rem[0] - num > 1) return num + 1;
//         serial(rem);     
//     }

//     return false
// }

// console.log(serial([1,2,3,4,5,6])) // false
// console.log(serial([1,2,3,5,6])) // 4
// console.log(serial([1,3,5,6])) // 2
// console.log(serial([1,2,3,4,5])) // false

// example1
// fib function without dynamic programming

// const fib = (n) => {
//     if( n == 0 || n == 1) return 1;
//     return fib(n-1) + fib(n-2);
// }

// console.log(fib(1))
// console.log(fib(2))
// console.log(fib(8))
// console.log(fib(50))

// time and space  complexity analysis
// time complexity 0(2^n) 
// space complexity 0(n)


//fib with dynamic programming using memoization

// const fib = (n, memo={}) => {
//   if(n in memo) return memo[n]; // search for existence in the memo object
//   if( n <= 2) return 1;         //base case
//   memo[n] = fib(n-1, memo) + fib(n-2, memo);
//   return memo[n]
// }
// console.log(fib(1))
// console.log(fib(2))
// console.log(fib(8))
// console.log(fib(200))
// time and space  complexity analysis
// time complexity 0(n) 
// space complexity 0(n)

// fib  using tabulation

// const fib = (num) => {
    
//     const table = Array(num + 1).fill(0)
//     table[1] = 1;
//    for(var i=0; i <= num ; i++){
//        table[ i + 1] += table[i];
//        table[ i + 2] += table[i];      
//    }
//    return table[num]
// }

// // n is the length of the array.
// // time complexity: O(n)
// // space complexity: O(n) 

// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(50));

// example 2
// The grid traveller:
// Suppose that you are a traveller on a 2D grid. you begin in the top-left cornner and your goal is totravel to the bottom-rigth corner. you may only move down or right

// gridTraveller without memoization.
// const gridTraveller = (n,m) => {
    
//     if (n == 0 || m == 0) return 0;
//     if ( n == 1 & m == 1) return 1;
//     return gridTraveller(n-1,m) + gridTraveller(n,m-1);
    
// }

// console.log(gridTraveller(2,3));
// console.log(gridTraveller(4,5));
// console.log(gridTraveller(20,20));

// time and space  complexity analysis
// time complexity 0(2^(n+m)) ..exponential
// space complexity 0(n+m)

// gridTraveller with memoization.
// const gridTraveller = (n,m, memo= {}) => {
//     const key = `${n},${m}`; // the reason for the comma in between the key is to  avoid key confusion as the stack increases
//     if (key in memo) return memo[key];
//     if (n <= 0 || m <= 0) return 0;
//     if ( n == 1 & m == 1) return 1;
//     memo[key] = gridTraveller(n-1,m, memo) + gridTraveller(n,m-1, memo);
//     return memo[key]
// }

// console.log(gridTraveller(2,3));
// console.log(gridTraveller(4,5));
// console.log(gridTraveller(200,200));

// time and space  complexity analysis
// time complexity 0(n+m) ..linear
// space complexity 0(n+m)

// grid traveller with  tabulation...


// memoization recipe
// 1. make it work
//  visualise the problem as a tree     
//  implement the tree using recursion
//  test it

// 2. make it efficient
//  add a memo object
// add a base case to return memo values
// store the returned value into the memo


// example3
// write a function `canSum(targetSum, numbers)` hat takes in a targetSum and an array of numbers as arguments.
// the function should returns a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.
// you may use an element of the array as many times as needed.
// you may assume that all input numbers are nonegative.

// solution without memo
// const canSum = (targetSum, numbers ) => {

//     // base cases
//     if (targetSum == 0) return true;
//     if (targetSum < 0) return false;

//     // checking for possibilty of number addition
//     for ( let num of numbers){
//          const rem = targetSum - num;
//          if (canSum(rem, numbers) == true){
//              return true;
//          }
//     }
   
//     return false;
// };

// time and space  complexity analysis
// time complexity 0(n^m) ..exponential
// space complexity 0(m)


// solution with memo
// const canSum = (targetSum, numbers, memo = {} ) => {

//     // base cases
//     if (targetSum in memo) return memo[targetSum]
//     if (targetSum == 0) return true;
//     if (targetSum < 0) return false;

//     // checking for possibilty of number addition
//     for ( let num of numbers){
//          const rem = targetSum - num;
//          if (canSum(rem, numbers,memo) == true){
//              memo[targetSum] = true
//              return true;
//          }
//     }
//      
//     memo[targetSum] = false
//     return false;
// };

// time and space  complexity analysis
// time complexity 0(n*m) ..linear
// space complexity 0(m)

// console.log(canSum(7,[2,3]));
// console.log(canSum(7,[5,3,4,7]));
// console.log(canSum(7,[2,4]));
// console.log(canSum(8,[2,3,5]));
// console.log(canSum(300,[7,14]));

// excersise 3

// wite a function 'howSum(targetSum, numbers)' that takes in a target sum and an array of numbers as arguments.
// The func tion should return an array containing any combination of elements that add up to the targetSum.
//  if there is nocombination that adds up to the targetSum, then return null.
// if there are multiple combination possible you may return the single one.


//solution1
// this solution won't work for all the cases since it is stated to use as many elemnet combination as possible
// const howSum = (targetSum, numbers) => {
//     var output = [];

//         for(var j= 0; j < numbers.length; j++){
//             if (numbers[j] + numbers[j + 1] == targetSum){
//                 var arr = [numbers[j],numbers[j + 1]]
//                 output.push(arr)
//             }
//         }
    
//         return output.length >= 1 ? output[0] : null
// };
// console.log(howSum(7,[5,3,4,7])); //arr
// console.log(howSum(7,[2,4])); //null
// console.log(howSum(0,[1,2,3])); //null
// console.log(howSum(7,[2,4, 1])); // arr

// this is a brute force solution

// const howSum = (targetSum, numbers) => {
   
//     if (targetSum < 0) return null;
//     if (targetSum == 0) return [];
    

//     for(let num of numbers){
//         const rem = targetSum - num;
//         const remResult = howSum(rem, numbers);
//         if( remResult !== null){
//          return [...remResult, num]; 
//         }
//     }

//     return  null;
// }

//time and space  complexity analysis
// time complexity 0(n^m * m) ..exponential 
// space complexity 0(m)

// console.log(howSum(7,[2,3]));
// console.log(howSum(7,[5,3,4,7]));
// console.log(howSum(7,[2,4]));
// console.log(howSum(8,[2,3,5]));
// console.log(howSum(300,[7,14]));



// solution with memo


// const howSum = (targetSum, numbers, memo = {}) => {
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum < 0) return null;
//     if (targetSum == 0) return [];
    

//     for(let num of numbers){
//         const rem = targetSum - num;
//         const remResult = howSum(rem, numbers, memo);
//         if( remResult !== null){
//          memo[targetSum] = [...remResult, num];
//          return memo[targetSum]
//         }
//     }

//     memo[targetSum] = null;
//     return  null;
// }

//time and space  complexity analysis
// time complexity 0(n*m*m) = 0(n*m^2) ..exponential 
// space complexity 0(m*m) = 0(m^2)

// console.log(howSum(7,[2,3]));
// console.log(howSum(7,[5,3,4,7]));
// console.log(howSum(7,[2,4]));
// console.log(howSum(8,[2,3,5]));
// console.log(howSum(300,[7,14]));



// excersise: the bestSum algo problem
// write a function `bestSum(targetSum, numbers)` that takes in a targetSum an d array of numbers as arguments
// the function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
// if there is a tie for the shortest combination, you may return one of the shortest;

// const bestSum = (targetSum, numbers) => {
   
//     if( targetSum == 0) return [];
//     if(targetSum < 0) return null;
    

//     let shortestcomb = null;

//     for(let num of numbers){
//         const rem = targetSum - num;
//         const remResult = bestSum(rem, numbers);
//         if(remResult !== null){
//            const comb = [...remResult, num];
//           if(shortestcomb === null || comb.length < shortestcomb.length){
//               shortestcomb = comb;
//           }
                  
//         }
//     }

//     return shortestcomb;
// }

//time and space  complexity analysis
// time complexity 0(n^m * m) .exponential 
// space complexity 0(m*m) = 0(m^2)

// console.log(bestSum(7,[2,3]));
// console.log(bestSum(7,[5,3,4,7]));
// console.log(bestSum(7,[2,4]));
// console.log(bestSum(8,[2,3,5]));
// console.log(bestSum(300,[7,14]));


// solution with memo

// const bestSum = (targetSum, numbers, memo = {}) => {

//     if (targetSum in memo) return memo[targetSum];
//     if( targetSum == 0) return [];
//     if(targetSum < 0) return null;
    

//     let shortestcomb = null;

//     for(let num of numbers){
//         const rem = targetSum - num;
//         const remResult = bestSum(rem, numbers, memo);
//         if(remResult !== null){
//            comb = [...remResult, num];
//           if(shortestcomb === null || comb < shortestcomb.length){
//               shortestcomb = comb;
//           }
                  
//         }
//     }
//     memo[targetSum] = shortestcomb;
//     return shortestcomb;
// }

//time and space  complexity analysis
// time complexity 0(n*m^2) 
// space complexity 0(m*m) = 0(m^2)

// console.log(bestSum(7,[2,3]));
// console.log(bestSum(7,[5,3,4,7]));
// console.log(bestSum(7,[2,4]));
// console.log(bestSum(8,[2,3,5]));
// console.log(bestSum(300,[7,14]));


// excersise
// write a function `canConstruct(target,  wordBank)` that accepts a target string and an array of strings.
// the function should return a boolean indicating whether or not the 'target' can be constructed by concatenating elements of the 'wordBank' array.
// you may reuse the element of the "wordBank" array.
// you may resuse the element of the 'wordBank' as many times as needed.


// my solution
// const canConstruct = (target, wordBank) => {
//     if (target == "") return true;
   
  
//     for(let word of wordBank){
//        const rem = target.replace(word, "");
//         if( rem == "") return true;
//         if( rem == target) return ;
        
//        if (canConstruct(rem, wordBank) == true){
//            return true
//        }
//     }

//     return false
// }


// canConstruct("abcdef",["ab","cd","cdef"]);

// instructors solution without memo

// const canConstruct = (target, wordBank) => {
//     if (target == "") return true;

//     for(let word of wordBank){
//      if (target.indexOf(word) === 0){
//          const suffix = target.slice(word.length);
//         if (canConstruct(suffix,wordBank) == true){
//             return true
//              }
//          }    
//     }

//     return false
// }


// console.log(canConstruct("abcdef",["ab","cd","cdef"]));
// console.log(canConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]));
// console.log(canConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]));
// console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee"          
// ]));


// time and space  complexity analysis
// time complexity: 0(n^m * m) ... the extra "m" is a result of the splice method used which gives m number product at each step
// space complexity: 0(m * m) = 0(m^2) .. tthe splice method affects the space complexity too.

// instructors solution with memo

// const canConstruct = (target, wordBank, memo = {}) => {
//     if (target in memo) return memo[target];
//     if (target == "") return true;

//     for(let word of wordBank){
//      if (target.indexOf(word) === 0){ //checking if the prefix is same
//          const suffix = target.slice(word.length); // getting the suffix
//         if (canConstruct(suffix,wordBank, memo) == true){
//              memo[suffix] = true;
//              return memo[suffix]
//         }
//      }
       
//     }
    
//     memo[target] = false;
//     return false
// }

// // time and space  complexity analysis
// // time complexity: 0(n * m^2) ... 
// // space complexity: 0(m * m) = 0(m^2) .. 


// console.log(canConstruct("abcdef",["ab","cd","cdef"]))
// console.log(canConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]));
// console.log(canConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]));
// console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee"          
// ]));





// excercise
// write a function 'countConstruct(target,wordBank)' that accepts a target string and an arrray of strings.

// The function should return the  number of ways that the 'target' can be constructed by concatenanting elements of the 'wordBank' array.
// you may reuse elements of 'wordBank' as many times as possible.


// solution with memoization: brute force solution
// const countConstruct = (target,wordBank) => {
    
//     if(target == "") return 1;
//     let totalCount = 0;

//     for(let word of wordBank){
//         if(target.indexOf(word) == 0){
//             var suffix = target.slice(word.length);
//             var rem = countConstruct(suffix,wordBank);
//             totalCount += rem;
            
//         }
//     }
//     return totalCount;
// };

// // time and space  complexity analysis
// // time complexity: 0(n^m * m) ... exponential
// // space complexity: 0(m * m) = 0(m^2) .. 

// console.log(countConstruct("abcdef",["ab","abc","cd","def","abcd"])) // 1 
// console.log(countConstruct("abcdef",["ab","cdef","abc","def"]))     // 2
// console.log(countConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]));
// console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee"          
// ]));







// const countConstruct = (target,wordBank, memo = {}) => {
//     if(target in memo) return memo[target];
//     if(target == "") return 1;
//     let totalCount = 0;

//     for(let word of wordBank){
//         if(target.indexOf(word) == 0){
//             var suffix = target.slice(word.length);
//             var rem = countConstruct(suffix,wordBank, memo);
//             totalCount += rem;
            
//         }
//     }

//     memo[target] = totalCount;
//     return totalCount;
// };

// // time and space  complexity analysis
// // time complexity: 0(n * m^2) ... 
// // space complexity: 0(m * m) = 0(m^2) .. 

// console.log(countConstruct("abcdef",["ab","abc","cd","def","abcd"])) // 1 
// console.log(countConstruct("abcdef",["ab","cdef","abc","def"]))     // 2
// console.log(countConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]));
// console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee"          
// ]));



// write a function 'allConstruct(target,wordBank)' that accepts a target string and an array of strings.
// the function should return a 2D array containing all of the ways a 'target' can be constructed by concatenating elements of the `wordBank` array. Each element of the 2D array should rep one combination that
// constructs the `target`.
//  you may reuse the elements of the wordBank `target`.

// brute force solution...

// const allConstruct = (target, wordBank) => {
//     if (target == '') return [[]]; // a 2D array because the question asked it.
    

//     const results = []; // initiatiate result as the final output

//     for (let word of wordBank){
//         if(target.indexOf(word) == 0){                              //check for the prefix
//             const suffix = target.slice(word.length);              // get the suffix
//             const wordRem = allConstruct(suffix, wordBank);       // do a recursive call on the remaining word
//             const targetWays = wordRem.map(ways => [word, ...ways]) // spread the word leading to the base case and the content of the arrray today
//             results.push(...targetWays); // spread every stack into the results, we don't wanna push into it directly or else we will have a 3D array...
            
//         } 
//     }
    
//     return results;
// }

// console.log(allConstruct("abcdef",["ab","abc","cd","def","abcd"])) // 1 y
// console.log(allConstruct("abcdef",["ab","cdef","abc","def"]))     // 2
// console.log(allConstruct('purple',['purp','p','ur','le','purpl']));
// console.log(allConstruct("abcdef",["ab","abc","cd","def","abcd", 'ef', 'c']))
// console.log(allConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
// console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz",["a","aa","aaa","aaaa","aaaaa"]))   


//solution with memoization

// const allConstruct = (target, wordBank, memo = {}) => {
//     if(target in memo) return memo[target];
//     if (target == '') return [[]]; // a 2D array because the question asked it.
    

//     const results = []; // initiatiate result as the final output

//     for (let word of wordBank){
//         if(target.indexOf(word) == 0){                              //check for the prefix
//             const suffix = target.slice(word.length);              // get the suffix
//             const wordRem = allConstruct(suffix, wordBank, memo);       // do a recursive call on the remaining word
//             const targetWays = wordRem.map(ways => [word, ...ways]) // spread the word leading to the base case and the content of the arrray today
//             results.push(...targetWays); // spread every stack into the results, we don't wanna push into it directly or else we will have a 3D array...
//             memo[target] = targetWays;
//             return memo[target]
            
//         } 
//     }
    
//     return results;
// }

// // time complexity : O(n^m)
// // space complexity: O(m)

// console.log(allConstruct('purple',['purp','p','ur','le','purpl']));
// console.log(allConstruct("abcdef",["ab","abc","cd","def","abcd", 'ef', 'c']))
// console.log(allConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]))
// console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz",["a","aa","aaa","aaaa","aaaaa"]))   


// tabulation dynamic programming techniques.
//
//
//
//
//











































































































































































































































































































































































































































































