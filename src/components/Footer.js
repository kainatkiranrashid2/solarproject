import React from "react";
import useStyles from "../styles and css/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const Footer = () => {
  const StyledTypography = styled(Typography)(({ theme, sx }) => ({
    ...sx,
  }));
  const StyledBox = styled(Box)(({ theme, sx }) => ({
    ...sx,
  }));
  const classes = useStyles();

  return (
    <StyledBox sx={{ width: "100% ", marginTop: "2em" }}>
      <StyledTypography className={classes.bannerText}>
        © 2023 Solar Dime Time, All Rights Reserved.{" "}
      </StyledTypography>
      <Grid container spacing={1}>
        <Grid textAlign="center" item xs={6} md={3}>
          <a href="#" className={classes.footerAnchors}>
            Privacy Policy
          </a>
        </Grid>
        <Grid item textAlign="center" xs={6} md={3}>
          <a href="#" className={classes.footerAnchors}>
            Terms and Conditions
          </a>
        </Grid>
        <Grid item textAlign="center" xs={6} md={3}>
          <a href="#" className={classes.footerAnchors}>
            Subscribe
          </a>
        </Grid>
        <Grid item textAlign="center" xs={6} md={3}>
          <a href="#" className={classes.footerAnchors}>
            Contact us
          </a>
        </Grid>
      </Grid>

      <StyledTypography className={classes.footerEnd}>
        This is an advertisement.
      </StyledTypography>
    </StyledBox>
  );
};

export default Footer;
