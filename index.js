function dwarfRollCall(dwarves) {
let result = dwarves.map((dwarf,i) =>
`${i +1 }. ${ dwarf } `).join("")

return result

// for(var i = 0; i < dwarves.length; i++){
// return `${i+1}. ${dwarves[i]},` 
// }            
 
}

function summonCaptainPlanet(planeteerCalls){
  
  
 return planeteerCalls.map(a => a.toUpperCase()+"!")
 
}
  // let planeteers=  planeteerCalls.map(planeteer =>{
  //   return `${planeteer}`
  // })
  // planeteers;

  // for(let i = 0; i< planeteerCalls.length; i++){
  //   return (planeteerCalls[i]).toUpperCase()
  // }


function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++){
    if(words[i].length > 4){
      return true; 
    } else{
      return false
    }
  }
  
}
  
// var lengths = words.map(function(a){
//   return a.length;});
// lengths.indexOf(Math.max.apply(Math, lengths));
//     return lengths
//   }
  
  
  // for(var i = 0; i < words.length; i++){
  //   if(words[i].length > moreThanFourChar){
  //     moreThanFourChar = words[i].length
  //     return moreThanFourChar
  //   }
  // }


function findTheCheese (foods) {
  let cheese = ["cheddar", "gouda", "camembert"]
  let snacks =  ["crackers", "gouda", "thyme"]
  let ingredients = ["garlic", "rosemary", "bread"]
let soup = ["tomato soup", "cheddar", "oyster crackers", "gouda"]

for ( var i = 0; i < foods.length; i++){
  if(foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] ==="camembert"){
    return foods[i]
  }
}
  return "no cheese!"
}

  // for ( var i = 0; i < foods.length; i++){
  //   if(foods[i].indexOf(cheese)){
  //     return "no cheese!"; 
  //   } if(foods.indexOf(snacks, soup)){
  //     return "no cheese!"