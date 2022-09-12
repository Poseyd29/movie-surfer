const searchMovieBtn = document.querySelector('.search-submit')
const searchMovieInput = document.querySelector('search-movie')


// search movie function
const searchMovie = async () => { }

// fetch for most popular shows
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'Z2EvqnO4xwmsh2eY3rMTIV2ivj5hp1QsuGUjsnrYp69UBS4EI5',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};


// get most popular tv shows, and trim the title id so it can be used for the next fetch call
fetch('https://online-movie-database.p.rapidapi.com/title/get-most-popular-tv-shows?currentCountry=US&purchaseCountry=US&homeCountry=US', options)
    .then(response => response.json())
    .then(response => {
        const list = response.splice(0, 8)

        let trimmer = list.map(element => element.slice(7, 17))

        let trimmed = trimmer.map(el => el.replaceAll('/', ''))

        let titles = []
        for (let i = 0; i < trimmed.length; i++) {
            titles.push(fetch(`https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=${trimmed[i]}&currentCountry=US`, options))
            // console.log(titles)
        }
        console.log(titles)
    })
    .then(titles => {
        console.log(titles)
    })
    .catch(err => console.error(err));



searchMovieBtn.addEventListener('submit', searchMovie)


console.log('linked')