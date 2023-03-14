import React from "react";
import { Box, Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";

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
      <Box sx={{ mt: 15 }}>
        <h1>PROJECTS</h1>
      </Box>
      <Grid container spacing={4} justifyContent='center'>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={cardStyle}>
            <CardActionArea
              href="https://autumnlegere.github.io/Weather-OpenWeatherAPI/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Weather
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
              href="https://autumnlegere.github.io/Weather-OpenWeatherAPI/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Weather
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
              href="https://autumnlegere.github.io/Weather-OpenWeatherAPI/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Weather
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
              href="https://autumnlegere.github.io/Weather-OpenWeatherAPI/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Weather
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
              href="https://autumnlegere.github.io/Weather-OpenWeatherAPI/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Weather
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
