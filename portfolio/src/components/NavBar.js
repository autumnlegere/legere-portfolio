import React from "react";
import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

export default function NavBar({ currentPage, handlePageChange }) {
    return (
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Autumn Legere
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button  
                sx={{ color: '#fff' }}
                varient="outlined"
                href="#about"
                onClick={() => handlePageChange('AboutMe')}
                >
                About Me
              </Button>
              <Button  
                sx={{ color: '#fff' }}
                varient="outlined"
                href="#projects"
                onClick={() => handlePageChange('Projects')}
                >
                Portfolio
              </Button>
              <Button  
                sx={{ color: '#fff' }}
                varient="outlined"
                href="#contact/resume"
                onClick={() => handlePageChange('ContactResume')}
                >
                Contact/Resume
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
        // <header>
        //     <Box sx={{ flexGrow: 1 }}>
        //         <Grid container spacing={2}>
        //             <Grid xs={8}>
        //                 <h1>Autumn Legere</h1>
        //             </Grid>
        //             <Grid xs={4}>
        //                 <nav>
        //                     <Button 
        //                         varient="outlined"
        //                         href="#about"
        //                         onClick={() => handlePageChange('AboutMe')}>
        //                         About Me
        //                     </Button>
        //                     <Button 
        //                         varient="outlined"
        //                         href="#projects"
        //                         onClick={() => handlePageChange('Projects')}>
        //                         Portfolio
        //                     </Button>
        //                     <Button 
        //                         varient="outlined"
        //                         href="#contact/resume"
        //                         onClick={() => handlePageChange('ContactResume')}>
        //                         Contact/Resume
        //                     </Button>
        //                 </nav>
        //             </Grid>
        //         </Grid>
        //     </Box>
        // </header>
    );
}