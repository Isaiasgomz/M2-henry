import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.movies && this.props.movies.map(movie => (
              <div>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              <button onClick={() => this.props.removeMovieFavorites(id)}>X</button>
              </div>

            ))
          }
        </ul>
      </div>
    );
  }
}

mapStateToProps(state){
  return {
    movies: state.moviesFavourites
  }
}

mapDispatchToProps(dispatch){
  return {
    removeMovieFavorites : id => dispatch(removeMovieFavorites(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
