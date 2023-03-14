import React from "react";
import resume from "../../pdf/resume.pdf";
import autumnPhoto from "../../images/autumnprofile.jpg";
import familyPhoto from "../../images/familyprofile.jpg"
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

export default function AboutMe() {
  return (
    <div>
      <Box sx={{ mt: 15 }}>
        <h1>About Me</h1>
      </Box>
      <Grid container spacing={4} justifyContent="center">
      <Grid item xs={10}>
          <Card>
            <CardContent>
              <Typography variant="body2" sx={{ fontSize: 16 }}>
                I have been a stay at home mom for the past 3 years. I
                absolutely love being home with my son, but as he's grown, I
                have found room in my life for a career. After researching
                career options I decided to attend the University of Arizona
                Full Stack Coding Bootcamp. The bootcamp focuses on MERN stack,
                with extensive exposure to Node, JavaScript, jQuery, and
                Express. After learning the basics, we focused on more advanced
                platforms including SQL, MongoDB, react, and GraphQL.
              </Typography>
              <br></br>
              <Typography variant="body2" sx={{ fontSize: 16 }}>
                My ambition is to create websites and applications that help
                others realize their business goals. In today's world an
                attractive, user-friendly website often means the difference
                between a customer choosing your service over that of a
                competitor. My goal is to give clients a powerful online
                platform that represents who they are and what they have to
                offer.
              </Typography>
              <br></br>
              <Typography variant="body2" sx={{ fontSize: 16 }}>
                So let's get started!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              image={autumnPhoto}
            ></CardMedia>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={5}>
          <Card>
            <CardMedia
              component="img"
              image={familyPhoto}
            ></CardMedia>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
