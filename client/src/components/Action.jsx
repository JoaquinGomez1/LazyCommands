import React from "react";
import { Button, Grid } from "@material-ui/core";

// Icons Imports
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import DesktopAccessDisabledIcon from "@material-ui/icons/DesktopAccessDisabled";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

// ------ Component -------
export default function Action(props) {
  const { bgColor, text, color } = props;
  const pStyle = { fontWeight: "bold", textAlign: "center", fontSize: "28px" };
  const textValue = text.toLowerCase();

  const iconsList = {
    apagar: <PowerSettingsNewIcon />,
    "cerrar sesión": <DesktopAccessDisabledIcon />,
    mutear: <VolumeOffIcon />,
    desmutear: <VolumeUpIcon />,
  };

  const btnStyle = {
    backgroundColor: bgColor,
    color: "white",
    width: "100%",
  };

  if (color) btnStyle.color = color;

  const verifyAction = async () => {
    if (textValue === "apagar" || textValue === "cerrar sesión") {
      // Send signal to parent component
      props.openModal(textValue);
    } else {
      sendToBackend();
    }
  };

  const sendToBackend = async () => {
    // Mandar datos al backend
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    fetch("http://192.168.0.8:6653/", {
      method: "POST",
      body: JSON.stringify({ text: props.text }),
      headers,
    });
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color={props.color}
        style={btnStyle}
        onClick={verifyAction}
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {/* If there is no icon defined print text value instead*/}
          {iconsList[textValue] ? (
            <Grid
              item
              justify="center"
              alignItems="center"
              style={{ padding: "20px 0px" }}
            >
              {iconsList[textValue]}
            </Grid>
          ) : (
            <Grid item justify="center">
              <p style={pStyle}>{text}</p>
            </Grid>
          )}
        </Grid>
      </Button>
    </React.Fragment>
  );
}
