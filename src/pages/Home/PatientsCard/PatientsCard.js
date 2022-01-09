import React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import { Container, Grid, Typography, Box } from "@mui/material";
import people3 from "../../../images/people-3.png";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const PatientsCard = () => {
  return (
    <Container>
      <Grid
        container
        rowSpacing={1}
        columnGap={5}
        rowGap={5}
        textAlign={"left"}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography sx={{ mt: 5 }} variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              illum laudantium a labore iure sequi voluptatum nesciunt impedit
              in, quo eaque vitae magni alias totam suscipit nihil mollitia
              reiciendis iusto!
            </Typography>
          </CardContent>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
            <Stack>
              <Avatar sx={{ mx: 1, mt: 1 }} alt="Remy Sharp" src={people1} />
            </Stack>
            <Box sx={{ textAlign: "left", mx: 1 }}>
              <Typography variant="h6" sx={{ color: "#99f2ee" }}>
                Winson Herry
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                California
              </Typography>
            </Box>
          </Box>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography sx={{ mt: 5 }} variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Soluta laboriosam
              eligendi reprehenderit consequatur commodi, ad magnam quos
              voluptate aut est porro animi rerum quis doloremque illo
              necessitatibus quas impedit molestias?
            </Typography>
          </CardContent>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
            <Stack>
              <Avatar sx={{ mx: 1, mt: 1 }} alt="Remy Sharp" src={people2} />
            </Stack>
            <Box sx={{ textAlign: "left", mx: 1 }}>
              <Typography variant="h6" sx={{ color: "#99f2ee" }}>
                Winson Herry
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                California
              </Typography>
            </Box>
          </Box>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography sx={{ mt: 5 }} variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              ex quam quibusdam totam earum aut blanditiis odio laborum! Debitis
              consectetur hic vel facilis blanditiis iusto quisquam ducimus
              facere! Eum, fugit.
            </Typography>
          </CardContent>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
            <Stack>
              <Avatar sx={{ mx: 1, mt: 1 }} alt="Remy Sharp" src={people3} />
            </Stack>
            <Box sx={{ textAlign: "left", mx: 1 }}>
              <Typography variant="h6" sx={{ color: "#99f2ee" }}>
                Winson Herry
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                California
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Container>
  );
};

export default PatientsCard;
