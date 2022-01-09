import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

/* import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button'; */


const PatientFeedback = () => {
  return (
      <Container>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={12} md={6} sx={{ textAlign:'left', mt: 10}}>
  <Typography variant="h6" sx={{  fontWeight: 600, color: "#5CE7ED" }}>
          Testimonial
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          What`s Our Patients <br />
          Say`s
        </Typography>
  </Grid>
  <Grid item xs={12} md={6} sx={{textAlign:'right'}}>
  <FormatQuoteIcon
          sx={{ fontWeight: 700, fontSize: 300, color: "#b1f0ec",  }}
        ></FormatQuoteIcon>
  </Grid>

</Grid>
   </Container>
  );
};

export default PatientFeedback;
