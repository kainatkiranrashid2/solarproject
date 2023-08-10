import React from "react";
import { Box, Typography } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import useStyles from "../styles and css/styles";
import headerImage from "../assets/headerImage.svg";
import solarSecure from "../assets/solarsecure.png";

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
          src={headerImage}
          alt="headerImage"
          className={classes.headerImage}
        />
        <img
          src={solarSecure}
          alt="headerImage"
          className={classes.headerImageScr}
        />
      </StyledBox>
      {/* <StyledTypography className={classes.mainTypo}>
        See how much you can save by going Solar!
      </StyledTypography> */}
    </StyledBox>
  );
};

export default Header;
