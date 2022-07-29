import React from 'react'
import {NavLink} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// Import bootsrap templates to make the page interactive

function NavBar() {
  return (
    <div>
    <h1 style={{textAlign: 'center'}}>Tech News</h1>
     <Box sx={{ flexGrow: 4}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink style={{ marginLeft: "50px", marginRight: "20px" }} to="/">
    <button >
      {" "}
      Home
    </button>
  </NavLink>
  <NavLink style={{ marginLeft: "50px", marginRight: "20px" }} to="/postblog">
    <button>
      {" "}
      PostBlog
    </button></NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar