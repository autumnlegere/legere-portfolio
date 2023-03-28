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
        <Grid item xs={8}>
          <Box sx={{ mt: 15, mb: 5 }} fontSize='30'>
            <Typography variant="h2">Portfolio</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4} justifyContent="center">
      <Grid item xs={8}>
          <Card sx={cardStyle}>
            <CardActionArea
              href="https://autumnlegere.github.io/DailyPlanner-jQuery-JS/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent>
              <Typography variant="h4" component="div" align='center'>
                Daily Planner
              </Typography>
              <Typography variant="body2" color="text.secondary" align='center'>
                Javascript & Moment.js
              </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card sx={cardStyle}>
            <CardActionArea
              href="https://autumnlegere.github.io/Weather-OpenWeatherAPI/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent>
                <Typography variant="h4" component="div" align='center'>
                  Weather Forecast Website
                </Typography>
                <Typography variant="body2" color="text.secondary" align='center'>
                  JavaScript & OpenWeatherApi.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card sx={cardStyle}>
            <CardActionArea
              href="https://autumnlegere.github.io/DailyDictionary/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent>
              <Typography variant="h4" component="div" align='center'>
                Daily Dictionary
              </Typography>
              <Typography variant="body2" color="text.secondary" align='center'>
                Merriam-Webster Dictionary API, Giphy API, & Random Word API
              </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card sx={cardStyle}>
            <CardActionArea
              href="https://sleepy-temple-31862.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent>
              <Typography variant="h4" component="div" align='center'>
                Forum for Life
              </Typography>
              <Typography variant="body2" color="text.secondary" align='center'>
                Node, Express, Handlebars, Bcrypt, & Sequelize
              </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card sx={cardStyle}>
            <CardActionArea
              href="https://polar-sierra-99541.herokuapp.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent>
              <Typography variant="h4" component="div" align='center'>
                Let Me Ask You
              </Typography>
              <Typography variant="body2" color="text.secondary" align='center'>
                Node, Express, React, MongoDB, & Mongoose
              </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
