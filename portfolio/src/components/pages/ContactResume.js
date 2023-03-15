import React from "react";
import resume from "../../pdf/resume.pdf";
import gmailIcon from "../../images/gmailIcon.png";
import resumeIcon from "../../images/resumeIcon.png";
import linkedInIcon from "../../images/linkedInIcon.png";
import githubIcon from "../../images/githubIcon.png";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Tooltip,
} from "@mui/material";

const cardStyle = {
  width: 100,
  "&:hover, &:focus-within": {
    bgcolor: "grey",
  },
  margin: "auto",
};

const cardStyleLinkedIn = {
  width: 100,
  height: 100,
  "&:hover, &:focus-within": {
    bgcolor: "grey",
  },
  margin: "auto",
};

const cardStyleInfo = {
  minWidth: 200,
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
          <Box sx={{ mt: 15, mb: 7 }} fontSize="30">
            <Typography variant="h2">Contact Information</Typography>
            <Box>
              <Typography></Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={6} sm={2}>
          <Card sx={cardStyle}>
            <CardActionArea
              href="mailto: autumnlegere@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip title="Gmail" placement="top">
                <CardMedia
                  component="img"
                  image={gmailIcon}
                  alt="link to gmail"
                ></CardMedia>
              </Tooltip>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Card sx={cardStyleLinkedIn}>
            <CardActionArea
              href="https://www.linkedin.com/in/autumn-legere/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip title="LinkedIn" placement="top">
              <CardMedia
                component="img"
                image={linkedInIcon}
                alt="link to LinkedIn"
              ></CardMedia>
              </Tooltip>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Card sx={cardStyle}>
            <CardActionArea
              href="https://github.com/autumnlegere"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip title="GitHub" placement="top">
              <CardMedia
                component="img"
                image={githubIcon}
                alt="link to GitHub"
              ></CardMedia>
              </Tooltip>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Card sx={cardStyle}>
            <CardActionArea
              href={resume}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tooltip title="Download Resume" placement="top">
              <CardMedia
                component="img"
                image={resumeIcon}
                alt="download resume"
              ></CardMedia>
              </Tooltip>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Card sx={cardStyleInfo}>
            <CardContent>
              <Typography variant="h7">
              In addition to the completed projects that I have chosen to include in
        this portfolio, I have many more projects that are either
        works-in-progress or back-end only on my GitHub account which is linked
        below. Most of these projects were completed as part of the bootcamp
        curriculum and each one uses a variety of platforms. Please feel free to
        reach out to me on any of the following platforms.
        <br />I look forward to hearing from you!         Finally, I have included a downloadable copy of my resume for your
        viewing.         Thank you for taking the time to view my portfolio and consider me for
        contract or employment!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
