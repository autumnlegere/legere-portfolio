import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const cardStyle = {
  // backgroundColor: 'blue',
  minWidth: 200,
  "&:hover, &:focus-within": {
    bgcolor: "grey",
  },
  margin: "auto",
};

export default function Projects() {
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item xs={12}>
          <Box sx={{ mt: 15, mb: 5 }} fontSize='30'>
            <Typography variant="h2">PROJECTS</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={cardStyle}>
            <CardActionArea
              href="https://autumnlegere.github.io/Weather-OpenWeatherAPI/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Weather Dashboard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  OpenWeatherApi
                  <br></br>
                  Web page that accesses this api to display weather data for
                  any city in the world.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={cardStyle}>
            <CardActionArea
              href="https://autumnlegere.github.io/DailyDictionary/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Daily Dictionary
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  API's
                  <br></br>
                  Web page that accesses this api to display weather data for
                  any city in the world.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={cardStyle}>
            <CardActionArea
              href="https://sleepy-temple-31862.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Forum for Life
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Simple Social Media Site
                  <br></br>
                  Web page that accesses this api to display weather data for
                  any city in the world.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={cardStyle}>
            <CardActionArea
              href="https://autumnlegere.github.io/DailyPlanner-jQuery-JS/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Dialy Planner
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  OpenWeatherApi
                  <br></br>
                  Web page that accesses this api to display weather data for
                  any city in the world.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={cardStyle}>
            <CardActionArea
              href="https://polar-sierra-99541.herokuapp.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Let Me Ask You
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  OpenWeatherApi
                  <br></br>
                  Web page that accesses this api to display weather data for
                  any city in the world.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
