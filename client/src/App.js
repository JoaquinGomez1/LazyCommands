import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Action from "./components/Action";
import ModalContent from "./components/MyModal.jsx";
import VolumeControls from "./components/VolumeControls.jsx";

function App() {
  const actions = [
    { name: "Apagar", colorHex: "#e63946" },
    {
      name: "Cerrar Sesión",
      color: "black",
      colorHex: "#f1faee",
    },
    { name: "Mutear", colorHex: "#f1faee", color: "black" },
    { name: "Desmutear", colorHex: "#f1faee", color: "black" },
  ];

  const [open, setOpen] = useState(false);
  const [sendValue, setSendValue] = useState();

  const openModal = (text) => {
    setOpen(true);
    setSendValue(text);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="App" id="App">
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{
          textAlign: "center",
          color: "white",
          width: "100vw",
        }}
      >
        <Grid container justify="center" style={{ width: "90%" }}>
          <h1 style={{ color: "#fff1e6" }}>
            Lazy CMD <br></br>
            <hr></hr>
          </h1>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
            style={{ width: "100%" }}
          >
            {actions.map((each) => (
              <Grid item style={{ width: "100%" }}>
                <Action
                  key={each.name}
                  text={each.name}
                  color={each.color}
                  bgColor={each.colorHex}
                  openModal={openModal}
                ></Action>
              </Grid>
            ))}

            <ModalContent
              toggleModal={open}
              sendValue={sendValue}
              onChangeOpenState={closeModal}
            ></ModalContent>
          </Grid>
          <h3 style={{ color: "#fff1e6" }}>
            {" "}
            Volumen
            <br></br>
            <hr></hr>
          </h3>
          <VolumeControls></VolumeControls>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
