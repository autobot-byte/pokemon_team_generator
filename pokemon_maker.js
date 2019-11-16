names = ["Ben Wang", "Pranay", "Daniel", "Ben Taylor", "Ben Sun", "Pusheen", "Connie", "Eric", "Eb", "prydt", "tiffaniffaniff"]
const app = document.getElementById('root')
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

  h22 = document.createElement('h2')
  h22.setAttribute('class', 'nickname')
  h22.textContent = randomName
  console.log(randomName)
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
