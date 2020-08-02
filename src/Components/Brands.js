import React from "react";

//Assets

//Material UI (Styles)
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const Style = makeStyles({
  all: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "10em",
    width: "100%",
    height: "vh",
  },
  boxArea: {
    width: "95%",
    height: "55vh",
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(180deg, #252422 50%, #403D39 50%)",
    transition: "0.4s",
    "&:hover": {
      transition: "0.4s",
    },
    boxShadow: "0px 3px 6px #00000029",
  },
});

export default function BrandsArea() {
  const classes = Style();

  return (
    <Box className={classes.all}>
      <Box className={classes.boxArea}></Box>
      <Box className={classes.text}></Box>
    </Box>
  );
}
