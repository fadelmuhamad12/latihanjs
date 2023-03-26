// document.getElementById('click1').onclick = function(){
//     if (document.getElementById('click1').style.backgroundColor === 'white') {
//         document.getElementById('click1').style.backgroundColor = 'green';
//         document.getElementById('click1').style.color = 'black';
//     } else if (document.getElementById('click1').style.backgroundColor === 'green') {
//         document.getElementById('click1').style.backgroundColor = 'black';
//         document.getElementById('click1').style.color = 'white';
//     }
// }


// document.getElementById("click1").onclick = function (){
//     if(document.getElementById("click1").style.backgroundColor  === "white");{
//         document.getElementById("click1").style.backgroundColor =  "black";
//     }
    
// }


const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");


toggle.addEventListener("click", function ()  {
    this.classList.toggle("bi-moon-fill")
    if(this.classList.toggle("bi-brightness-high-fill")){
        body.style.background = "white";
        body.style.color ="black"
        body.style.transition = "2s";
    }else {
        body.style.background = "black";
        body.style.color ="white"
        body.style.transition = "2s";
    }
})