import React from "react";

//Assets
import TeslaModelS from "../Assets/TeslaModelS.jpeg";
import TeslaModelX from "../Assets/TeslaModelX.jpg";
import TeslaModel3 from "../Assets/TeslaModel3_.jpg";
import AudiA3 from "../Assets/AudiA3.jpg";
import AudiA4 from "../Assets/AudiA4.jpg";
import AudiA7 from "../Assets/AudiA7.jpg";
import BMW530 from "../Assets/BMW530.jpg";
import BMWHibri from "../Assets/BMWHibri.jpg";
import BMWM2 from "../Assets/BMWM2.jpg";

//Material UI (Styles)
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import AirlineSeatReclineNormalIcon from "@material-ui/icons/AirlineSeatReclineNormal";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import StarIcon from "@material-ui/icons/Star";
import AdjustIcon from "@material-ui/icons/Adjust";

const Style = makeStyles({
  all: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    marginTop: "3em",
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  titles: {
    fontSize: "2em",
    fontWeight: "bold",
    color: "#1D2C40",
  },
  model: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  hLine: {
    border: "none",
    height: "15vh",
    width: "1px",
    backgroundColor: "#c9c0c6",
    marginRight: "1em",
    marginLeft: "1em",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    marginTop: "1em",
    backgroundColor: "#FFFFFF",
    marginBottom: "25px",
  },
  container: {
    textAlign: "center",
    padding: "10px 20px",
  },
  infos: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "3em",
  },
  data: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  boldBig: {
    fontSize: "1.2em",
    fontWeight: "bold",
    marginTop: "1em",
  },
  cards: {
    display: "flex",
    flexDirection: "row",
  },
  carModel: {
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#1D2C40",
  },
  spacing: {
    width: "1%",
  },
});

