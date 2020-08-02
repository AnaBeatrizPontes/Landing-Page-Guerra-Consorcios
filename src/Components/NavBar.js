import React from "react";
import { HashLink as HLink } from "react-router-hash-link";

//Assets
import LogoWhite from "../Assets/logo-vert-white.png";

//Material UI (Styles)
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import AppBar from "@material-ui/core/AppBar";
import { MenuItem, ListItemIcon } from "@material-ui/core";

const Style = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    height: "10vh",
  },
  divMenuLogo: {
    width: "13%",
    height: "9vh",
  },
  divMenuList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "3em",
    marginRight: "15em",
    color: fade("#FFFCF2", 1),
  },
  imgProps: {
    height: "9vh",
    width: "8%",
  },
  linkprops: {
    textDecoration: "none",
    color: fade("#FFFCF2", 1),
  },
  divMenu: {
    display: "flex",
    alignItems: "center",
    marginLeft: "35em",
    color: fade("#FFFCF2", 1),
  },
}));

export default function NavBar() {
  const classes = Style();

  return (
    <AppBar
      position="fixed"
      style={{ background: "transparent", boxShadow: "none" }}
      className={classes.appBar}
    >
      <div className={classes.divMenuList}>
        <HLink smooth to="/#models" className={classes.linkprops}>
          <MenuItem> Modelos </MenuItem>
        </HLink>
        <HLink smooth to="/#accessories" className={classes.linkprops}>
          <MenuItem> Acessórios </MenuItem>
        </HLink>
        <HLink smooth to="/#brands" className={classes.linkprops}>
          <MenuItem> Marcas </MenuItem>
        </HLink>
        <HLink smooth to="/#contact" className={classes.linkprops}>
          <MenuItem> Contato </MenuItem>
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
        <MenuItem> Comprar </MenuItem>
      </div>
    </AppBar>
  );
}
