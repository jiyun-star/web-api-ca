import React from "react";
import { useParams } from 'react-router-dom';
import PersonDetails from "../components/personDetails";
import PageTemplate from "../components/templatePersonPage";
import { getMovie } from '../api/tmdb-api'
import { getPerson } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import MovieHeader from "../components/headerMovie";
// import useMovie from "../hooks/useMovie";   Redundant

const PersonPage = (props) => {
  const { id } = useParams();
  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPerson
  );


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {person ? (
        <>
          <PageTemplate person={person}>
            <PersonDetails person={person} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for person details</p>
      )}
    </>
  );
};

export default PersonPage;