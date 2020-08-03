import React from "react";

//Assets
import BMWC from "../Assets/BMWC.jpg";
import TeslaC from "../Assets/TeslaC.jpg";
import AudiC from "../Assets/AudiC.jpg";

//Material UI (Styles)
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const Style = makeStyles({
  all: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
    marginTop: "3em",
    width: "95%",
    height: "70vh",
    marginLeft: "3em",
    backgroundImage: "linear-gradient(180deg,  #275673 0%,  #1D2C40 100%)",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    marginTop: "1em",
    backgroundColor: "#FFFFFF",
    boxShadow:
      "0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginBottom: "25px",
  },
  container: {
    textAlign: "center",
    padding: "10px 20px",
  },
  spacing: {
    width: "2%",
  },
  cardTitle: {
    color: "#1D2C40",
    fontWeight: "bold",
    fontSize: "1.8em",
  },
  texts: {
    color: "#000000",
    textAlign: "center",
    fontSize: "1.2em",
  },
});

export default function BrandsArea() {
  const classes = Style();

  return (
    <Box className={classes.all}>
      <div className={classes.spacing} />
      <div className={classes.card}>
        <img
          alt="bmw"
          src={BMWC}
          style={{ width: "100%", height: "33vh" }}
        ></img>
        <div className={classes.container}>
          <p className={classes.cardTitle}>BMW</p>
          <p className={classes.texts}>
            O Novo BMW 330e Plug-In Híbrido representa o prazer de conduzir, a
            potência e a máxima eficiência, típicas da BMW. A tecnologia
            pioneira BMW eDrive torna possível obter uma autonomia acrescida.
          </p>
        </div>
      </div>
      <div className={classes.spacing} />
      <div className={classes.card}>
        <img alt="bmw" src={TeslaC} style={{ width: "100%" }}></img>
        <div className={classes.container}>
          <p className={classes.cardTitle}>Tesla</p>
          <p className={classes.texts}>
            O modelo S define um padrão da indústria para desempenho e
            segurança. O trem de força totalmente elétrico da Tesla oferece
            desempenho incomparável em todas as condições climáticas.
          </p>
        </div>
      </div>
      <div className={classes.spacing} />
      <div className={classes.card}>
        <img alt="bmw" src={AudiC} style={{ width: "100%" }}></img>
        <div className={classes.container}>
          <p className={classes.cardTitle}>Audi</p>
          <p className={classes.texts}>
            Conheça o Audi e-tron em uma experiência imersiva por todos os
            detalhes do carro.
          </p>
        </div>
      </div>
      <div className={classes.spacing} />
    </Box>
  );
}
