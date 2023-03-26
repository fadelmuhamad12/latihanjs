// day 6
// no.1
// function removeDuplicates(str){

//     let removed = [...new Set(removeDuplicates)];
//     return removed
// }
// console.log(removeDuplicates("AAAABBBCDFFFDAABBBCG"));
// console.log(removeDuplicates("RRRRROOOAAQPPP"));


// no.2
// let data = [
//     {
//         title: "The Only Guide You Need",
//         score:8,
//         status: "Posted"
//     },
//     {
//         title: "The Advanced Guide To Archive",
//         score:5,
//         status: "Unposted"

//     },
//     {
//         title: "In Defense of the Figurative Use of Literally.",
//         score:6,
//         status: "Unposted",
//     },
//     {
//         title: "The Best Ways to Do Market Research For Your Business Plan",
//         score:7,
//         status: "Unposted"
//     },
//     {
//         title: "The Only Guide You Need Part 2",
//         score:8,
//         status: "Unposted"
//     },
// ]

// // Jawaban:
// function Jobs(array) {
//   // write your code here
//   for (let i = 0; i < array.length; i++){
//       if(array[i].score >= 7 ){
//           array[i].status = "Posted";
//       }
//   }
//   return array;
// }

// console.log(Jobs(data))


// DAY 11
// NO 1
// let vowels = ["a","i","u","e","o"];
// function countVowels(str, vowels){
//     let count =0;
//  for (let i = 0; i < str.length; i++){
//     if(vowels.includes(str[i])){
//         count++
//     }
//  }
//  return count;
// }

// console.log(countVowels("Selamat Pagi Duniaa!!", vowels))
// console.log(countVowels("aku suka ngoding", vowels))

// NO 2
// function manipulateString(str){
//     let space = ""
//   for(let i = 0; i < str.length; i++){
//       if(str[i] === str[i].toUpperCase()){
//         space += " "
//       }
//       space += str[i]
//   }
//   return space;
// }

// console.log(manipulateString("SelamatPagiDunia"))
// console.log(manipulateString("AkuSukaJavascript"))

