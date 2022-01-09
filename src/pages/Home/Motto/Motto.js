import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import motto from "../../../images/treatment.png";

const Motto = () => {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={motto} alt="" style={{ width: 400 }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Exceptional Dental Care, <br />
            On Your Terms
          </Typography>
          <Typography sx={{ marginTop: 3 }} variant="h6" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            magnam dignissimos corporis ducimus iure maxime amet ad suscipit
            recusandae incidunt, cupiditate placeat reprehenderit at? Cum
            explicabo deleniti optio id obcaecati dolorum deserunt nesciunt
            alias minima ab culpa expedita, cumque dolore? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Impedit fugiat at odit modi
            tenetur accusantium laudantium libero nulla rem atque.
          </Typography>
          <Button
            variant="contained"
            style={{ backgroundColor: "#5CE7ED", marginTop: "25px" }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Motto;
