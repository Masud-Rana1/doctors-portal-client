import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BlogNews = () => {
  return (
    <Container sx={{ marginTop: 10 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: "#b1f0ec" }}>
          OUR BLOG
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 600 }}>
          From Our Blog News
          
        </Typography>
      </Box>

      <Grid
        container
        rowSpacing={1}
        marginTop={10}
        columnGap={5}
        rowGap={5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Card sx={{ maxWidth: 345, bgcolor: "#5CE7ED", color: "white" }}>
          <Box sx={{ textAlign: "left", mx: 2, mt: 5 }}>
            <Typography variant="h6" sx={{ color: "#99f2ee" }}>
              Masud Rana
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              22 Aug, 2018
            </Typography>
          </Box>
          <CardContent>
            <Typography
              sx={{ textAlign: "left", mt: 5, fontWeight: 600 }}
              variant="h5"
            >
              Check at least a doctor in a Year for Your teeth
            </Typography>
          </CardContent>
          <Box sx={{ textAlign: "left", mx: 2 }}>
            <ArrowForwardIcon sx={{ fontSize: 100 }}></ArrowForwardIcon>
          </Box>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <Box sx={{ display: "flex", justifyContent: "start", mt: 3 }}>
            <Stack>
              <Avatar sx={{ mx: 1, mt: 1 }} alt="Remy Sharp" src={people1} />
            </Stack>
            <Box sx={{ textAlign: "left", mx: 1 }}>
              <Typography variant="h6">Dr. craudi</Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                19 april, 2019
              </Typography>
            </Box>
          </Box>

          <CardContent>
            <Typography
              sx={{ textAlign: "left", mt: 3, mb: 3, fontWeight: 600 }}
              variant="h5"
            >
              Two times of brush in a day can keep you healthy
            </Typography>
            <Typography
              sx={{ mt: 1, textAlign: "left", fontWeight: 600 }}
              variant="body2"
              color="text.secondary"
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lorem ipsum
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <Box sx={{ display: "flex", justifyContent: "start", mt: 3 }}>
            <Stack>
              <Avatar sx={{ mx: 1, mt: 1 }} alt="Remy Sharp" src={people2} />
            </Stack>
            <Box sx={{ textAlign: "left", mx: 1 }}>
              <Typography variant="h6">Dr. jhon michle</Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                23 april,2019
              </Typography>
            </Box>
          </Box>

          <CardContent>
            <Typography
              sx={{ textAlign: "left", mt: 3, mb: 3, fontWeight: 600 }}
              variant="h5"
            >
              The Tooth Cancer is taking a challenge
            </Typography>
            <Typography
              sx={{ mt: 1, textAlign: "left", fontWeight: 600 }}
              variant="body2"
              color="text.secondary"
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lorem ipsum
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

export default BlogNews;
