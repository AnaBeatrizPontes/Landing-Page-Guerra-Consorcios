import React from "react";

//Assets
import BackCar from "../Assets/wall.jpg";

//Material UI (Styles)
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const Style = makeStyles({
  boxArea: {
    width: "100%",
    height: "80vh",
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    backgroundImage: `url(${BackCar})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    transition: "0.4s",
    "&:hover": {
      transition: "0.4s",
    },
  },
});

export default function FirstBackGrourndImage() {
  const classes = Style();

  return <Box className={classes.boxArea}></Box>;
}
