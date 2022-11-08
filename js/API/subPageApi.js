Promise.all([
    fetch('https://modelin.webmcdm.dk/portfolios', {
        headers: {
            Accept: 'application/json'
        }
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (portfolioSubData) {
            for (let i = 0; i < 4; i++) {
                if (window.location.href.indexOf(`portfolioSubPage${i + 1}`) != -1) {
                    const subPage = document.querySelector('#portfolioSub');
                    const mosaic = document.querySelector('#gallery-container');

                    subPage.innerHTML +=
                        `<div class='sub-container'>
            <div class='subTxt-wrapper'>
                <h1 class='subTitle'> ${portfolioSubData[i].title}</h1>
                <i class='fa-solid arrow-down fa-chevron-down fa-3x'></i>
            </div>    
            <img class='subHero' src='${portfolioSubData[i].cover}'/>
        </div>

        <div class='description-container'>
            <h1 class='subHead'> ${portfolioSubData[i].headline}</h1>
            <p class='sub-description'> ${portfolioSubData[i].description}</p>

            <div class='placement-container'>
                <h1>Year</h1>
                <p> ${portfolioSubData[i].placement.year}</p>
                <h1>Area</h1>
                <p> ${portfolioSubData[i].placement.area}</p>
                <h1>Address</h1>
                <p> ${portfolioSubData[i].placement.address}</p>
            </div>
        </div>
        `

                    for (let j = 0; j < portfolioSubData[i].gallery.length; j++) {
                        mosaic.innerHTML += `
                    <div class='grid-item'>
                        <img class='gallery-img' src='${portfolioSubData[i].gallery[j].image}'/>
                    </div>
                `
                    }
                }
            }
        }),
]); 