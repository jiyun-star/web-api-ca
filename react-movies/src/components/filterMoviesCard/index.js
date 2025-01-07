
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import React, {useState, useEffect}  from "react";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import { getMovie } from "../../api/tmdb-api";

const formControl = 
  {
    margin: 1,
    minWidth: "90%",
    backgroundColor: "rgb(255, 255, 255)"
  };

export default function FilterMoviesCard(props) {

  const { data, error, isLoading, isError } = useQuery("genres", getGenres);
  
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const genres = data.genres;
  if (genres[0].name !== "Genre"){
    genres.unshift({ id: "0", name: "Genre" });
  }
  const languages = [
   { id: "0", name: "All languages"},
   { id: "en", name: "English"},
   { id: "fr", name: "French"},
   { id: "es", name: "Spanish"},
   { id: "ko", name: "Korean"},
   { id: "ja", name: "Japanese"},

  ]



  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  const handlelanguageChange = (e) => {
    handleChange(e, "language", e.target.value);
  };
  
  return (
    <Card 
      sx={{
        backgroundColor: "#0080FF"
      }} 
      variant="outlined">
      <CardContent>

        <Typography variant="h5" component="h1" fontFamily="roboto">
          <SearchIcon fontSize="medium" />
          Filter the movies.
        </Typography>
       
              <TextField
            sx={{...formControl}}
            id="filled-search"
            label="Search title"
            type="search"
            variant="filled"
            value={props.titleFilter}
            onChange={handleTextChange}
          />

            <FormControl sx={{...formControl}}>
            <Select
                labelId="language-label"
                id="filled-search"
                defaultValue=""
                value={props.languageFilter}
                onChange={handlelanguageChange}
              >
                {languages.map((language) => {
              return (
                <MenuItem key={language.id} value={language.id}>
                  {language.name}
                </MenuItem>
              );
            })}
              
              </Select>
              </FormControl>

        <FormControl sx={{...formControl}}>
          <Select
            labelId="genre-label"
            id="genre-select"
            defaultValue=""
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

      </CardContent>
    </Card>
  );
}