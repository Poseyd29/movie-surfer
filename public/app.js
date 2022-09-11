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
        // let trimmed = for (let i = 0; i < trimmer.length)

        // list.map((item) => {
        //     const name = item.l;
        //     const poster = item.i.imageUrl;
        //     const movie = `<li><img src="${poster}"><h2>${name}</h2></li>`
        //     document.querySelector('.movies').innerHTML += movie;
        // })

    })
    .then()
    .catch(err => console.error(err));

// fetch('https://jsonplaceholder.typicode.com/posts/5').then(function (response) {
//     if (response.ok) {
//         return response.json();
//     } else {
//         return Promise.reject(response);
//     }
// }).then(function (data) {

//     // Store the post data to a variable
//     post = data;

//     // Fetch another API
//     return fetch('https://jsonplaceholder.typicode.com/users/' + data.userId);

// }).then(function (response) {
//     if (response.ok) {
//         return response.json();
//     } else {
//         return Promise.reject(response);
//     }
// }).then(function (userData) {
//     console.log(post, userData);
// }).catch(function (error) {
//     console.warn(error);
// });

// const optionsTwo = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'Z2EvqnO4xwmsh2eY3rMTIV2ivj5hp1QsuGUjsnrYp69UBS4EI5',
//         'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
//     }
// };

// fetch('https://online-movie-database.p.rapidapi.com/title/find?q=tt11198330', optionsTwo)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));




searchMovieBtn.addEventListener('submit', searchMovie)


console.log('linked')