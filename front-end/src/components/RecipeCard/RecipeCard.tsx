// pages/RecipeCard.tsx

import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import PropertyBox from "../PropertyBox";
import { Add, Schedule, GroupWorkOutlined, Print } from "@mui/icons-material";
import { button, imageWrapper } from "./RecipeCard.styles";

interface RecipeCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  prepTime: string;
  bakeTime: string;
  totalTime: string;
  makes: string;
}

const RecipeCard: FC<RecipeCardProps> = ({
  title,
  description,
  image,
  prepTime,
  bakeTime,
  totalTime,
  makes,
}) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, maxWidth: 800, margin: 'auto' }}>
      <Box sx={{ flex: 1 }}>
        <CardContent sx={{ padding: { xs: '20px', md: '30px' } }}>
          <Typography
            component="div"
            sx={{ fontWeight: 'bold', fontSize: { xs: '24px', md: '36px' } }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            mt={2}
            sx={{ textAlign: 'justify', fontSize: { xs: '14px', md: '16px' } }}
          >
            {description}
          </Typography>
          <Box mt={2} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
            <PropertyBox
              title={"PREP"}
              value={prepTime}
              icon={<Schedule fontSize="small" />}
            />
            <PropertyBox
              title={"BAKE TIME"}
              value={bakeTime}
              icon={<Schedule fontSize="small" />}
            />
            <PropertyBox
              title={"TOTAL"}
              value={totalTime}
              icon={<Schedule fontSize="small" />}
            />
          </Box>
          <Box sx={{ display: 'flex', bgcolor: 'grey', height: 2, my: 2 }} />
          <Box mt={2} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <PropertyBox
              title={"YIELD"}
              value={makes}
              icon={<GroupWorkOutlined fontSize="small" />}
            />
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                variant="outlined"
                startIcon={<Add fontSize="small" />}
                sx={button}
                color="inherit"
              >
                Save Recipe
              </Button>
              <Button
                variant="outlined"
                startIcon={<Print fontSize="small" />}
                sx={button}
                color="inherit"
              >
                Print
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Box>
      <Box sx={imageWrapper}>
        <Image
          src={image}
          alt={title}
          layout="responsive"
          objectFit="cover"
          width={400}
          height={400}
          quality={100}
        />
      </Box>
    </Card>
  );
};

export default RecipeCard;
