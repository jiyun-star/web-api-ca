

import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
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

const PersonDetails = ({ person }) => {  // Don't miss this!


  return (
    <>
     <Card sx={{ margin: '20px'}} key={person.name}>
      <CardMedia
       sx={{ height: 300, width: 200 }}
        image={
         person.profile_path
        ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
        : img}
        />
        <CardContent> 
      <Typography variant="h2" component="h3">
      {person.name}
      </Typography>
      <Typography variant="h6" component="h3">
      {person.biography}
      </Typography>  
      </CardContent>
      </Card>
      </>

  )
}

export default PersonDetails ;
