import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <Grid item xs={12} sm={4} md={4}>
      <Card sx={{ minWidth: 275,  border: 0,  boxShadow: 0 }}>
        <CardMedia
          component="img"
          style={{ width: "auto", height: "80px", margin: "0 auto" }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5, textAlign:'left' }} color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
