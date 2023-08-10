import React from "react";
import { ReactComponent as FinalPageImage } from "../assets/finalPageImage.svg";
import { Box } from "@material-ui/core";

const FinalPage = () => {
  const StyledBox = styled(Box)(({ theme, sx }) => ({ ...sx }));

  return (
    <StyledBox
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    ></StyledBox>
  );
};

export default FinalPage;
