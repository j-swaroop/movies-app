let navBarEl = document.getElementById('navBar');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 100){
    navBarEl.classList.add('nav-scrolled')
  }else{
    navBarEl.classList.remove('nav-scrolled')
  }
})

// base url of the site
const apiKey = 'api_key=31ecc119fad187a50bed7432965b09d8';
const base_url = "https://api.themoviedb.org/3";
// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + apiKey;
// img url
const banner_url = "https://image.tmdb.org/t/p/original";

const img_url = "https://image.tmdb.org/t/p/w300"; 


// requests for movies data
const requests = {
  fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${apiKey}`,
  fetchTrending: `${base_url}/trending/all/week?${apiKey}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${apiKey}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${apiKey}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${apiKey}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${apiKey}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${apiKey}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${apiKey}&with_genres=99`,
};

const displayBanner = (data) => {
      const setMovie = data.results[Math.floor(Math.random() * data.results.length)];
      // console.log(setMovie)
      const {backdrop_path, overview, name} = setMovie
      const customizedOverview = overview.slice(0, 160); 

      let movieName = ''
      if (name === '' || name === undefined){
        movieName = setMovie.title
      }

      const bannerContainerEl = document.getElementById('bannerContainer');
      const bannerTitleEl = document.getElementById('bannerTitle');
      const bannerDescriptionEl = document.getElementById('bannerDescription');

      const bannerImage = banner_url + backdrop_path
      bannerContainerEl.style.backgroundImage = `url(${bannerImage})`;
      
      bannerTitleEl.textContent = name || movieName;
      bannerDescriptionEl.textContent = customizedOverview;
}

const displayNetflixOriginal = (data) => {
      //display data
      let rowEl = document.getElementById('row');

      let originalsTitle = document.createElement('p');
      originalsTitle.textContent = 'Netflix Originals';
      originalsTitle.classList.add('category-title')
      rowEl.appendChild(originalsTitle);

      let orinialsContainer = document.createElement('ul');
      orinialsContainer.classList.add('movies-container');
      rowEl.appendChild(orinialsContainer);

      data.results.map(eachItem => {
      const {poster_path, name, backdrop_path } = eachItem;

      let movieName = ''
      if (name === '' || name === undefined){
        movieName = eachItem.title
      }
      
      let movieContainer = document.createElement('li');
      movieContainer.classList.add('each-movie-container')
      orinialsContainer.appendChild(movieContainer);

      let movieImage = document.createElement('img');
      movieImage.src = img_url + backdrop_path
      movieImage.classList.add('movie-img');
      movieContainer.appendChild(movieImage);

      let movieTitle = document.createElement('p');
      movieTitle.textContent = name || movieName;
      movieTitle.classList.add('movie-title')
      
      movieContainer.appendChild(movieTitle);

    });

}

const displayPopularData = (data) => {
    //display data
    // console.log(data)
    let rowEl = document.getElementById('row');

    let originalsTitle = document.createElement('p');
    originalsTitle.textContent = 'Popular';
    originalsTitle.classList.add('category-title')
    rowEl.appendChild(originalsTitle);

    let orinialsContainer = document.createElement('ul');
    orinialsContainer.classList.add('movies-container');
    rowEl.appendChild(orinialsContainer);

    data.results.map(eachItem => {
    const {poster_path, title, backdrop_path } = eachItem;

    let movieName = ''
    if (title === '' || title === undefined){
      movieName = eachItem.name
    }
    
    let movieContainer = document.createElement('li');
    movieContainer.classList.add('each-movie-container')
    orinialsContainer.appendChild(movieContainer);

    let movieImage = document.createElement('img');
    movieImage.src = img_url + backdrop_path
    movieImage.classList.add('movie-img');
    movieContainer.appendChild(movieImage);

    let movieTitle = document.createElement('p');
    movieTitle.textContent = title || movieName;
    movieTitle.classList.add('movie-title')
    
    movieContainer.appendChild(movieTitle);
  });
}

const displayTrendingData = (data) => {
  //display data
  // console.log(data)
  let rowEl = document.getElementById('row');

  let originalsTitle = document.createElement('p');
  originalsTitle.textContent = 'Trending Movies';
  originalsTitle.classList.add('category-title')
  rowEl.appendChild(originalsTitle);

  let orinialsContainer = document.createElement('ul');
  orinialsContainer.classList.add('movies-container');
  rowEl.appendChild(orinialsContainer);

  data.results.map(eachItem => {
  const {poster_path, title, backdrop_path } = eachItem;
  
  let movieName = ''
  if (title === '' || title === undefined){
    movieName = eachItem.name
  }

  let movieContainer = document.createElement('li');
  movieContainer.classList.add('each-movie-container')
  orinialsContainer.appendChild(movieContainer);

  let movieImage = document.createElement('img');
  movieImage.src = img_url + backdrop_path
  movieImage.classList.add('movie-img');
  movieContainer.appendChild(movieImage);

  let movieTitle = document.createElement('p');
  movieTitle.textContent = title || movieName;
  movieTitle.classList.add('movie-title')
  
  movieContainer.appendChild(movieTitle);
});
}

const displayActionData = (data) => {
  //display data
  // console.log(data)
  let rowEl = document.getElementById('row');

  let originalsTitle = document.createElement('p');
  originalsTitle.textContent = 'Action Movies';
  originalsTitle.classList.add('category-title')
  rowEl.appendChild(originalsTitle);

  let orinialsContainer = document.createElement('ul');
  orinialsContainer.classList.add('movies-container');
  rowEl.appendChild(orinialsContainer);

  data.results.map(eachItem => {
  const {poster_path, title, backdrop_path } = eachItem;

  let movieName = ''
  if (title === '' || title === undefined){
    movieName = eachItem.name
  }
  
  let movieContainer = document.createElement('li');
  movieContainer.classList.add('each-movie-container')
  orinialsContainer.appendChild(movieContainer);

  let movieImage = document.createElement('img');
  movieImage.src = img_url + backdrop_path
  movieImage.classList.add('movie-img');
  movieContainer.appendChild(movieImage);

  let movieTitle = document.createElement('p');
  movieTitle.textContent = title || movieName;
  movieTitle.classList.add('movie-title')
  
  movieContainer.appendChild(movieTitle);
});
}

const displayComedyData = (data) => {
  //display data
  // console.log(data)
  let rowEl = document.getElementById('row');

  let originalsTitle = document.createElement('p');
  originalsTitle.textContent = 'Comedy Movies';
  originalsTitle.classList.add('category-title')
  rowEl.appendChild(originalsTitle);

  let orinialsContainer = document.createElement('ul');
  orinialsContainer.classList.add('movies-container');
  rowEl.appendChild(orinialsContainer);

  data.results.map(eachItem => {
  const {poster_path, title, backdrop_path } = eachItem;

  let movieName = ''
  if (title === '' || title === undefined){
    movieName = eachItem.name
  }
  
  let movieContainer = document.createElement('li');
  movieContainer.classList.add('each-movie-container')
  orinialsContainer.appendChild(movieContainer);

  let movieImage = document.createElement('img');
  movieImage.src = img_url + backdrop_path
  movieImage.classList.add('movie-img');
  movieContainer.appendChild(movieImage);

  let movieTitle = document.createElement('p');
  movieTitle.textContent = title || movieName;
  movieTitle.classList.add('movie-title')
  
  movieContainer.appendChild(movieTitle);
});
}

const displayHorrorData = (data) => {
  //display data
  // console.log(data)
  let rowEl = document.getElementById('row');

  let originalsTitle = document.createElement('p');
  originalsTitle.textContent = 'Horror Movies';
  originalsTitle.classList.add('category-title')
  rowEl.appendChild(originalsTitle);

  let orinialsContainer = document.createElement('ul');
  orinialsContainer.classList.add('movies-container');
  rowEl.appendChild(orinialsContainer);

  data.results.map(eachItem => {
  const {poster_path, title, backdrop_path } = eachItem;

  let movieName = ''
  if (title === '' || title === undefined){
    movieName = eachItem.name
  }
  
  let movieContainer = document.createElement('li');
  movieContainer.classList.add('each-movie-container')
  orinialsContainer.appendChild(movieContainer);

  let movieImage = document.createElement('img');
  movieImage.src = img_url + backdrop_path
  movieImage.classList.add('movie-img');
  movieContainer.appendChild(movieImage);

  let movieTitle = document.createElement('p');
  movieTitle.textContent = title || movieName;
  movieTitle.classList.add('movie-title')
  
  movieContainer.appendChild(movieTitle);
});
}

const displayDataRomance = (data) => {
  //display data
  // console.log(data)
  let rowEl = document.getElementById('row');

  let originalsTitle = document.createElement('p');
  originalsTitle.textContent = 'Romantic Movies';
  originalsTitle.classList.add('category-title')
  rowEl.appendChild(originalsTitle);

  let orinialsContainer = document.createElement('ul');
  orinialsContainer.classList.add('movies-container');
  rowEl.appendChild(orinialsContainer);

  data.results.map(eachItem => {
  const {poster_path, title, backdrop_path } = eachItem;

  let movieName = ''
  if (title === '' || title === undefined){
    movieName = eachItem.name
  }
  
  let movieContainer = document.createElement('li');
  movieContainer.classList.add('each-movie-container')
  orinialsContainer.appendChild(movieContainer);

  let movieImage = document.createElement('img');
  movieImage.src = img_url + backdrop_path
  movieImage.classList.add('movie-img');
  movieContainer.appendChild(movieImage);

  let movieTitle = document.createElement('p');
  movieTitle.textContent = title || movieName;
  movieTitle.classList.add('movie-title')
  
  movieContainer.appendChild(movieTitle);
});
}

const displayDocumentaries = (data) => {
  //display data
  // console.log(data)
  let rowEl = document.getElementById('row');

  let originalsTitle = document.createElement('p');
  originalsTitle.textContent = 'Documentaries Movies';
  originalsTitle.classList.add('category-title')
  rowEl.appendChild(originalsTitle);

  let orinialsContainer = document.createElement('ul');
  orinialsContainer.classList.add('movies-container');
  rowEl.appendChild(orinialsContainer);

  data.results.map(eachItem => {
  const {poster_path, title, backdrop_path } = eachItem;

  let movieName = ''
  if (title === '' || title === undefined){
    movieName = eachItem.name
  }
  
  let movieContainer = document.createElement('li');
  movieContainer.classList.add('each-movie-container')
  orinialsContainer.appendChild(movieContainer);

  let movieImage = document.createElement('img');
  movieImage.src = img_url + backdrop_path
  movieImage.classList.add('movie-img');
  movieContainer.appendChild(movieImage);

  let movieTitle = document.createElement('p');
  movieTitle.textContent = title || movieName;
  movieTitle.classList.add('movie-title')
  
  movieContainer.appendChild(movieTitle);
});
}


const fetchNetflixData = async () => {
    //netflix originals
    const responseOriginals = await fetch(requests.fetchNetflixOrignals);
    const dataOriginals = await responseOriginals.json();
    
    displayNetflixOriginal(dataOriginals);

    const responsePopular = await fetch(requests.fetchPopular);
    const dataPopular = await responsePopular.json();

    displayPopularData(dataPopular);

    const responseTrending = await fetch(requests.fetchTrending);
    const dataTrending = await responseTrending.json();

    displayTrendingData(dataTrending);

    const responseActionMovies = await fetch(requests.fetchActionMovies);
    const dataActionMovies = await responseActionMovies.json();

    displayActionData(dataActionMovies);

    const responseComedy = await fetch(requests.fetchComedyMovies);
    const dataComedy = await responseComedy.json();

    displayComedyData(dataComedy);

    const responseHorror = await fetch(requests.fetchHorrorMovies);
    const dataHorror = await responseHorror.json();

    displayHorrorData(dataHorror);

    const responseRomance = await fetch(requests.fetchRomanceMovies);
    const dataRomance = await responseRomance.json();

    displayDataRomance(dataRomance);

    const responseDocumentaries = await fetch(requests.fetchDocumentaries);
    const dataDocumentaries = await responseDocumentaries.json();

    displayDocumentaries(dataDocumentaries);

    const bannerDetails = [dataOriginals, dataPopular, dataTrending, dataActionMovies, dataHorror, dataDocumentaries, dataComedy]
    const setMovie = Math.floor(Math.random() * bannerDetails.length)
    displayBanner(bannerDetails[setMovie])

  }

fetchNetflixData()
