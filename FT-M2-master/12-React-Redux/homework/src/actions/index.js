// https://www.omdbapi.com/?i=tt3896198&apikey=d71f12ca
 export function getMovies (title)  {
    return function (dispatch){
        return  fetch(`https://omdbapi.com/?i=tt3896198&apikey=d71f12ca&s=${title}`)
        .then(response => response.json())
        .then(data => {dispatch({type: 'GET_MOVIES' , payload: data})})
    }

  } 
  
  export function getMovieDetail(id){
      return function(dispatch){
          fetch(`https://omdbapi.com/?i=tt3896198&apikey=d71f12ca&i=${id}`)
          .then(response => response.json())
          .then(data => dispatch({type: 'GET_MOVIE_DETAIL', payload:data}))
      }
  }

  export function addMovieFavorite (title) {
      return{
          type: 'ADD_MOVIE_FAVORITE',
          payload: title
          
      }
  }

  export function removeMovieFavorite (id) {
      return {
          type: 'REMOVE_MOVIE_FAVORITE',
          payload: id
      }
  }
  