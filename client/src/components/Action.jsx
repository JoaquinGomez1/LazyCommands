import React from "react";
import { Button, Grid } from "@material-ui/core";

export default function Action(props) {
  const bgColor = props.bgColor;

  let pStyle = { fontWeight: "bold", textAlign: "center" };
  if (props.text === "+" || props.text === "-") {
    pStyle = { fontWeight: "bold", textAlign: "center", fontSize: "28px" };
  }

  const verifyAction = async () => {
    if (
      props.text.toLowerCase() === "apagar" ||
      props.text.toLowerCase() === "cerrar sesión"
    ) {
      // Send signal to parent component
      props.openModal(props.text);
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
        style={{
          backgroundColor: bgColor,
          color: "white",
          width: "100%",
        }}
        onClick={verifyAction}
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <p style={pStyle}>{props.text}</p>
        </Grid>
      </Button>
    </React.Fragment>
  );
}
