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
frustration = ["this piece of garbage exists", "xml requests can go send themselves away", "that insomniac cookie was really good", "don't ask me to draw anything. ANYTHING", "as long as it isn't a magikarp it's fine", "why don't they have a mechanical keyboard pokemon yet?", "I really like to hardcode things", "it's rumored that I still attend the CSO workshops to this day", "I'm a potato in disguise", "I could be a racoon", "siracha and grapes are not meant to be together", "gee isn't is great that they patched missingno out of the game?", "tfw tossing 11 ultra balls turns your screen into night mode", "if you wanted a good quote, just look at the commit history at github.com/wbne/pokemon_team_generator", "coding in html/css/js is like grad school... you never know how those 4 hours will turn out", "if you saw that one quote about grad school, yea I ended up wasting those 4 hours in sadness and frustration while eating a chicken sandwhich with polynesian sauce", "quaternions were made to bully us three-dimensional beings", "what is an imaginary polar coordinate?", "how many shrimps can I eat before I make my skin turn pink?", "who would win? A $2000+ Apple laptop vs one dust boi (pretend this was before their 16-inch laptop released)", "uwu", "owo", "Fruit Snacks are delicious", "wooloo and pichu are the two best pokemon in existance", "kirby lore is amazing"]
flavor_text = ["They like to nap a lot", "Eating is one of its hobbies", "They were once was a pro League player... now they're washed up", "During its prime it was known to code at 30 errors a second", "They have a crippling addiction to mechanical keyboards", "Back when they were in undergrad, they decided to not wear goggles in chem lab", "Record holder for Bowser's Big Bean Burrito", " is fren", "Secretly a furry", "Secretly a scalie", "Occasionally uwu's and owo's to the dismay of its friends", "Was popular in high school", "Read the transcipt of the prequels and will now spew r/prequelmemes into their life", "Thought Maplestory was a fun game", "Thought goats was a really fun, balanced, and simple meta", "Knows that the Earth is a dinosaur", "Eats slowpoke tails", "Believe that they are in a game... but they aren't", "Had a laptop decked out in MLH stickers", "Likes Knack 2 BAYBEEEE", "Can only be quelled with the sound of Kailh Box Jades", "A TAMS alumni", "Has a pretty fluffy scarf", "Wishes for a Wooloo SO"]
const flavor = document.getElementById('flavor')
for(i = 0; i < 6; i++) {
	random = Math.floor(Math.random() * flavor_text.length)

	fl = document.createElement('p')
	fl.setAttribute('class', 'flavor-text')
	fl.textContent = (pickedNames[i] + ": " + flavor_text[random])
	console.log(i)
	flavor.appendChild(fl)
}

const anger = document.getElementById('stages-of-grief')
dat_manip_doe = Math.floor(Math.random() * frustration.length)
piece_of_garbage = document.createElement('h2')
piece_of_garbage.setAttribute('class', 'frustration')
piece_of_garbage.textContent = "A not-so-wise man B. Wang once said: " + frustration[dat_manip_doe]
anger.appendChild(piece_of_garbage)

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
