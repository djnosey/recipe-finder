
 var getRndInterger

var fromNumber = Math.round( Math.random()*10+1)
var toNumber = fromNumber + 3


var to = '&to=' + toNumber

console.log(fromNumber)



const api = 'https://api.edamam.com/search?q=';
var fridge = 'chicken';
const apiKey = '&app_id=75e4c5dd&app_key=713aed98878716621b826b88391f70e3';


function search() {
  var fromNumber = Math.round( Math.random()*10+1)
  var from = '&from=' + fromNumber 
fridge=document.getElementById("userInput").value;


fetch(api + fridge + apiKey + from + to)
.then((response) => response.json())
.then((data)=>{ 
    data.hits.map(item=>{
        const dailyRecipe =document.getElementById("dailyRecipe")
        const foodImage = document.getElementById("foodImage")
        const method = document.getElementById("method")

  dailyRecipe.innerHTML=  `${item.recipe.label}`;
  foodImage.src = item.recipe.image;
  method.innerHTML = "Ingredients: " + `${item.recipe.ingredientLines}`;
        console.log(data)
    })
})
.catch(function(error) {
  console.log(error);
})
 }

 