import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";

import backgroundImage from "../../images/homework.jpg";
import AppIcon from "../../images/HWBounty-Logo.png";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(4),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  appIcon: {
    margin: 0,
  },
});

const ProductHero = (props) => {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        HWBounty
      </Typography>
      <img
        src={AppIcon}
        alt="HWBounty Icon"
        alight="center"
        className={classes.appIcon}
      />
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Get answers from peers and classmates or give answers for fun rewards!
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/signup"
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Get help today!
      </Typography>
    </ProductHeroLayout>
  );
};

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
