import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography } from '@mui/material';
import './Banner.css';

const bannerBg = {
    background: `url(${bg})`,
    
}
const verticalCenter = {
    display: 'flex',
    alignItems: "center",
    height: 400,
    
}


const Banner = () => {
    return (
        <Container className='chair' style={{bannerBg}}  sx={{ flexGrow: 1, my:3 }}>
      <Grid container spacing={2}>
        <Grid  item style={{...verticalCenter,textAlign:'left'}} xs={12} md={6}>
            <Box >
          <Typography variant='h3' sx={{color:'white'}}>
              Your New Smile <br /> Starts Here
          </Typography>
          <Typography variant='h6' sx={{my: 3, fontSize: 14, fontWeight: 300, color: 'gray'}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque voluptatibus expedita, amet rem itaque magni dolores iure eum culpa dicta? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, et.
          </Typography>
          <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>Get Appoitment</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{width: "400px"}} src={chair} alt="" />
        </Grid>
        
      </Grid>
    </Container>
    );
};

export default Banner;