import React from "react";
import { Box, Typography } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import lightening from "../assets/lightening.svg";
import people from "../assets/people.svg";

import useStyles from "../styles and css/styles";

const TestimonialCard = () => {
  const classes = useStyles();

  const StyledTypography = styled(Typography)(({ theme, sx }) => ({
    ...sx,
  }));
  const StyledBox = styled(Box)(({ theme, sx }) => ({
    ...sx,
  }));

  return (
    <StyledBox
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginY: "1em",
      }}>
      <StyledBox
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <StyledBox
          sx={{
            height: "2.5em",
            display: "flex",
            flexDirection: "column",
            marginBottom: ".5em",

            justifyContent: "center",
            alignItems: "center",
          }}>
          <img
            src={people}
            alt="lightening"
            style={{ height: "100%", width: "auto" }}
          />
        </StyledBox>

        <StyledBox
          sx={{
            // maxWidth: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <StyledTypography className={classes.testText}>
            100,000+
          </StyledTypography>
          <StyledTypography className={classes.testText}>
            Satisfied Customers
          </StyledTypography>
        </StyledBox>
      </StyledBox>
      <StyledBox
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <StyledBox
          sx={{
            height: "2.5em",
            marginBottom: ".5em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <img
            src={lightening}
            alt="lightening"
            style={{ height: "100%", width: "auto" }}
          />
        </StyledBox>
        <StyledBox
          sx={{
            // maxWidth: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <StyledTypography className={classes.testText}>
            100,000+
          </StyledTypography>
          <StyledTypography className={classes.testText}>
            MW Electricity Saved
          </StyledTypography>
        </StyledBox>
      </StyledBox>
    </StyledBox>
  );
};

export default TestimonialCard;
