import React, { useState } from "react";
import { Grid, Modal, Button } from "@material-ui/core";
import Action from "./components/Action";

function App() {
  const actions = [
    { name: "Apagar", color: "secondary" },
    {
      name: "Cerrar Sesión",
      color: "primary",
    },
    { name: "Mutear", colorHex: "#0ad192" },
    { name: "Desmutear", colorHex: "#18c44b" },
  ];

  const [open, setOpen] = useState(false);
  const [sendValue, setSendValue] = useState();

  const openModal = (text) => {
    console.log(text);
    setOpen(true);
    setSendValue(text);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const sendShutdownRequest = async () => {
    console.log(sendValue);
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    const req = await fetch("http://192.168.0.8:6653/", {
      method: "POST",
      body: JSON.stringify({ text: sendValue }),
      headers,
    });

    if (req.status) {
      closeModal();
    }
  };

  return (
    <div className="App" id="App">
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{
          height: "100%",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1>
          Panel de Control <br></br>
          <hr></hr>
        </h1>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {actions.map((each) => (
            <Grid item>
              <Action
                key={each.name}
                text={each.name}
                color={each.color}
                bgColor={each.colorHex}
                openModal={openModal}
              ></Action>
            </Grid>
          ))}

          <Modal
            open={open}
            onClose={closeModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{ display: "grid", justifyContent: "center" }}
          >
            <Grid
              container
              display="column"
              style={{
                backgroundColor: "#eee",
                zIndex: "2",
              }}
              alignItems="center"
              justify="center"
            >
              <h3>Seguro?</h3>
              <Grid container display="row" justify="center" spacing={2}>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    onClick={() => closeModal()}
                  >
                    No
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => sendShutdownRequest()}
                  >
                    Sí
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Modal>
        </Grid>
        <h3>
          {" "}
          Volumen
          <br></br>
          <hr></hr>
        </h3>
        <Grid container direction="row" justify="center" spacing={2}>
          <Grid item>
            <Action key={"-"} text="-" bgColor="#1e54f7">
              {" "}
            </Action>
          </Grid>
          <Grid item>
            <Action key={"+"} text="+" bgColor="#f7711e"></Action>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
