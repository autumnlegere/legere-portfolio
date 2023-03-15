import React from "react";
import resume from "../../pdf/resume.pdf";
import gmailIcon from "../../images/gmailIcon"
// import resumeIcon from "../../images/resumeIcon"
// import linkedInIcon from "../../images/linkedInIcon"
// import githubIcon from "../../images/githubIcon"

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
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


export default function ContactMe() {
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
            <Typography variant="h2">Contact Information</Typography>
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
              <CardMedia
              component="img"
              height="200"
              image={"/static/images/cards/paella.jpg"}
              alt="Paella dish"
              ></CardMedia>
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
      <section>
        <p>
          Please feel free to reach out to me on any of the following platforms.
          <br />I look forward to hearing from you!
        </p>
      </section>

      <section class="contactlinks">
        <p>
          <a
            href="mailto: autumnlegere@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            autumnlegere@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/autumn-legere"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p>
          In addition to the completed projects that I have chosen to include in
          this portfolio, I have many more projects that are either
          works-in-progress or back-end only on my GitHub account which is
          linked below. Most of these projects were completed as part of the
          bootcamp curriculum and each one uses a variety of platforms.
        </p>
        <a
          href="https://github.com/autumnlegere"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/autumnlegere
        </a>
        <p>
          Finally, I have included a downloadable copy of my resume for your
          viewing.
        </p>
        <a href={resume} download>
          Downloadable Resume
        </a>
        <p>
          Thank you for taking the time to view my portfolio and consider me for
          contract or employment!
        </p>
      </section>
    </div>
  );
}
