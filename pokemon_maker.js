names = ["Ben Wang", "Pranay", "Daniel", "Eb", "prydt", "tiffaniffaniff", "marshmallow", "polymatter", "3b1b", "tams", "orange", "Austin", "Dustin", "Choinut", "WBNE", "Minecraft", "cup", "table", "fork", "computer", "UwU-man", "OwO-woman", "shorty", "tally", "Wolfie", "Tookie", "Foxie", "Brad", "Pitt", "Ganon", "Roy", "Kirby", "Firey", "R.O.B", "Sonic", "horse", "Ben Taylor", "Ben Sun", "Kelly Liu", "CarDar", "Socks", "Dongle", "Grasshawk", "Rock", "Jingle", "Bucket", "Watermelon", "Truck", "Boomer", "Hack", "Hellong", "Jay Park", "Evan Carlisie", "Anthony Zhou", "Preston Wong" ] 

const app = document.getElementById('root')
const NUMBER = 6;
var foo = 0;

//NEW
pickedNames = []
var averages = [0, 0, 0, 0, 0, 0] // Average hitpoints, attack, defense, special attack, special defense, and speed

for(var i = 1; i <= NUMBER; i++){
  var request = new XMLHttpRequest()
  pokemon_name = ""
  pokemon_description = ""
  pokemon_type = ""
  pokemon_sprite = ""

  const card = document.createElement('div')
  card.setAttribute('class', 'card')

  randomNameID = Math.floor(Math.random() * names.length)
  randomName = names[randomNameID]
  pickedNames.push(randomName)

  h22 = document.createElement('h2')
  h22.setAttribute('class', 'nickname')
  h22.textContent = randomName
  card.appendChild(h22)

  randomPokemon = Math.floor((Math.random() * 800) + 1)
  randomString = 'https://pokeapi.co/api/v2/pokemon/' + randomPokemon
  request.open('GET', randomString, true)
  request.onload = function() {
  var data = JSON.parse(this.response)
  // Update averages
  averages[0] += data.stats[5]['base_stat'];
  averages[1] += data.stats[4]['base_stat'];
  averages[2] += data.stats[3]['base_stat'];
  averages[3] += data.stats[2]['base_stat'];
  averages[4] += data.stats[1]['base_stat'];
  averages[5] += data.stats[0]['base_stat'];
  
  pokemon_name = data.name
  const h33 = document.createElement('h3')
  h33.textContent = pokemon_name
  card.appendChild(h33)
  h33.setAttribute('class', 'thicc')

   for(var j = 1; j <= data.types.length; j++){
	  pokemon_type = "Type " + j + ": " + data.types[j - 1].type.name + " "
          const ulul = document.createElement('ul')
          ulul.setAttribute('class', 'thiccc')
          ulul.textContent = pokemon_type
          card.appendChild(ulul)
          if(data.types.length == 1) {
            ewe = document.createElement('ul')
            ewe.setAttribute('class', 'thiccc')
            ewe.textContent = " ‏‏‎ "
            card.appendChild(ewe)
      }
   }

    pokemon_sprite = data.sprites.front_default
    const img = document.createElement('img')
    img.src = pokemon_sprite
    card.appendChild(img)
    img.setAttribute('class', 'pic')

    const moves = document.createElement('h3')
    moves.textContent = "Moves: "
    moves.setAttribute('class', 'bottom-text')
    card.appendChild(moves)
      for(var k = 0; k < 4; k++){
        randomNum = Math.floor(Math.random() * data.moves.length)
        const ul = document.createElement('ul')
        ul.textContent = data.moves[randomNum].move.name
        card.appendChild(ul)
      }
      /*const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Gah, it's not working!`
      app.appendChild(errorMessage) 
  If I want to add errors uwu*/
  
  if (++foo === NUMBER) {
    wolfram();
  }
}
  app.appendChild(card) 
  request.send()
}
//NEW
const flavor = document.getElementById('flavor')
potato = ""
lameString = ["A", "b", "c", "d", "e", "f"]
for(i = 0; i < NUMBER; i++) {
	dumbdumb = pickedNames[i]
	randomNumber = Math.floor((Math.random() * 30) + 1)
	randomString = 'https://pokeapi.co/api/v2/characteristic/' + randomNumber
	var reeee = new XMLHttpRequest()
	reeee.open('GET', randomString, true)
	reeee.onload = function() {
	var data = JSON.parse(this.response)
	potato = data.descriptions[1].description
	lameString.push(potato)
	}
reeee.send()
work()
}
function work() {
for(i = 0; i < NUMBER; i++) {
	fl = document.createElement('p')
	fl.setAttribute('class', 'flavor-text')
	fl.textContent = (pickedNames[i] + ": " + lameString[i])
	flavor.appendChild(fl)
}
}

function refresh() {
  window.location.reload(false)
}

const button = document.getElementById('button');
button.onmouseover = logMouseOver;
button.onmouseout = logMouseOut;

function logMouseOver() {
  document.getElementById('button').style.background = '#073642';
}

function logMouseOut() {
  document.getElementById('button').style.background = '#002b36';
}

const mix = document.createElement('div')
mix.setAttribute('class', 'card')

// Wolfram
function wolfram() {
  for (var i = 0; i < NUMBER; i++)
  {
    averages[i] /= NUMBER;
  }
  var string = averages.join(',')
  var request = new XMLHttpRequest()
  request.open('GET', "https://www.wolframcloud.com/obj/1a00bd3c-f2ea-4472-8561-d2d73b5fa6af?x=" + string, true)
  request.onload = function() {
    var closest = this.responseText.substring(this.responseText.indexOf(':') + 1, this.responseText.length - 2)
  }
  request.send()
}