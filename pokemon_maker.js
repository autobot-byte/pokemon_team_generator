const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

pokemon_name = ""
pokemon_description = ""
pokemon_type = ""
pokemon_sprite = ""

var request = new XMLHttpRequest()
randomPokemon = Math.floor((Math.random() * 800) + 1)
randomString = 'https://pokeapi.co/api/v2/pokemon/' + randomPokemon
request.open('GET', randomString, true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  pokemon_name = data.name
  for(i = 0; i < data.types; i++)
	pokemon_type += "Type " + i + ": " + data.types[i] + " "
  pokemon_sprite = data.sprites.front_default

  const h11 = document.createElement('h1')
  h11.textContent = pokemon_name
  app.appendChild(h11)
  h11.setAttribute('class', 'thicc')

  const h22 = document.createElement('h2')
  h22.textContent = pokemon_type
  app.appendChild(h22)
  h22.setAttribute('class', 'thicc')

  const img = document.createElement('img')
  img.src = pokemon_sprite
  app.appendChild(img)
  img.setAttribute('class', 'thicc')

  app.appendChild(container)

  const card = document.createElement('div')
  const moves = document.createElement('h1')
  moves.textContent = "Moves: "
  card.appendChild(moves)
  if (request.status >= 200 && request.status < 400) {
    for(i = 0; i < 4; i++){
      randomNum = Math.floor(Math.random() * data.moves.length)
      card.setAttribute('class', 'card')

      const ul = document.createElement('ul')
      ul.textContent = data.moves[randomNum].move.name
      card.appendChild(ul)
    container.appendChild(card) 
    }
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()
