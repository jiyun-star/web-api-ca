
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieCredits = ({ movie }) => {  // Don't miss this!
  return (
    <>
      <Typography variant="h5" component="h3">
        cast
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      {movie.cast.map((g) => (
      <Card sx={{ margin: '20px'}} key={g.name}>
      <CardMedia
       sx={{ height: 300, width: 200 }}
        image={
         g.profile_path
        ? `https://image.tmdb.org/t/p/w500/${g.profile_path}`
        : img}
        />
        <CardContent> 
        <Typography variant="h6" component="h3">
          {g.name} 
          </Typography>
          {g.character}
          </CardContent>
      <CardActions disableSpacing>
        <Link to={`/person/${g.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
  </Card>
        ))}
        </div>
    </>
  );
};

export default MovieCredits ;