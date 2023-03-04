// const array = [1, 2, 3]

// let sum = (num, num1) => {
//     return num + num1;
//  }
// console.log(sum(2, 4));
// addName("Fadel", "Muhamad");


// function addName(firstName, lastName){
//     console.log("Nama depan:", firstName) 
//     console.log("Nama depan:", lastName); 
// }



// function addSports(firstSports, secondSports){
//     return firstSports + secondSports;
// }

// console.log(addSports("Football", " Basketball"));

// Jawaban:
function removeDuplicates (str) {
    //write your code here
    let unique = [];

    for(let i = 0; i< str.length; i++){
        if(unique.indexOf(str[i])===-1){

            unique.push(str[i]);

        }
    }
    return unique;
}
console.log(removeDuplicates("AAAABBBCDFFFDAABBBCG"))
console.log(removeDuplicates("RRRRROOOAAQPPP"))