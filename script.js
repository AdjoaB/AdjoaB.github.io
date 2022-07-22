/* .js files add interaction to your website */

var factList = [
  "Maya Angelou was the first black author to appear on the New York Times Best Sellers list!", /*0*/
  "In 2015, children were about five times more likely to encounter a talking truck or dinosaur on the page than a Hispanic character.",/*1*/
  "Isabel Miller's Patience and Sarah received the first award Stonewall Book Award in 1971",/*2*/
  " N.K. Jemisin is the first black author — and first woman of color — to win the Hugo for Best Novel.",
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton){
  myButton.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList [count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
