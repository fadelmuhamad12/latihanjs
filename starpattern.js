// function segitiga(triangle){
//     let star = "";
//      for(let i = 0; i <= triangle; i++){ //1 i=2 j=2
//          for(j = 0; j <= i; j++){
//              star += '*';
//          }
//          star += "\n";
//      }

//      return star;
// }

// console.log(segitiga(5));
// s


// let star = "";
// for(let i = 1; i < 5; i++){
//   for(j = i; j<5; j++){
//       star += "\n"
//   }
//   for(j = 1; j<=i; j++){
//       star += "*"
//   }
//   star += "\n"
// }
// console.log(star)



// 
// let n = 5 //deklarasikan mau brp Baris
// let star = '';

// for (let i = 1; i <= n; i++) {
//   //print spasi
//   for (let j = 0; j < n - i ; j++) {
//     star += " ";
//   }
//     for (k = 0; k < i; k++) {
//       star += "*";
//     }
//     star += "\n";
//   }
  
// console.log(star);


// let star = "";
// for(let i = 0; i < 5; i++){
//   for(let j = 0; j<=i; j++){
//     star+="*"
//   }
//   star+= "\n"
// }
// console.log(star)


// let star= "";

// for(let i = 0; i < 5; i++){
//   for(j=5; j > i; j--){
//     star += "*"
//   }
//   star += "\n"
// }
// console.log(star);




let n = 5;
let star = "";
for(let i = 1; i <= n; i++){
  // Buat output spasi;
  for(let j = 1; j <= n -i; j++){
    star += " ";
  }
  for(let k = 0; k < 2 * i - 1; k++){
    star += "*";
  }
   star += '\n';
}
console.log(star)



