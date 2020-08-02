import React from "react";

//Assets
import Sport from "../Assets/sport.png";

//Material UI (Styles)
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
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
    backgroundImage: `url(${Sport})`,
    backgroundPosition: "right 0% bottom 60%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "50%",
    transition: "0.4s",
    "&:hover": {
      transition: "0.4s",
    },
    boxShadow: "0px 3px 6px #00000029",
  },
  buttom: {
    display: "flex",
    backgroundColor: fade("#EB5E28", 1),
    borderRadius: "50px",
    color: "#FFFCF2",
    fontSize: "1em",
    width: "70%",
    height: "6vh",
    transition: "0.4s",
    "&:hover": {
      backgroundColor: fade("#EB5E28", 1),
      transition: "0.4s",
    },
  },
  textAlign: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  impactWord: {
    fontSize: "3em",
    color: "#EB5E28",
    marginBottom: "0.5em",
  },
  grayTitle: {
    fontSize: "2em",
    color: "#CCC5B9",
    marginBottom: "0.5em",
  },
  phaseTop: {
    fontSize: "1.5em",
    color: "#403D39",
  },
  phase: {
    marginBottom: "1em",
    fontSize: "1.5em",
    color: "#403D39",
  },
  text: {
    alignSelf: "center",
    marginLeft: "10em",
  },
});

export default function AccessoriesArea() {
  const classes = Style();

  return (
    <Box className={classes.all}>
      <Box className={classes.boxArea}>
        <Box className={classes.text}>
          <div className={classes.textAlign}>
            <div className={classes.grayTitle}>PÓS-VENDA</div>
            <div className={classes.impactWord}>AUTOMÓVEIS</div>
            <div className={classes.phaseTop}>Conheça os nossos</div>
            <div className={classes.phase}>serviços de acessórios</div>
            <Button className={classes.buttom}>SAIBA MAIS</Button>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
