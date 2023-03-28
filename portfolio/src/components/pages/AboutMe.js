import React from "react";
import autumnPhoto from "../../images/autumnprofile.jpg";
import familyPhoto from "../../images/familyprofile.jpg";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function AboutMe() {
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item xs={12}>
          <Box sx={{ mt: 15, mb: 5 }} fontSize="30">
            <Typography variant="h2">About Me</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={10}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                I have been a stay at home mom for the past 3 years. I
                absolutely love being home with my son, but as he's grown, I
                have found room in my life for a career. After researching
                career options I decided to attend the University of Arizona
                Full Stack Coding Bootcamp. The bootcamp focused on MERN stack,
                with extensive exposure to Node, JavaScript, jQuery, and
                Express. After learning the basics, we moved on to more advanced
                platforms including SQL, MongoDB, react, and GraphQL 
              </Typography>
              <br></br>
              <Typography variant="h6">
                My ambition is to provide businesses with websites and applications that help them achieve their goals. I understand the importance of a professional, aesthetic, user-friendly online presence. My goal is to give clients a powerful online platform that represents who they are and what they have to offer.
              </Typography>
              <br></br>
              <Typography variant="h6">
                So let's get started!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia component="img" image={autumnPhoto}></CardMedia>
          </Card>
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card>
            <CardMedia component="img" image={familyPhoto}></CardMedia>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
