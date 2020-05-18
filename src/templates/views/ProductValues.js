import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";

// images
import fastTicker from "../../images/aboutPage/fastTicker.png";
import questionImage from "../../images/aboutPage/question.png";
import rewardImage from "../../images/aboutPage/reward.png";

const styles = (theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.spreadIt.aboutBackground.backgroundColor,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 80,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    textTransform: "uppercase",
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="https://raw.githubusercontent.com/mui-org/material-ui/master/docs/public/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={fastTicker} alt="ticker" />
              <Typography variant="h6" className={classes.title}>
                Get help fast
              </Typography>
              <Typography variant="h5">
                {
                  "The higher your bounty is, the more likely your question will be answered"
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={questionImage}
                alt="question"
              />
              <Typography variant="h6" className={classes.title}>
                No stupid questions
              </Typography>
              <Typography variant="h5">
                {"You can ask anything! Need help with your cooking homework?"}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={rewardImage} alt="clock" />
              <Typography variant="h6" className={classes.title}>
                Earn Points
              </Typography>
              <Typography variant="h5">
                {
                  "Homework too easy for you? Give back to the community by helping them complete their work."
                }
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
