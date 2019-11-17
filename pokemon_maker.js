names = ["Ben Wang", "Pranay", "Daniel", "Eb", "prydt", "tiffaniffaniff", "marshmallow", "polymatter", "3b1b", "tams", "orange", "Austin", "Dustin", "Choinut", "WBNE", "Minecraft", "cup", "table", "fork", "computer", "UwU-man", "OwO-woman", "shorty", "tally", "Wolfie", "Tookie", "Foxie", "Brad", "Pitt", "Ganon", "Roy", "Kirby", "Firey", "R.O.B", "Sonic", "horse", "Ben Taylor", "Ben Sun", "Kelly Liu", "CarDar", "Socks", "Dongle", "Grasshawk", "Rock", "Jingle", "Bucket", "Watermelon", "Truck", "Boomer", "Hack", "Hellong", "Jay Park", "Evan Carlisie", "Anthony Zhou", "Preston Wong" ] 

const app = document.getElementById('root')

//NEW
pickedNames = []

for(i = 1; i <= 6; i++){
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

  pokemon_name = data.name
  const h33 = document.createElement('h3')
  h33.textContent = pokemon_name
  card.appendChild(h33)
  h33.setAttribute('class', 'thicc')

   for(i = 1; i <= data.types.length; i++){
	  pokemon_type = "Type " + i + ": " + data.types[i - 1].type.name + " "
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
      for(i = 0; i < 4; i++){
        randomNum = Math.floor(Math.random() * data.moves.length)
        const ul = document.createElement('ul')
        ul.textContent = data.moves[randomNum].move.name
        card.appendChild(ul)
      }
      /*const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Gah, it's not working!`
      app.appendChild(errorMessage) 
	If I want to add errors uwu*/
  }
  app.appendChild(card) 
  request.send()
}
//NEW
frustration = ["this piece of garbage exists", "xml requests can go send themselves away", "that insomniac cookie was really good", "don't ask me to draw anything. ANYTHING", "as long as it isn't a magikarp it's fine", "why don't they have a mechanical keyboard pokemon yet?", "it really likes to hardcode things", "it still attends the CSO workshops to this day", "it's a potato in disguise", "it could be a racoon"]
const flavor = document.getElementById('flavor')
for(i = 0; i < 6; i++) {
	random = Math.floor(Math.random() * frustration.length)

	fl = document.createElement('p')
	fl.setAttribute('class', 'flavor-text')
	fl.textContent = (pickedNames[i] + ": " + frustration[i])
	console.log(i)
	flavor.appendChild(fl)
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
