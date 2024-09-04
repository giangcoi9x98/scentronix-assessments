import React from "react";
import { Box, Container, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import Image from "next/image"
import BreadImage from '@app/images/bread.png';

export default function LearnPage() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>
        How to Make a Cake
      </Typography>

      <Box my={4} textAlign="center">
        <Image
          src={BreadImage}
          alt="Delicious Cake"
          width={600}
          height={400}
          layout="responsive"
        />
      </Box>

      <Typography variant="h5" gutterBottom>
        Ingredients
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="1 1/2 cups all-purpose flour" />
        </ListItem>
        <ListItem>
          <ListItemText primary="1 cup granulated sugar" />
        </ListItem>
        <ListItem>
          <ListItemText primary="1/2 cup unsalted butter" />
        </ListItem>
        <ListItem>
          <ListItemText primary="2 large eggs" />
        </ListItem>
        <ListItem>
          <ListItemText primary="1/2 cup milk" />
        </ListItem>
        <ListItem>
          <ListItemText primary="1 1/2 tsp baking powder" />
        </ListItem>
        <ListItem>
          <ListItemText primary="1/4 tsp salt" />
        </ListItem>
        <ListItem>
          <ListItemText primary="1 tsp vanilla extract" />
        </ListItem>
      </List>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>
        Instructions
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Preheat your oven to 350°F (175°C). Grease and flour a 9-inch round cake pan." />
        </ListItem>
        <ListItem>
          <ListItemText primary="In a medium bowl, whisk together the flour, baking powder, and salt." />
        </ListItem>
        <ListItem>
          <ListItemText primary="In a large bowl, cream the butter and sugar together until light and fluffy." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Beat in the eggs one at a time, then stir in the vanilla extract." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Gradually add the flour mixture to the butter mixture, alternating with the milk, beginning and ending with the flour mixture." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Pour the batter into the prepared pan and smooth the top." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bake for 30-35 minutes, or until a toothpick inserted into the center comes out clean." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Allow the cake to cool in the pan for 10 minutes, then transfer to a wire rack to cool completely." />
        </ListItem>
      </List>
    </Container>
  );
}
