import React, { useState } from "react";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

//Assets
import Acessorioes1 from "../Assets/AudiKey.jpg";
import Acessorioes2 from "../Assets/AudiTop.jpg";
import Acessorioes3 from "../Assets/BMWCamera.jpg";
import Acessorioes4 from "../Assets/BMWCharger.jpg";
import Acessorioes5 from "../Assets/TeslaCharger.jpg";
import Acessorioes6 from "../Assets/TeslaMats.jpg";
import TeslaAP from "../Assets/TeslaAutomaticPilot.jpg";
import TeslaFC from "../Assets/TeslaCharger2.jpg";

//Material UI (Styles)
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
import AddIcon from "@material-ui/icons/Add";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const Style = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
  },
  mobileStepper: {
    alignSelf: "center",
  },
  all: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-aroud",
    alignSelf: "center",
    marginTop: "3em",
    width: "95%",
    marginLeft: "3em",
  },
  mostSell: {
    display: "flex",
    flexDirection: "column",
  },
  secTitle: {
    fontSize: "2em",
    fontWeight: "bold",
    color: "#1D2C40",
  },
  news: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  newsTitle: {
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#275673",
  },
  aligNews: {
    display: "flex",
    flexDirection: "column",
  },
  newsText: {
    fontSize: "1.2em",
  },
  charges: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bigTitle: {
    display: "flex",
    alignSelf: "center",
    fontSize: "2em",
    fontWeight: "bold",
    color: "#1D2C40",
  },
  align: {
    display: "flex",
    flexDirection: "row",
  },
  iconProp: {
    width: "20%",
    height: "20vh",
  },
  phases: {
    display: "flex",
    flexDirection: "column",
  },
  chaargerTitle: {
    fontSize: "1.5em",
    fontWeight: "bold",
    textAlign: "center",
    width: "20%",
  },
  alignCharges: {
    display: "flex",
    flexDirection: "row",
  },
  impact: {
    display: "flex",
    flexDirection: "row",
  },
  newImage: {
    width: "60%",
    marginRight: "1em",
  },
  spacing: {
    width: "2%",
  },
  line: {
    display: "flex",
    alignItems: "center",
  },
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const imagesVector = [
  {
    imgPath: Acessorioes1,
  },
  {
    imgPath: Acessorioes2,
  },
  {
    imgPath: Acessorioes3,
  },
  {
    imgPath: Acessorioes4,
  },
  {
    imgPath: Acessorioes5,
  },
  {
    imgPath: Acessorioes6,
  },
];

export default function AcessoriesArea() {
  const classes = Style();
  const [state, setState] = useState(0);
  const { activeStep } = state;
  const maxSteps = imagesVector.length;

  const handleStepChange = (activeStep) => {
    setState({ activeStep });
  };

  return (
    <div className={classes.all}>
      <div className={classes.align}>
        <div className={classes.charges}>
          <div className={classes.bigTitle}>Caregadores</div>
          <div className={classes.alignCharges}>
            <div className={classes.phases}>
              <FlashOnIcon
                style={{ color: "#275673" }}
                className={classes.iconProp}
              />
              <div className={classes.chaargerTitle}>
                Melhor usabilidade de bateria
              </div>
            </div>
            <div className={classes.phases}>
              <BatteryChargingFullIcon
                style={{ color: "#275673" }}
                className={classes.iconProp}
              />
              <p className={classes.chaargerTitle}>Menos tempo carregando</p>
            </div>
            <div className={classes.phases}>
              <AddIcon
                style={{ color: "#275673" }}
                className={classes.iconProp}
              />
              <p className={classes.chaargerTitle}>Mais alcance</p>
            </div>
          </div>
        </div>
        <div className={classes.mostSell}>
          <p className={classes.secTitle}>MAIS VENDIDOS</p>
          <div className={classes.root}>
            <AutoPlaySwipeableViews
              axis={Style.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {imagesVector.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img
                      className={classes.img}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="center"
              activeStep={activeStep}
              className={classes.mobileStepper}
            />
          </div>
        </div>
      </div>
      <div className={classes.impact}>
        <div className={classes.news}>
          <img alt="TeslaFC" src={TeslaFC} className={classes.newImage}></img>
          <div className={classes.spacing} />
          <div className={classes.aligNews}>
            <Link className={classes.newsTitle}>
              Conecte-se por cerca de 30 minutos e pegue uma xícara de café e
              pronto
            </Link>
            <p className={classes.newsText}>
              Pare na rede de carregamento mais rápida do mundo e em menos de 1
              hora carregue completamente sua bateria.
            </p>
            <div className={classes.line}>
              <LocationOnIcon />
              Encontre as localizações
            </div>
          </div>
        </div>
        <div className={classes.spacing} />
        <div className={classes.news}>
          <img alt="TeslaAP" src={TeslaAP} className={classes.newImage}></img>
          <div className={classes.aligNews}>
            <Link className={classes.newsTitle}>
              Todos os novos carros da Tesla são fornecidos com piloto
              automático
            </Link>
            <p className={classes.newsText}>
              Recursos completos de direção automática no futuro - por meio de
              atualizações de software projetadas para melhorar a funcionalidade
              ao longo do tempo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
