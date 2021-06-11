const tableOneBeer = function (beer) {
    return `<div class="beer">
                  <img class="img-beer" src="${beer.image_url}" alt="beer" />
                  <h1>${beer.name}</h1>
                  <p class="title">${beer.tagline}</p>
                  <p class="title">${beer.first_brewed}</p>
                  <p><a href="./public/beers.html?id=${beer.id}">Show more</a></p>
                </div>`;
  };

fetch("https://api.punkapi.com/v2/beers")
    .then(function (response) {
        return response.json();
    })

    .then(function (beers) {
        let oneBeer = document.getElementById("allBeers");
        beers.forEach((element) => {
          oneBeer.innerHTML += tableOneBeer(element);
        });
      });
