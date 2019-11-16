const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

pokemon_name = ""
pokemon_description = ""
pokemon_type = ""
pokemon_sprite = ""

var request = new XMLHttpRequest()
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/172', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  pokemon_name = data.name
  for(i = 0; i < data.types; i++)
	pokemon_type[i] += "Type " + i + ": " + data.types[i] + " "
  pokemon_sprite = data.sprites.front_default

  const h11 = document.createElement('h1')
  h11.textContent = pokemon_name
  app.appendChild(h11)
  h11.setAttribute('class', 'thicc')
  const img = document.createElement('img')
  img.src = pokemon_sprite
  app.appendChild(img)
  img.setAttribute('class', 'thicc')

  app.appendChild(container)

  if (request.status >= 200 && request.status < 400) {
    for(i = 0; i < data.moves.length; i++){
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = data.moves[i].move.name

      const p = document.createElement('p')
      const pp = document.createElement('p')
      p.textContent = "" + data.moves[i].version_group_details[0].move_learn_method.name
      pp.textContent = "" + data.moves[i].version_group_details[0].version_group.name
      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
      card.appendChild(pp)
    
    }
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()