export default function FirstBackGrourndImage() {
  const classes = Style();

  return (
    <Box className={classes.all}>
      <div className={classes.model}>
        <p className={classes.titles}>TESLA</p>
        <div className={classes.cards}>
          <div className={classes.card}>
            <img
              style={{ width: "100%", height: "33vh" }}
              alt="Tesla x"
              src={TeslaModelX}
            ></img>
            <div className={classes.container}>
              <p className={classes.carModel}>MODELO X</p>
              <div className={classes.infos}>
                <p className={classes.data}>
                  <AirlineSeatReclineNormalIcon />
                  <p>7 Lugares</p>
                </p>
                <div className={classes.hLine} />
                <p className={classes.data}>
                  <StarIcon />
                  <p>5 estrelas em segurança</p>
                </p>
                <div className={classes.hLine} />
                <div className={classes.data}>
                  <div className={classes.boldBig}>351 mil</div>
                  <p> Cavalos de potencia</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.spacing} />
          <div className={classes.card}>
            <img
              style={{ width: "100%", height: "33vh" }}
              alt="Tesla S"
              src={TeslaModelS}
            ></img>
            <div className={classes.container}>
              <p className={classes.carModel}>MODELO S</p>
              <div className={classes.infos}>
                <p className={classes.data}>
                  <AccessTimeIcon />
                  <p>100 km em 2.3s</p>
                </p>
                <div className={classes.hLine} />
                <p className={classes.data}>
                  <AdjustIcon />
                  <p>Proteção de alto impacto</p>
                </p>
                <div className={classes.hLine} />
                <div className={classes.data}>
                  <div className={classes.boldBig}>402 mil</div>
                  <p> Cavalos de potencia</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.spacing} />
          <div className={classes.card}>
            <img
              style={{ width: "100%", height: "33vh" }}
              alt="Tesla 3"
              src={TeslaModel3}
            ></img>
            <div className={classes.container}>
              <p className={classes.carModel}>MODELO 3</p>
              <div className={classes.infos}>
                <div className={classes.data}>
                  <div className={classes.boldBig}>AWD</div>
                  <p> Motor Duplo</p>
                </div>
                <div className={classes.hLine} />
                <p className={classes.data}>
                  <AccessTimeIcon />
                  <p>100 km em 3.2s</p>
                </p>
                <div className={classes.hLine} />
                <div className={classes.data}>
                  <div className={classes.boldBig}>322 mil</div>
                  <p> Cavalos de potencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.model}>
        <p className={classes.titles}>AUDI</p>
        <div className={classes.cards}>
          <div className={classes.card}>
            <img
              style={{ width: "100%", height: "33vh" }}
              alt="Tesla x"
              src={AudiA3}
            ></img>
            <div className={classes.container}>
              <p className={classes.carModel}>A3</p>
              <div className={classes.infos}>
                <p className={classes.data}>
                  <AirlineSeatReclineNormalIcon />
                  <p>7 Lugares</p>
                </p>
                <div className={classes.hLine} />
                <p className={classes.data}>
                  <StarIcon />
                  <p>5 estrelas em segurança</p>
                </p>
                <div className={classes.hLine} />
                <div className={classes.data}>
                  <div className={classes.boldBig}>351 mil</div>
                  <p> Cavalos de potencia</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.spacing} />
          <div className={classes.card}>
            <img
              style={{ width: "100%", height: "33vh" }}
              alt="Tesla S"
              src={AudiA4}
            ></img>
            <div className={classes.container}>
              <p className={classes.carModel}>A4</p>
              <div className={classes.infos}>
                <p className={classes.data}>
                  <AccessTimeIcon />
                  <p>100 km em 2.3s</p>
                </p>
                <div className={classes.hLine} />
                <p className={classes.data}>
                  <AdjustIcon />
                  <p>Proteção de alto impacto</p>
                </p>
                <div className={classes.hLine} />
                <div className={classes.data}>
                  <div className={classes.boldBig}>402 mil</div>
                  <p> Cavalos de potencia</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.spacing} />
          <div className={classes.card}>
            <img
              style={{ width: "100%", height: "33vh" }}
              alt="Tesla 3"
              src={AudiA7}
            ></img>
            <div className={classes.container}>
              <p className={classes.carModel}>A7</p>
              <div className={classes.infos}>
                <div className={classes.data}>
                  <div className={classes.boldBig}>AWD</div>
                  <p> Motor Duplo</p>
                </div>
                <div className={classes.hLine} />
                <p className={classes.data}>
                  <AccessTimeIcon />
                  <p>100 km em 3.2s</p>
                </p>
                <div className={classes.hLine} />
                <div className={classes.data}>
                  <div className={classes.boldBig}>322 mil</div>
                  <p> Cavalos de potencia</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.spacing} />
        </div>
      </div>
      <div className={classes.model}>
        <p className={classes.titles}>BMW</p>
        <div className={classes.cards}>
          <div className={classes.card}>
            <img
              style={{ width: "100%", height: "33vh" }}
              alt="Tesla x"
              src={BMW530}
            ></img>
            <div className={classes.container}>
              <p className={classes.carModel}>530e</p>
              <div className={classes.infos}>
                <p className={classes.data}>
                  <AirlineSeatReclineNormalIcon />
                  <p>7 Lugares</p>
                </p>
                <div className={classes.hLine} />
                <p className={classes.data}>
                  <StarIcon />
                  <p>5 estrelas em segurança</p>
                </p>
                <div className={classes.hLine} />
                <div className={classes.data}>
                  <div className={classes.boldBig}>351 mil</div>
                  <p> Cavalos de potencia</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.spacing} />
          <div className={classes.card}>
            <img
              style={{ width: "100%", height: "33vh" }}
              alt="Tesla S"
              src={BMWHibri}
            ></img>
            <div className={classes.container}>
              <p className={classes.carModel}>Hibrida</p>
              <div className={classes.infos}>
                <p className={classes.data}>
                  <AccessTimeIcon />
                  <p>100 km em 2.3s</p>
                </p>
                <div className={classes.hLine} />
                <p className={classes.data}>
                  <AdjustIcon />
                  <p>Proteção de alto impacto</p>
                </p>
                <div className={classes.hLine} />
                <div className={classes.data}>
                  <div className={classes.boldBig}>402 mil</div>
                  <p> Cavalos de potencia</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.spacing} />
          <div className={classes.card}>
            <img
              style={{ width: "100%", height: "33vh" }}
              alt="Tesla 3"
              src={BMWM2}
            ></img>
            <div className={classes.container}>
              <p className={classes.carModel}>M2 Competition</p>
              <div className={classes.infos}>
                <div className={classes.data}>
                  <div className={classes.boldBig}>AWD</div>
                  <p> Motor Duplo</p>
                </div>
                <div className={classes.hLine} />
                <p className={classes.data}>
                  <AccessTimeIcon />
                  <p>100 km em 3.2s</p>
                </p>
                <div className={classes.hLine} />
                <div className={classes.data}>
                  <div className={classes.boldBig}>322 mil</div>
                  <p> Cavalos de potencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
