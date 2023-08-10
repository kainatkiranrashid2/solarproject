import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Header from "./components/Header";
import useStyles from "./styles and css/styles";
import FormData from "./components/Form";
import TestimonialCard from "./components/TestimonialCard";
import TextBanner from "./components/TextBanner";
import Banner from "./components/Banner";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const StyledBox = styled(Box)(({ theme, sx }) => ({ ...sx }));
  const classes = useStyles();

  return (
    <ThemeProvider>
      <StyledBox className={classes.mainRoot}>
        <Header />
        <TestimonialCard />
        <TextBanner />
        <Banner />
        <CTA />
        <Footer />
      </StyledBox>
    </ThemeProvider>
  );
}

export default App;
