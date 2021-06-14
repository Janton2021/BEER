document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.querySelector('.beer-button')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')
    const volumeDisplay = document.querySelector('.boil_volume')
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
            const name =data[0].name //array de un solo elemento; Formatted JSON Data se ve un array de un solo elemento
            console.log(name)
            const description = data[0].description
            const image = data[0].image_url
            //boil_volumen { value, unit } (Volumen de cocción)
            const {boil_volume} = data[0]
            const volumeValue = boil_volume.value
            const volumeUnit = boil_volume.unit
            //alcohol by volumen (abv)
            const alcohol = data[0].abv
            //first_brewed (primera aparación de la cerveza)
            const firstBrewed = data[0].first_brewed

            randomBeer.innerHTML = name +  '    ' + firstBrewed + '    ' + alcohol + '%'
            descriptionDisplay.innerHTML = description
            volumeDisplay.innerHTML = volumeValue + ' ' + volumeUnit
            
            if(!(image === null)){
                imagenUrl.src = image
            }else{
                imagenUrl.src = "Imagenes/Homer.jpg"
            }
        })

}

startBtn.addEventListener('click', getData)

})

