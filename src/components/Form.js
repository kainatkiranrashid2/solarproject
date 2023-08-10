import React, { useState, useMemo, useRef } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import styled from "@mui/material/styles/styled";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import axios from "axios";
import { Formik, Form } from "formik";
import useStyles from "../styles and css/styles";
import { ReactComponent as FlatIcon } from "../assets/flat.svg";
import { ReactComponent as ClockIcon } from "../assets/clock.svg";
import { ReactComponent as TickcircleIcon } from "../assets/tickcircle.svg";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import location from "../assets/location.svg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const steps = ["Residence", "Owner", "Bill ", "Address", "Submit!"];

const FormData = () => {
  const [residence, setResidence] = useState();
  const [owner, setOwner] = useState();
  const [bill, setBill] = useState();
  const formRef = useRef();
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    // Add other form fields and their validations here
  });

  const StyledBox = styled(Box)(({ theme, sx }) => ({
    ...sx,
    width: "100% !important",
  }));
  const StyledTypography = styled(Typography)(({ theme, sx }) => ({
    ...sx,
  }));

  const questions = useMemo(
    () => [
      {
        question: "Where do you live?",
        choices: ["Home", "Flat"],
        icons: [
          <HomeIcon className={classes.qsicon} />,
          <FlatIcon className={classes.qsicon} />,
        ],
      },
      {
        question: "Are you a home owner?",
        choices: [true, false],
        icons: [
          <TickcircleIcon className={classes.qsicon} />,
          <ClockIcon className={classes.qsicon} />,
        ],
      },
      {
        question: "Your average monthly power bill?",
        choices: ["$159 +", "$100 - $150", "Under $100"],
      },
      {
        question: "Please Verify Your Address for Local Incentives",
      },

      {
        question:
          "Please fill the following information to receive your FREE Quote!",
        fields: [
          {
            label: "Name",
            type: "text",
            name: "name",
            icon: <PersonOutlinedIcon />,
            place_holder: "Your Name",
          },
          {
            label: "Email Address",
            type: "email",
            name: "email",
            icon: <EmailOutlinedIcon />,
            place_holder: "Your Email",
          },
          {
            label: "Phone Number",
            type: "tel",
            name: "phone",
            icon: <LocalPhoneOutlinedIcon />,
            place_holder: "Your Phone Number",
          },
        ],
      },
    ],
    []
  );

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async (values) => {
    console.log("Form Values:", values);
    console.log(formRef.current.values);
    let config = {
      headers: {
        x_access_token: `9GdJaJxa7O0B-mk0fxzYNw`,
        x_user_id: 1,
      },
    };
    let data = {
      residency_type: formRef.current.values.residence, // home or flat
      home_owner_p: formRef.current.values.owner, // true or false
      avg_monthly_power_bill: formRef.current.values.bill, // text, amount ranges
      address_line_1: formRef.current.values.address,
      address_line_2: "",
      client_name: formRef.current.values.name,
      client_phone_nr: formRef.current.values.phone, // valid number
      client_email: formRef.current.values.email, // use email validation on front-end
    };

    await axios
      .post("http://132.148.76.150:8000/client_leads", data)
      .then(async (response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleStep = (step) => () => {
    console.log("kainat");
    console.log(step);
    console.log(activeStep + "kainat");
    setActiveStep(step);
  };

  return (
    <StyledBox>
      <Formik
        initialValues={{
          residence: "",
          owner: true,
          bill: "",
          address: "",
          name: "",
          email: "",
          phone: "",
          // Add other form fields here
        }}
        innerRef={formRef}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <StyledBox
              sx={{ width: "100% " }}
              display="flex"
              flexDirection="column"
              // justifyContent="space-between"
              alignItems="center"
            >
              <Stepper
                className={classes.stepSettings}
                nonLinear
                activeStep={activeStep}
                connector={""}
                padding="0"
              >
                {steps.map((label, index) => (
                  <Step completed={completed[index]} key={label} padding={0}>
                    <span
                      className={`${classes.stepButton} ${
                        index === 2 ? classes.billStep : classes.otherStep
                      }`}
                      onClick={handleStep(index)}
                      completed={completed[index]}
                      style={{
                        backgroundColor:
                          activeStep === index
                            ? "#28ACF5" // Active step background color
                            : completed[index]
                            ? "#fff" // Completed step background color
                            : "#fff", // Incomplete step background color

                        color:
                          activeStep === index
                            ? "#fff" // Active step background color
                            : completed[index]
                            ? "#535353" // Completed step background color
                            : "#535353", // Incomplete step background color
                        padding: "5px 10px",
                        borderRadius: "5px",
                      }}
                    >
                      {index === 2 ? " Bill   " : label}
                    </span>
                  </Step>
                ))}
              </Stepper>

              <>
                <StyledBox>
                  <Typography
                    className={classes.qText}
                    sx={{ mt: 1, mb: 1, py: 1 }}
                  >
                    {questions[activeStep].question}
                  </Typography>
                  <StyledBox className={classes.questionsHeaderMain}>
                    {activeStep === 0 ? (
                      // Step 2: Residence Step
                      questions[activeStep].choices.map((choice, index) => (
                        <Button
                          key={`choice-${index}`}
                          name="residence"
                          className={
                            activeStep === 2 ? classes.qBtnSimple : classes.qBtn
                          }
                          style={{
                            backgroundColor:
                              residence === choice ? "#D2D2D2" : "#F8F8F8",
                          }}
                          onClick={() => {
                            setFieldValue("residence", choice);
                            setTimeout(() => {
                              handleNext();
                            }, 500);
                            setResidence(choice);
                          }}
                          startIcon={
                            questions[activeStep].icons &&
                            questions[activeStep].icons[index]
                          }
                        >
                          {choice}
                        </Button>
                      ))
                    ) : activeStep === 1 ? (
                      questions[activeStep].choices.map((choice, index) => (
                        <Button
                          key={`choice-${index}`}
                          name="owner"
                          className={
                            activeStep === 2 ? classes.qBtnSimple : classes.qBtn
                          }
                          style={{
                            backgroundColor:
                              owner === choice ? "#D2D2D2" : "#F8F8F8",
                          }}
                          onClick={() => {
                            setFieldValue("owner", choice);
                            setTimeout(() => {
                              handleNext();
                            }, 500);

                            setOwner(choice);
                          }}
                          startIcon={
                            questions[activeStep].icons &&
                            questions[activeStep].icons[index]
                          }
                        >
                          {choice ? "Yes" : "No"}
                        </Button>
                      ))
                    ) : activeStep === 2 ? (
                      // Step 4: Bill Step
                      questions[activeStep].choices.map((choice, index) => (
                        <Button
                          key={`choice-${index}`}
                          name="bill"
                          className={
                            activeStep === 2 ? classes.qBtnSimple : classes.qBtn
                          }
                          style={{
                            backgroundColor:
                              bill === choice ? "#D2D2D2" : "#F8F8F8",
                          }}
                          onClick={() => {
                            setFieldValue("bill", choice);
                            setBill(choice);
                            setTimeout(() => {
                              handleNext();
                            }, 500);
                          }}
                          startIcon={
                            questions[activeStep].icons &&
                            questions[activeStep].icons[index]
                          }
                        >
                          {choice}
                        </Button>
                      ))
                    ) : activeStep === 3 ? (
                      <GooglePlacesAutocomplete
                        autocompletionRequest={{
                          types: ["address"],
                        }}
                        selectProps={{
                          value: values.add,
                          name: "add",
                          onChange: (address) =>
                            setFieldValue("address", address.label),

                          placeholder: "Enter your street address",

                          styles: {
                            container: (provided) => ({
                              ...provided,
                              position: "relative", // Add position relative to the container
                            }),
                            input: (provided) => ({
                              ...provided,
                              width: "16em",
                              height: "36px",
                              padding: "6px",
                              borderRadius: "32px  !important",
                              paddingLeft: "40px", // Adjust the padding to accommodate the icon
                              background: `url(${location}) no-repeat left center`, // Use the SVG icon as the background image
                              backgroundSize: "auto 24px", // Adjust the size of the icon
                            }),

                            indicatorsContainer: () => ({
                              display: "none", // Hide the dropdown indicators
                            }),

                            placeholder: (provided) => ({
                              ...provided,
                              position: "absolute", // Add position absolute to the placeholder
                              top: "50%",
                              transform: "translateY(-50%)", // Vertically center the placeholder
                              left: "50px", // Adjust the left position to create space for the icon
                            }),
                          },
                        }}
                        onLoadFailed={(error) =>
                          console.error(
                            "Could not load Google Places API",
                            error
                          )
                        }
                        debounce={300}
                        renderSuggestions={(
                          active,
                          suggestions,
                          onSelectSuggestion
                        ) => (
                          <div className="suggestion-container">
                            {suggestions.map((suggestion) => (
                              <div
                                key={suggestion.place_id}
                                className={`suggestion ${
                                  active ? "active" : ""
                                }`}
                                onClick={() =>
                                  onSelectSuggestion(
                                    suggestion,
                                    suggestion.place_id
                                  )
                                }
                              >
                                {suggestion.description}
                              </div>
                            ))}
                          </div>
                        )}
                        renderSuggestion={(suggestion) => (
                          <div>{suggestion.description}</div>
                        )}
                      />
                    ) : activeStep === 4 ? (
                      <Box className={classes.lastq}>
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "1em",
                          }}
                        >
                          {questions[activeStep].fields.map((field, index) => (
                            <TextField
                              id={`field-${index}`}
                              type={field.type}
                              placeholder={field.place_holder}
                              variant="standard"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    {field.icon}
                                  </InputAdornment>
                                ),
                                style: {
                                  outline: "none",
                                },
                              }}
                              className={classes.textField}
                              onChange={(e) =>
                                setFieldValue(field.name, e.target.value)
                              }
                              name={field.name}
                            />
                          ))}
                        </Box>
                        <StyledTypography className={classes.agreementTypo}>
                          By clicking Submit, you affirm you have read and agree
                          to the Terms and you agree Solar dime and its
                          employees may use automated technology to deliver
                          marketing calls, texts, or emails to the number or
                          email you provided regarding your project.
                        </StyledTypography>
                      </Box>
                    ) : (
                      ""
                    )}
                  </StyledBox>
                </StyledBox>
                <StyledBox
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    pt: 1,
                    mt: 1,
                  }}
                >
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                    startIcon={<KeyboardBackspaceIcon />}
                  ></Button>
                  <Button
                    onClick={
                      activeStep === steps.length - 1
                        ? handleSubmit
                        : handleNext
                    }
                    className={classes.forwardButton}
                    endIcon={<ArrowForwardIcon mr={3} />}
                  >
                    {activeStep === steps.length - 1 ? "Submit" : "Next Step"}
                  </Button>
                </StyledBox>
              </>
            </StyledBox>
          </Form>
        )}
      </Formik>
    </StyledBox>
  );
};

export default FormData;
