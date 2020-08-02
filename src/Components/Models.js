import React, { useState } from "react";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

//Assets
import Lambor1 from "../Assets/lamborghini.png";
import Lambor2 from "../Assets/lamborghiniFromUp.png";
import Lambor3 from "../Assets/lamborghinis.png";
import Lambor4 from "../Assets/lamborghiniWithe.png";

//Material UI (Styles)
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";

const Style = makeStyles({
  all: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "5em",
    width: "100%",
    height: "vh",
  },
  boxArea: {
    width: "95%",
    height: "55vh",
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundImage: "linear-gradient(180deg, #252422 50%, #403D39 50%)",
    transition: "0.4s",
    "&:hover": {
      transition: "0.4s",
    },
    boxShadow: "0px 3px 6px #00000029",
  },
  slidesArea: {
    width: "30%",
    height: "50vh",
  },
  img: {
    height: "50vh",
    display: "block",
    overflow: "hidden",
    width: "100%",
  },
  textBox: {
    display: "flex",
    width: "30%",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: "10em",
  },
  spacing: {
    width: "20%",
  },
  impactWord: {
    fontSize: "3em",
    color: "#EB5E28",
    marginBottom: "0.5em",
  },
  phaseTop: {
    fontSize: "1.5em",
    color: "#FFFCF2",
  },
  phase: {
    marginBottom: "1em",
    fontSize: "1.5em",
    color: "#FFFCF2",
  },
  textAlign: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: "5em",
  },
  text: {
    alignSelf: "center",
    marginLeft: "10em",
  },
  buttom: {
    display: "flex",
    backgroundColor: "#EB5E28",
    borderRadius: "50px",
    color: "#FFFCF2",
    fontSize: "1em",
    width: "70%",
    height: "6vh",
    transition: "0.4s",
    "&:hover": {
      backgroundColor: "#EB5E28",
      transition: "0.4s",
    },
  },
});

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const imagesVector = [
  {
    imgPath: Lambor1,
  },
  {
    imgPath: Lambor2,
  },
  {
    imgPath: Lambor3,
  },
  {
    imgPath: Lambor4,
  },
];

export default function ModelsArea() {
  const classes = Style();
  const [state, setState] = useState(0);
  const { activeStep } = state;

  const handleStepChange = (activeStep) => {
    setState({ activeStep });
  };

  return (
    <Box className={classes.all}>
      <Box className={classes.boxArea}>
        <AutoPlaySwipeableViews
          className={classes.slidesArea}
          axis={Style.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {imagesVector.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  alt="Lamborghini"
                  className={classes.img}
                  src={step.imgPath}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <div className={classes.spacing}></div>
        <Box className={classes.textBox}>
          <Box className={classes.text}>
            {" "}
            <div className={classes.textAlign}>
              <div className={classes.impactWord}>Nossos Produtos</div>
              <div className={classes.phaseTop}>Tecnologia </div>
              <div className={classes.phaseTop}>Poder </div>
              <div className={classes.phaseTop}>Inovação </div>
              <div className={classes.phase}>E Liberdade</div>
              <Button className={classes.buttom}>SAIBA MAIS</Button>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
