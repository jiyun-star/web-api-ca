// import React from "react";
// import { useParams } from 'react-router-dom';
// import MovieDetails from "../components/movieDetails";
// import PageTemplate from "../components/templateMoviePage";
// import useMovie from "../hooks/useMovie";
// import { getMovie } from '../api/tmdb-api'
// import { getMovieCredits } from "../api/tmdb-api";
// import { useQuery } from "react-query";
// import Spinner from '../components/spinner'
// // import useMovie from "../hooks/useMovie";   Redundant

// const CreditPage = (props) => {
//   const { id } = useParams();
//   const { data: movie, error, isLoading, isError } = useQuery(
//     ["credits", { id: id }],
//     getMovieCredits
//   );

//   if (isLoading) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h1>{error.message}</h1>;
//   }

//   return (
//     <>
//       {movie ? (
//         <>
//           <PageTemplate movie={movie}>
//             <MovieDetails movie={movie} />
        
//           </PageTemplate>
//         </>
//       ) : (
//         <p>Waiting for cast details</p>
//       )}
//     </>
//   );
// };

// export default CreditPage;