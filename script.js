document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.querySelector('.beer-button')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')
    const volumeDisplay = document.querySelector('.volume')
    const imagenUrl = document.querySelector('.image_url')


function getData(e){
    e.preventDefault()
    
    
    fetch('https://api.punkapi.com/v2/beers/random')
        .then(reponse => {
            return reponse.json()
        })
        .then(data => {
            console.log(data)
            //name, description
            const name =data[0].name
            console.log(name)
            const description = data[0].description
            const image = data[0].image_url
            const {volume} = data[0]
            const volumeValue = volume.value
            const volumeUnit = volume.unit

            randomBeer.innerHTML = name + ' '+ volumeValue + volumeUnit
            descriptionDisplay.innerHTML = description
            volumeDisplay.innerHTML = volumeValue + volumeUnit
            imagenUrl.innerHTML = image
        })

}

startBtn.addEventListener('click', getData)

})