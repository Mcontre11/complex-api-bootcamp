document.getElementById('button').addEventListener('click', MortyPeeps)
const url = `https://rickandmortyapi.com/api/character`
function MortyPeeps() {

  let randomNum = Math.floor(Math.random() * 21)

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(dataFromMorty => {
    
      console.log(dataFromMorty)
      document.querySelector('#Info').innerText = dataFromMorty.results[randomNum].name

      const giphy = `https://api.giphy.com/v1/gifs/search?api_key=[]=${dataFromMorty.results[randomNum].name}`

      fetch(giphy)
        .then(res => res.json()) // parse response as JSON 
        .then(data => {
          // pull random gif
          let secondRandomNum = Math.floor(Math.random() * data.data.length)
          document.querySelector('iFrame').src = data.data[0].embed_url

        })
    })
}