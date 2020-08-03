import React from "react";

//Components
import ContactArea from "../../Components/ContactArea";
import NavBar from "../../Components/NavBar";
import ModelsArea from "../../Components/Models";
import AccessoriesArea from "../../Components/Accessories";
import BrandsArea from "../../Components/Brands";
import FirstBackGrourndImage from "../../Components/First";

//Material UI (Styles)
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { Box } from "@material-ui/core";

const Style = makeStyles({
  page: {
    width: "100%",
    height: "100vh",
    backgroundColor: fade("#FFFFFF", 1),
    display: "flex",
    flexDirection: "column",
  },
});

export default function LandingPage() {
  const classes = Style();

  return (
    <div className={classes.page}>
      <Box id="start">
        <NavBar />
      </Box>
      <Box id="began">
        <FirstBackGrourndImage />
      </Box>
      <Box id="models">
        <ModelsArea />
      </Box>
      <Box id="brands">
        <BrandsArea />
      </Box>
      <Box id="accessories">
        <AccessoriesArea />
      </Box>
      <Box id="contact">
        <ContactArea />
      </Box>
    </div>
  );
}
