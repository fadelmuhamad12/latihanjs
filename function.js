const angka = [-1, 4, 2, 1, 0, 4, 1, 6, 7, 8, 9, 3];



//Cari angka >=3
//for
// const greaterThanThree = [];
// for(let i = 0; i < angka.length; i++){
//     if(angka[i] >= 3) {
//         greaterThanThree.push(angka[i]);
//     }
// }
// console.log(greaterThanThree)


// .filter
// const newAngka = angka.filter(a => a >=5 )
// console.log(newAngka)

// .map
// const newAngka = angka.map(a => a * 4)
// console.log(newAngka);
// console.log(angka);

// .reduce

// const newAngka =  angka.reduce((acc, curr) =>
// acc + curr);

// console.log(newAngka)

function charCount( word) {
    let countAlphabet = {}
    word.split("").forEach(char => {
       countAlphabet[char] = countAlphabet[char]? (countAlphabet[char] + 1) :1;
       
   });
        return countAlphabet;
    }
    
    console.log(charCount("Dibimbing di"))
    console.log(charCount("Software"))
    console.log(charCount("Frontend"))

    // NO.1
// function Char_Count(str1) {
//     var chars = {};
//     str1.replace(/\S/g, function(l){chars[l] = (isNaN(chars[l]) ? 1 : chars[l] + 1);});
//     return chars;
// }

// console.log(Char_Count("Dibimbing di"))
// console.log(Char_Count("Software"))
// console.log(Char_Count("Frontend"))

