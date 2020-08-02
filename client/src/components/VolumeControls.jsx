import React from "react";
import { Grid } from "@material-ui/core";
import Action from "./Action.jsx";

export default function VolumeControls() {
  return (
    <React.Fragment>
      <Grid container direction="row" justify="center" spacing={2}>
        <Grid item style={{ width: "50%" }}>
          <Action key={"-"} text="-" bgColor="#f48c06">
            {" "}
          </Action>
        </Grid>
        <Grid item style={{ width: "50%" }}>
          <Action key={"+"} text="+" bgColor="#e85d04"></Action>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
