import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {},
  mainRoot: {
    [theme.breakpoints.down("sm")]: {
      height: "200vh",
      marginTop: ".5em",
      // backgroundImage: `linear-gradient(180deg, #FFFFE9 0%, #A7D4FF 100%)`,
    },
    [theme.breakpoints.up("sm")]: {
      width: "80vw",
      // height: "100vh",
      marginTop: "2em",
      margin: "0 auto",
      // backgroundImage: `linear-gradient(180deg, #FFFFE9 0%, #A7D4FF 100%)`,
    },
  },
  qsicon: {
    height: "2em !important",
    [theme.breakpoints.down("sm")]: {
      height: "1.5em",
    },
    [theme.breakpoints.up("xs")]: {
      height: "2em",
    },
    [theme.breakpoints.up("sm")]: {
      height: "3em",
    },
  },
  billStep: {
    padding: ".25em 2.5em !important",
    [theme.breakpoints.down("xs")]: {
      padding: ".25em 2em !important",
    },
  },
  otherStep: {
    padding: ".25em 1.5em !important",
    [theme.breakpoints.down("xs")]: {
      padding: ".25em 1em !important",
    },
  },
  stepButton: {
    textTranform: "none",
    backgroundColor: "white",
    fontFamily: "Poppins !important",
    fontWeight: "400 !important",
    fontSize: "14px !important",
    // lineHeight: "46.95px !important",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontWeight: "500 !important",
      fontSize: "11.5px !important",
    },
  },
  completed: {
    "& .MuiButtonBase-root .MuiButton-root": {
      padding: "0 !important",
    },
    backgroundColor: "blue",
    textTranform: "none",

    backgroundColor: "#fff !important",
    fontFamily: "Poppins !important",
    fontWeight: "500 !important",
    fontSize: "15px !important",
    padding: "0 !important",
    // lineHeight: "46.95px !important",
    textAlign: "center",
    width: "100vw !important",
    padding: ".25em 2em !important",
    [theme.breakpoints.down("xs")]: {
      padding: ".25em 1.25em !important",
      fontWeight: "500 !important",
      fontSize: "12.5px !important",
    },
  },
  headerMain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  selectedButton: {
    backgroundColor: "gray !important", // Change this to your desired background color
    color: "white !important", // Change this to your desired text color
  },
  questionsHeaderMain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
  },

  headerImage: {
    [theme.breakpoints.down("sm")]: {
      height: "6em",
      width: "11em",
    },
    [theme.breakpoints.up("sm")]: {
      height: "3em",
    },
    // width: "7em",
  },
  headerBox: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
  },
  headerImageScr: {
    [theme.breakpoints.down("sm")]: {
      height: "5em",
      width: "11em",
      marginTop: "1.5em",
    },
    [theme.breakpoints.up("sm")]: {
      height: "3em",
    },
  },
  mainTypo: {
    color: "#28ACF5 !important",
    lineHeight: "31.5px !important",
    fontFamily: "Nunito !important",
    fontWeight: "600 !important",
    margin: " 1em 0 !important",
    padding: "0 1em !important",
    textAlign: "center !important",
    fontSize: "12px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
      lineHeight: "25.5px !important",
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "16px !important",
      lineHeight: "20.5px !important",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "20px !important",
      lineHeight: "22.5px !important",
    },
  },
  qBtn: {
    borderRadius: "23px !important",
    padding: "1em 2em !important",
    color: "#FFF !important",

    // backgroundColor: "#F8F8F8 !important",
    display: "flex",
    position: "relative", // Enable positioning context for the button
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Poppins !important",
    fontWeight: "500 !important",
    fontSize: "12px !important",
    lineHeight: "46.95px",
    textAlign: "center",
    color: "#6B6B6B !important",
    gap: theme.spacing(0.25), // Adjust the spacing as desired
    marginTop: "1em !important",
    [theme.breakpoints.up("xs")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px !important",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "16px !important",
    },
    "&:hover": {
      "&::before": {
        borderRadius: "23px !important",
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        color: "white",
        opacity: "0.1",
        backgroundColor: "#28ACF5", // Adjust the color as needed
        top: "5px", // Adjust as needed to position the rectangle below the button
        left: "10px", // Adjust as needed to position the rectangle to the left of the button
        // zIndex: -1,
      },
    },
    "& .MuiButton-label": {
      marginTop: "1em",
      height: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "4em ",
    },
  },
  selectedChoice: {
    backgroundColor: "blue !important",
  },
  qBtnSimple: {
    borderRadius: "23px !important",
    padding: "1em 2em !important",
    position: "relative", // Enable positioning context for the button
    backgroundColor: "#F8F8F8 !important",
    color: "#6B6B6B",
    fontFamily: "Poppins !important",
    fontWeight: "500 !important",
    fontSize: "16px !important",
    lineHeight: "46.95px",
    textAlign: "center",
    marginTop: "1em !important",
    flex: 1,
    minWidth: "100%",
    [theme.breakpoints.up("xs")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px !important",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "16px !important",
    },
    "&:hover": {
      "&::before": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        color: "whtie",
        borderRadius: "23px !important",
        opacity: "0.2",
        backgroundColor: "#28ACF5", // Adjust the color as needed
        // Adjust the color as needed
        top: "05px", // Adjust as needed to position the rectangle below the button
        left: "10px", // Adjust as needed to position the rectangle to the left of the button
        // zIndex: -1,
      },
    },
  },
  qText: {
    fontFamily: "Poppins !important",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "31px",
    textAlign: "center",
    color: "#0779B8",
    marginTop: ".5em !important",
    animation: "$fadeIn 1s ease-in-out",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  stepSettings: {
    display: "flex",
    justifyContent: "space-between ",
    alignItems: "center",
    width: "100% !important",
    [theme.breakpoints.down("xs")]: {
      width: "100vw !important",
    },
  },
  backButton: {
    "& .MuiSvgIcon-root": {
      fontSize: 14, // Adjust the size to your desired value
      width: "2em", // Adjust the width to the same value as fontSize
      height: "2em",
      padding: 0,
      color: "#535353", // Adjust the height to the same value as fontSize
    },
    borderRadius: "6px",
    backgroundColor: "#D2D2D2 !important", // Change the background color of the button
  },
  forwardButton: {
    backgroundColor: "#28ACF5 !important",
    padding: " .5em !important",
    borderRadius: "6px",
    fontFamily: "Nunito !important",
    fontWeight: "600 !important",
    fontSize: "12px !important",
    lineHeight: "19.5px",
    textAlign: "center",
    // Adjust the spacing as desired
    "& .MuiSvgIcon-root": {
      fontSize: 14, // Adjust the size to your desired value
      width: "2em", // Adjust the width to the same value as fontSize
      height: "2em",
      padding: 0,
    },
    color: "white !important", // Change the background color of the button
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
      "&.MuiOutlinedInput-root ": {
        border: "none",
      },
      "& .MuiInput-underline:before": {
        borderBottom: "none",
      },
      "& .MuiInput-underline:after": {
        borderBottom: "none",
      },
    },
    marginTop: "1em !important",
    backgroundColor: "white",
    outline: "none !important",
    display: "flex",
    justifyContent: "center",
    borderRadius: "2em !important",
    boxShadow: "8px 5px #a6a6a6",
    width: "20em !important",
    [theme.breakpoints.down("xs")]: {
      width: "17em !important",
    },
  },
  agreementTypo: {
    color: "#595959 !important",
    lineHeight: "14px !important",
    fontFamily: "Nunito !important",
    fontWeight: "600 !important",
    margin: "2em 0 !important",
    // padding: "0 1em !important",headerImage
    textAlign: "center !important",
    fontSize: "10px !important",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px !important",
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "19px !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px !important",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "16px !important",
    },
  },
  lastq: {
    width: "20em !important",
    [theme.breakpoints.down("xs")]: {
      width: "18em !important",
    },
  },
  testText: {
    color: "#28ACF5 !important",
    lineHeight: "19.5px !important",
    fontFamily: "Nunito !important",
    fontWeight: "700 !important",
    // padding: "0 1em !important",headerImage
    textAlign: "center !important",
    // fontSize: "10px !important",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "15px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "17px !important",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "18px !important",
    },
  },
  textBanner: {
    color: "#FFF !important",
    lineHeight: "15px !important",
    margin: "1em",
    fontFamily: "Nunito !important",
    fontWeight: "700 !important",
    padding: ".75em 1.5em !important",
    textAlign: "center !important",
    // fontSize: "10px !important",

    [theme.breakpoints.up("md")]: {
      fontSize: "20px !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "18px !important",
    },

    [theme.breakpoints.up("xs")]: {
      fontSize: "17px !important",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px !important",
    },
  },
  bannerText: {
    color: "#4E4F51 ",
    lineHeight: "20px !important",
    fontFamily: "Nunito !important",
    fontWeight: "700 !important",
    textAlign: "center !important",
    // fontSize: "10px !important",
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px !important",
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "13px !important",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "14px !important",
    },
  },
  footerEnd: {
    color: "#4E4F51 ",
    lineHeight: "20px !important",
    fontFamily: "Nunito !important",
    fontWeight: "700 !important",
    textAlign: "center !important",
    // fontSize: "10px !important",
    [theme.breakpoints.down("xs")]: {
      fontSize: "9px !important",
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "10px !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "11px !important",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "12px !important",
    },
  },
  footerAnchors: {
    color: "#2A4E96",
    lineHeight: "15px !important",
    fontFamily: "Nunito !important",
    fontWeight: "500 !important",
    textAlign: "center !important",
    // fontSize: "10px !important",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("xs")]: {
      fontSize: "13px !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px !important",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "15px !important",
    },
  },
}));
export default useStyles;
