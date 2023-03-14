import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Projects() {
  return (
    <div>
      <Box sx={{ mt: 15 }}>
        <h1>PROJECTS</h1>
      </Box>
      <Grid sx={{ flexDirection: 'row' }}>
        <Button
          href="https://autumnlegere.github.io/Weather-OpenWeatherAPI/"
          target="_blank"
          rel="noopener noreferrer"
          container spacing={2}
          sx={{
            "&:hover, &:focus-within": {
              bgcolor: "blue",
            },
            bgcolor: 'grey',
            width: 375,
            height: 300
          }}
        >
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Weather
              </Typography>
              <Typography variant="body2" color="text.secondary">
                OpenWeatherApi
                <br></br>
                Web page that accesses this api to display weather data for any
                city in the world.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Button>

        <Button
          href="https://autumnlegere.github.io/DailyDictionary/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            "&:hover, &:focus-within": {
              bgcolor: "blue",
            },
            width: 375,
            height: 300
          }}
        >
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Daily Dictionary
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Merriam Webster API
                <br></br>
                Giphy API
                <br></br>
                Random Word API
                <br></br>
                Front end build utilizing three different API's. Designed with
                CSS and Foundation.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Button>

        <Button
          href="https://sleepy-temple-31862.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            "&:hover, &:focus-within": {
              bgcolor: "blue",
            },
            width: 375,
            height: 300
          }}
        >
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Forum for Life
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Basic Social Media Platform. Created using Sequelize and
                Handlebars.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Button>

        <Button
          href="https://autumnlegere.github.io/DailyPlanner-jQuery-JS/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            "&:hover, &:focus-within": {
              bgcolor: "blue",
            },
            width: 550,
            height: 300
          }}
        >
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Daily Planner
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Work day planner that allows user to add and remove appointments
                or notes as needed.
                <br></br>
                Built using JavaScript, jQuery, and Moment.js.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Button>

        <Button
          href="https://polar-sierra-99541.herokuapp.com/home"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            "&:hover, &:focus-within": {
              bgcolor: "blue",
            },
            width: 550,
            height: 300
          }}
        >
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Let Me Ask You
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Social platform designed for users to submit random questions
                and then vote on and answer their favorite questions by others.
                <br></br>
                Built using React, Mongoose, and GraphQL.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Button>
      </Grid>
    </div>
  );
}

<p>
In addition to the completed projects that I have chosen to include in
this portfolio, I have many more projects that are either
works-in-progress or back-end only on my GitHub account which is linked
below. Most of these projects were completed as part of the bootcamp
curriculum and each one uses a variety of platforms.
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