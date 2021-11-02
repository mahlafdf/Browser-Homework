const mainText = document.querySelector('h1');
const btn = document.getElementById('main-btn');

const quoteArr =[
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "If you tell the truth, you don't have to remember anything.",
    "A friend is someone who knows all about you and still loves you.",
    "Always forgive your enemies; nothing annoys them so much.",
    "Without music, life would be a mistake.",
] ;

//Select a random quote
//const randomQuote = quoteArr[Math.floor((Math.random()*quoteArr.length))];
//   console.log(randomQuote);

  


btn.addEventListener("click",function(){
    const randomQuote = quoteArr[Math.floor((Math.random()*quoteArr.length))];
    mainText.innerText = randomQuote ;
});
