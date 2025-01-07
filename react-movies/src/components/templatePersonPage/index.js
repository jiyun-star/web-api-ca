import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import { getPersonImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import PersonHeader from "../headerPerson";
const TemplatePersonPage = ({ person, children }) => {
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: person.id }],
    getPersonImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
    <PersonHeader person={person} />
    
    <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid size={{xs: 3}}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>

          </div>
        </Grid>

        <Grid size={{xs: 9}}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplatePersonPage;