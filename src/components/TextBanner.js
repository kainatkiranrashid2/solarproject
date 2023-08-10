import React from "react";
import useStyles from "../styles and css/styles";
import { Box, Typography } from "@material-ui/core";
import { styled } from "@mui/material/styles";

const TextBanner = () => {
  const StyledTypography = styled(Typography)(({ theme, sx }) => ({
    ...sx,
  }));
  const StyledBox = styled(Box)(({ theme, sx }) => ({
    ...sx,
    backgroundColor: "#3363AE",
  }));
  const classes = useStyles();

  return (
    <StyledBox sx={{ width: "100% " }}>
      <StyledTypography className={classes.textBanner}>
        Go Solar in time, Save big on every Dime!
      </StyledTypography>
    </StyledBox>
  );
};

export default TextBanner;
