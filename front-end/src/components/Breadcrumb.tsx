import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Breadcrumb = () => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ mb: 2, overflowX: 'auto' }} // Ensure breadcrumbs are scrollable on smaller screens
    >
      <Link
        underline="hover"
        color="inherit"
        href="/"
        sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        Recipes
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/bread"
        sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        Breads
      </Link>
      <Typography
        color="text.primary"
        sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        Quick Bread
      </Typography>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
