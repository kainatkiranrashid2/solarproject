import React from "react";
import useStyles from "../styles and css/styles";
import { Box, Typography } from "@material-ui/core";
import { styled } from "@mui/material/styles";

const CTA = () => {
  const StyledTypography = styled(Typography)(({ theme, sx }) => ({
    ...sx,
    fontWeight: 600,
  }));
  const StyledBox = styled(Box)(({ theme, sx }) => ({
    ...sx,

    backgroundColor: "#3363AE",
  }));
  const classes = useStyles();

  return (
    <StyledBox
      sx={{
        width: "100% ",
        paddingBottom: "1em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledTypography className={classes.textBanner}>
        Receive your FREE Quote now!
      </StyledTypography>
      <StyledTypography
        className={classes.bannerText}
        style={{
          color: "white",
          marginBottom: ".5em",
        }}
      >
        Simple and Easy process so Why delay ?
      </StyledTypography>
      <StyledTypography
        className={classes.bannerText}
        style={{
          color: "white",
          marginBottom: ".5em",
        }}
      >
        Get Instant estimate of your potential Savings !
      </StyledTypography>

      <button
        className={classes.textBanner}
        style={{
          backgroundColor: "#28ACF5",
          border: "none",
          borderRadius: "5px",
          padding: ".5em 1em",
        }}
      >
        Get Free Quote
      </button>
    </StyledBox>
  );
};

export default CTA;
