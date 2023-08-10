import React from "react";
import bannerimage from "../assets/bannerimage.svg";
import { Box } from "@material-ui/core";
import { styled } from "@mui/material/styles";

const Banner = () => {
  const StyledBox = styled(Box)(({ theme, sx }) => ({
    ...sx,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2em 0",
  }));
  return (
    <StyledBox >
      <img src={bannerimage} />
    </StyledBox>
  );
};

export default Banner;
