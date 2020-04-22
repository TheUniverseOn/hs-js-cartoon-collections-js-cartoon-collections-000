
//1

function dwarfRollCall(dwarves) {
let result = dwarves.map((dwarf,i) =>
`${i +1 }. ${ dwarf } `).slice(0, dwarves.length/2).  join("")

return result


}

//"1. Doc 2. Dopey 3. Bashful 4. Grumpy "

///for loop

function summonCaptainPlanet(planeteerCalls){
var final = []; 
planeteerCalls.forEach(function(element) {
element  =  element.toUpperCase()+ "!"; 
final.push(element)
   
})
return final; 
}

//map





// correct
function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++){
    if(words[i].length > 4){
      return true; 
    } else{
      return false
    }
  }
  
}
//map(if)
  

  
  
  



//correct 
function findTheCheese (foods) {
  let cheese = ["cheddar", "gouda", "camembert"]
  let snacks =  ["crackers", "gouda", "thyme"]
  let ingredients = ["garlic", "rosemary", "bread"]
let soup = ["tomato soup", "cheddar", "oyster crackers", "gouda"]

for ( var i = 0; i < foods.length; i++){
  if(foods[i] === "cheddar"  || foods[i] === "gouda" || foods[i] ==="camembert" || foods[i] ==="swisscheese"){
    return foods[i]
  } 
} 
  return "no cheese!"
}

//words = array 
function wordsWithB(words){
  let result = []; 
// let iterator = words.map(e => e.startsWith("b"))
//     result.push(iterator)
  for(var i = 0; i < words.length; i++){
    if(words[i].startsWith("b")){
      result.push(words[i])
       
    }
  }
  return result;
}

