import React from "react";
import { Box, Typography } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import useStyles from "../styles and css/styles";
import headerImage from "../assets/headerImage.svg";
import solarSecure from "../assets/solarsecure.png";
import FormData from "./Form";

const Header = () => {
  const StyledBox = styled(Box)(({ theme, sx }) => ({
    ...sx,
  }));
  const StyledTypography = styled(Typography)(({ theme, sx }) => ({
    ...sx,
  }));
  const classes = useStyles();

  return (
    <StyledBox className={classes.headerMain}>
      <StyledBox className={classes.headerBox}>
        <img
          src={solarSecure}
          alt="headerImage"
          className={classes.headerImageScr}
        />
        <img
          src={headerImage}
          alt="headerImage"
          className={classes.headerImage}
        />
      </StyledBox>
      <StyledTypography className={classes.mainTypo}>
        Get free quote & See how much you can save by going Solar!
      </StyledTypography>
      <FormData />
    </StyledBox>
  );
};

export default Header;
