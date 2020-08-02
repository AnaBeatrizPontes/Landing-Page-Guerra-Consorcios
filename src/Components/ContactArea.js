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

const Style = makeStyles({
  contatcArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    backgroundImage: "linear-gradient(180deg, #252422 0%, #403D39 100%)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top 20rem right 0",
  },
  align: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "10em",
  },
  contactTitle: {
    color: fade("#403D39", 1),
    fontSize: "2em",
    fontWeight: "bold",
    marginBottom: "2em",
  },
  textField: {
    display: "flex",
    justifyContent: "center",
    borderRadius: "16px",
    fontSize: "1.2em",
    width: "40vw",
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
    justifyContent: "center",
    borderRadius: "16px",
    transition: "0.4s",
    "&:hover": {
      transition: "0.4s",
    },
    fontSize: "1.2em",
    width: "40vw",
    height: "7vh",
    resize: "none",
    border: "none",
    boxShadow: "0px 3px 6px #00000029",
    marginBottom: "3em",
  },
  sendButton: {
    display: "grid",
    backgroundColor: fade("#EB5E28", 1),
    borderRadius: "40px",
    color: "#FFFCF2",
    fontSize: "1em",
    padding: "0.5rem 3rem",
    transition: "0.4s",
    "&:hover": {
      backgroundColor: fade("#EB5E28", 1),
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
    width: "6%",
    height: "6vh",
  },
});

export default function ContactArea() {
  const classes = Style();

  return (
    <div className={classes.contatcArea}>
      <div className={classes.align}>
        <div className={classes.contactTitle}>Dúvidas? Entre em contato</div>
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
          <div className={classes.icons}>
            <FacebookIcon className={classes.iconProp} />
            <LinkedInIcon className={classes.iconProp} />
            <InstagramIcon className={classes.iconProp} />
            <YouTubeIcon className={classes.iconProp} />
            <TwitterIcon className={classes.iconProp} />
          </div>
        </div>
      </div>
    </div>
  );
}
