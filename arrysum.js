// function testCase(i, o){
//   if(i === o) return `Test Pass: output is ${o} as expected`
//   return `Test Failed: ${i} not equall to ${o}` 
// }


// function sortStart(arr) {
//     const sortedArr = arr.sort(); // untuk mengurutkan array sesuai huruf
//     const firstChar = sortedArr[0].split("").join("***"); // Ambil array index ke 0 agar kata yang diambil sesuai Soal yaitu (bitcoin) dan (are) dan tambahkan tiga bintang di setiap hurufnya
//     return firstChar;
//   }
//   console.log(testCase(sortStart(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' ))
//   console.log(testCase(sortStart(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'))

// ANAGRAM

// Jawaban:
// write your code here
function isAnagram(stringA, stringB){
const normalize = (str) => {
  return str.toLowerCase().split("").sort().join("")

  const sorted1 = string1.split('').sort().join('').toLowerCase();
  const sorted2 = string2.split('').sort().join('').toLowerCase();

}
  return normalize(stringA) === normalize(stringB);
};



// Output
// console.log(isAnagram("listen","silent")) 
console.log(isAnagram("The Eyes","They See")) 
// console.log(isAnagram("sun","moon")) 