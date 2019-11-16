const app = document.getElementById('root')
for(i = 1; i <= 6; i++){
  var request = new XMLHttpRequest()
  pokemon_name = ""
  pokemon_description = ""
  pokemon_type = ""
  pokemon_sprite = ""

  const card = document.createElement('div')
  card.setAttribute('class', 'card')

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
    card.appendChild(h11)
    h11.setAttribute('class', 'thicc')

    const h22 = document.createElement('h2')
    h22.textContent = pokemon_type
    card.appendChild(h22)
    h22.setAttribute('class', 'thicc')

    const img = document.createElement('img')
    img.src = pokemon_sprite
    card.appendChild(img)
    img.setAttribute('class', 'thicc')

    const moves = document.createElement('h1')
    moves.textContent = "Moves: "
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
