"use client";
import BreadImage from "@app/images/bread.png";

import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const breads = [
  {
    id: 1,
    name: "Sourdough",
    image: BreadImage,
    description: "A tangy, chewy bread with a crisp crust.",
    price: "$5.00",
  },
  {
    id: 2,
    name: "Whole Wheat",
    image: BreadImage,
    description: "A hearty, nutty bread made with whole wheat flour.",
    price: "$4.50",
  },
  {
    id: 3,
    name: "Baguette",
    image: BreadImage,
    description:
      "A classic French bread with a crispy crust and soft interior.",
    price: "$3.00",
  },
  {
    id: 4,
    name: "Ciabatta",
    image: BreadImage,
    description: "An Italian bread with a crisp crust and airy interior.",
    price: "$4.00",
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  "& .MuiCardMedia-root": {
    height: 200,
    width: "100%",
    objectFit: "cover",
  },
  "& .MuiCardContent-root": {
    padding: theme.spacing(2),
  },
}));

const SellBread = () => {
  return (
    <Container maxWidth="md">
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "h4.fontSize",
            sm: "h3.fontSize", 
            md: "h2.fontSize",
          },
        }}
      >
        Freshly Baked Bread for Sale
      </Typography>
      <Grid container spacing={4}>
        {breads.map((bread) => (
          <Grid item xs={12} sm={6} md={3} key={bread.id}>
            <StyledCard>
              <Image
                src={BreadImage}
                alt="Delicious Cake"
                width={600}
                height={400}
                layout="responsive"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {bread.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {bread.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  {bread.price}
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Buy Now
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SellBread;
