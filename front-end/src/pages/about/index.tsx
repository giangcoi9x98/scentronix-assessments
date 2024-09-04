import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
export default function AboutPage() {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        All About Cats
      </Typography>

      <Card sx={{ maxWidth: 600, marginBottom: 4 }}>
        <CardMedia
          component="img"
          alt="Cat Image"
          height="300"
          image="https://loremflickr.com/200/200?random=1"
          loading="eager"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            Cats are amazing creatures!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cats are small, carnivorous mammals that are often kept as pets.
            They are known for their independence, agility, and playful
            behavior. Cats have been associated with humans for thousands of
            years and have developed a variety of roles, from pest control to
            companionship.
          </Typography>
        </CardContent>
      </Card>

      <Button variant="contained" color="primary">
        Learn More
      </Button>
    </Container>
  );
}
