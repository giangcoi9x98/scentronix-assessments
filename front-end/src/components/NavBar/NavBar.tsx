'use client';

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import MonkeyLogo from '@app/images/monkey_logo.png';
import Link from "next/link";
import { NavStyledComponent, styles } from "./NavBar.styles";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavStyledComponent className={styles.root}>
      <div className={styles.logo}>
        <Image src={MonkeyLogo} alt={"logo"} width={100} height={100} />
      </div>
      <AppBar position="static" className={styles.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={styles.mobileMenuButton}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <div className={styles.navLinks}>
            <Link href="/shop" passHref>
              <Button className={`${styles.navButton} ${router.pathname === '/shop' ? styles.activeNavButton : ''}`}>Shop</Button>
            </Link>
            <Link href="/" passHref>
              <Button className={`${styles.navButton} ${router.pathname === '/' ? styles.activeNavButton : ''}`}>Recipes</Button>
            </Link>
            <Link href="/learn" passHref>
              <Button className={`${styles.navButton} ${router.pathname === '/learn' ? styles.activeNavButton : ''}`}>Learn</Button>
            </Link>
            <Link href="/about" passHref>
              <Button className={`${styles.navButton} ${router.pathname === '/about' ? styles.activeNavButton : ''}`}>About</Button>
            </Link>
            <Link href="/blog" passHref>
              <Button className={`${styles.navButton} ${router.pathname === '/blog' ? styles.activeNavButton : ''}`}>Blog</Button>
            </Link>
          </div>
          <div className={styles.mobileMenu}>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link href="/shop" passHref>
                  <Button color={router.pathname === '/shop' ? 'primary' : 'inherit'}>
                    Shop
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/" passHref>
                  <Button color={router.pathname === '/' ? 'primary' : 'inherit'}>
                    Recipes
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/learn" passHref>
                  <Button color={router.pathname === '/learn' ? 'primary' : 'inherit'}>
                    Learn
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/about" passHref>
                  <Button color={router.pathname === '/about' ? 'primary' : 'inherit'}>
                    About
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/blog" passHref>
                  <Button color={router.pathname === '/blog' ? 'primary' : 'inherit'}>
                    Blog
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/categories" passHref>
                  <Button color={router.pathname === '/categories' ? 'primary' : 'inherit'}>
                    Categories
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/collections" passHref>
                  <Button color={router.pathname === '/collections' ? 'primary' : 'inherit'}>
                    Collection
                  </Button>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/resource" passHref>
                  <Button color={router.pathname === '/resource' ? 'primary' : 'inherit'}>
                    Resource
                  </Button>
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <div className={styles.secondLine}>
        <Link href="/categories" passHref>
          <Button className={`${styles.navButtonSecondLine} ${router.pathname === '/categories' ? styles.activeNavButtonSecondLine : ''}`}>Categories</Button>
        </Link>
        <Link href="/collections" passHref>
          <Button className={`${styles.navButtonSecondLine} ${router.pathname === '/collections' ? styles.activeNavButtonSecondLine : ''}`}>Collection</Button>
        </Link>
        <Link href="/resource" passHref>
          <Button className={`${styles.navButtonSecondLine} ${router.pathname === '/resource' ? styles.activeNavButtonSecondLine : ''}`}>Resource</Button>
        </Link>
      </div>
    </NavStyledComponent>
  );
};

export default Navbar;
