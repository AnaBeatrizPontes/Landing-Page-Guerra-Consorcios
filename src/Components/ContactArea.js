import React from "react";

//Material UI (Styles)
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Style = makeStyles({
  contatcArea: {
    marginTop: "3em",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "70vh",
    backgroundImage: "linear-gradient(180deg,  #1D2C40 0%,  #275673 100%)",
    backgroundRepeat: "no-repeat",
  },
  align: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  part1: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
  },
  smallTitles: {
    color: "#FFFCF2",
    fontSize: "1.5em",
  },
  part2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "2em",
    marginBottom: "5em",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  hLine: {
    border: "none",
    height: "40vh",
    width: "1px",
    backgroundColor: "#c9c0c6",
  },
  contactTitle: {
    color: "#FFFCF2",
    fontSize: "2em",
    fontWeight: "bold",
    marginTop: "2em",
    marginBottom: "1em",
  },
  textField: {
    display: "flex",
    justifyContent: "center",
    borderRadius: "16px",
    fontSize: "1.2em",
    width: "35vw",
    height: "22vh",
    transition: "0.4s",
    "&:hover": {
      transition: "0.4s",
    },
    resize: "none",
    border: "none",
    boxShadow: "0px 3px 6px #00000029",
    marginBottom: "2em",
  },
  informationField: {
    display: "flex",
    borderRadius: "16px",
    transition: "0.4s",
    "&:hover": {
      transition: "0.4s",
    },
    fontSize: "1.2em",
    width: "35vw",
    height: "7vh",
    resize: "none",
    border: "none",
    boxShadow: "0px 3px 6px #00000029",
    marginBottom: "3em",
  },
  sendButton: {
    display: "grid",
    backgroundColor: "#FFFCF2",
    borderRadius: "40px",
    color: "#275673",
    fontWeight: "bold",
    fontSize: "1em",
    padding: "0.5rem 3rem",
    transition: "0.4s",
    "&:hover": {
      backgroundColor: fade("#FFFCF2", 1),
      transition: "0.4s",
    },
  },
  sideAlign: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "45%",
  },
  iconProp: {
    width: "35%",
    height: "20vh",
  },
  socialIconProp: {
    width: "6%",
    height: "6vh",
  },
  froms: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sideToSide: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  infos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    color: "#FFFCF2",
    fontSize: "1em",
    marginTop: "2em",
  },
});

export default function ContactArea() {
  const classes = Style();

  return (
    <div className={classes.contatcArea}>
      <div className={classes.part1}>
        <div className={classes.part2}>
          <div className={classes.sideToSide}>
            <div className={classes.froms}>
              <div className={classes.smallTitles}>Concessionárias</div>
              <NaturePeopleIcon
                className={classes.iconProp}
                style={{ color: "white" }}
              />
            </div>
            <div className={classes.froms}>
              <div className={classes.smallTitles}>Cadastre-se</div>
              <AccountCircleIcon
                className={classes.iconProp}
                style={{ color: "white" }}
              />
            </div>
            <div className={classes.froms}>
              <div className={classes.smallTitles}>Comprar</div>
              <AddShoppingCartIcon
                className={classes.iconProp}
                style={{ color: "white" }}
              />
            </div>
          </div>
          <div className={classes.infos}>
            <div className={classes.info}>Política de Privacidade</div>
            <div className={classes.info}>Termos de uso</div>
            <div className={classes.info}>Informação ao consumidor</div>
            <div className={classes.info}>Código de Conduta</div>
          </div>
        </div>
        <div className={classes.icons}>
          <FacebookIcon
            className={classes.socialIconProp}
            style={{ color: "white" }}
          />
          <LinkedInIcon
            className={classes.socialIconProp}
            style={{ color: "white" }}
          />
          <InstagramIcon
            className={classes.socialIconProp}
            style={{ color: "white" }}
          />
          <YouTubeIcon
            className={classes.socialIconProp}
            style={{ color: "white" }}
          />
          <TwitterIcon
            className={classes.socialIconProp}
            style={{ color: "white" }}
          />
        </div>
      </div>
      <div className={classes.hLine} />
      <div className={classes.align}>
        <div className={classes.contactTitle}>Fale Conosco</div>
        <textarea
          className={classes.textField}
          placeholder="Mensagem..."
        ></textarea>
        <textarea
          className={classes.informationField}
          placeholder="Email"
        ></textarea>
        <div className={classes.box}>
          <div className={classes.sideAlign}>
            <Button className={classes.sendButton} type="submit">
              {" "}
              ENVIAR{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
