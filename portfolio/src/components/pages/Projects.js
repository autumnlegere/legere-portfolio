import React from "react";

export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
        </div> 
    );
}

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import IconButton from '@mui/material/IconButton';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// function Projects() {
//     return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//             Autumn Legere
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//               <Button  
//                 sx={{ color: '#fff' }}
//                 varient="outlined"
//                 href="#about"
//                 onClick={() => handlePageChange('AboutMe')}
//                 >
//                 About Me
//               </Button>
//               <Button  
//                 sx={{ color: '#fff' }}
//                 varient="outlined"
//                 href="#projects"
//                 onClick={() => handlePageChange('Projects')}
//                 >
//                 Portfolio
//               </Button>
//               <Button  
//                 sx={{ color: '#fff' }}
//                 varient="outlined"
//                 href="#contact/resume"
//                 onClick={() => handlePageChange('ContactResume')}
//                 >
//                 Contact/Resume
//               </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// export default Projects;