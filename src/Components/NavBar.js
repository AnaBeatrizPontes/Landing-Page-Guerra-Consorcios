import React from "react";
import { HashLink as HLink } from "react-router-hash-link";

//Assets
import LogoWhite from "../Assets/logo-vert-white.png";

//Material UI (Styles)
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { MenuItem, ListItemIcon } from "@material-ui/core";

const Style = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    height: "15vh",
    backgroundImage: "linear-gradient(180deg,  #275673 0%,  #1D2C40 100%)",
  },
  divMenuLogo: {
    width: "13%",
    height: "9vh",
    alignSelf: "center",
  },
  divMenuList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3em",
    marginLeft: "1em",
    marginRight: "6em",
  },
  imgProps: {
    height: "9vh",
    width: "8%",
  },
  linkprops: {
    textDecoration: "none",
    display: "block",
    fontSize: "2em",
    fontWeight: "bold",
    color: "#FFFF",
  },
  divMenu: {
    display: "flex",
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: "35em",
  },
}));

export default function NavBar() {
  const classes = Style();

  return (
    <AppBar
      position="fixed"
      style={{ boxShadow: "none" }}
      className={classes.appBar}
    >
      <div className={classes.divMenuList}>
        <HLink smooth to="/#models" className={classes.linkprops}>
          <MenuItem> MODELOS </MenuItem>
        </HLink>
        <HLink smooth to="/#brands" className={classes.linkprops}>
          <MenuItem> MARCAS </MenuItem>
        </HLink>
        <HLink smooth to="/#accessories" className={classes.linkprops}>
          <MenuItem> ACESSÓRIOS </MenuItem>
        </HLink>
      </div>
      <div className={classes.divMenuLogo}>
        <HLink smooth to="/#start">
          <MenuItem>
            <ListItemIcon>
              <img
                className={classes.imgProps}
                alt="NormalLogo"
                src={LogoWhite}
              />
            </ListItemIcon>
          </MenuItem>
        </HLink>
      </div>
      <div className={classes.divMenu}>
        <HLink smooth to="#contact" className={classes.linkprops}>
          <MenuItem> CONTATO </MenuItem>
        </HLink>
      </div>
    </AppBar>
  );
}
