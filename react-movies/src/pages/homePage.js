import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylists'


const HomePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  const favorites = movies.filter(m => m.favorite)
  const playlists = movies.filter(m => m.playlists)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  localStorage.setItem('playlists', JSON.stringify(playlists))

 
  const addToFavorites = (movieId) => true 
  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
          <AddToFavoritesIcon movie={movie} />
          <AddToPlaylistIcon movie={movie} />
          </>
        );
     
      }}
    />
);
};
export default HomePage;