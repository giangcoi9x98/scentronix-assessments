"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import { ItemResponse } from "@app/types/comom.types";

const BaseStaticPage = ({ story }: { story: ItemResponse }) => {
  if (!story) {
    return <p>Loading...</p>;
  }

  return (
    <Container sx={{ paddingX: { xs: 2, md: 4 }, paddingY: { xs: 3, md: 6 } }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
      >
        {story.title}
      </Typography>
      
      <Box 
        my={4}
        sx={{ 
          width: '100%', 
          height: 'auto', 
          position: 'relative', 
          aspectRatio: '16/9'
        }}
      >
        <Image
          src={story.image}
          alt={story.title}
          layout="fill"
          objectFit="cover"
        />
      </Box>
      
      <Typography 
        variant="body1" 
        gutterBottom 
        sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}
      >
        {story.description.replace(/<\/?[^>]+(>|$)/g, "")}
      </Typography>
    </Container>
  );
};

export default BaseStaticPage;
