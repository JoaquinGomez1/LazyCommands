import React, { useState, useEffect } from "react";
import { Grid, Button, Modal } from "@material-ui/core";
import "./MyModal.css";

export default function MyModal(props) {
  const [open, setOpen] = useState(props.toggleModal);
  const [sendValue, setSendValue] = useState(props.sendValue);
  const [waitTime, setWaitTime] = useState("");

  useEffect(() => {
    setOpen(props.toggleModal);
    setSendValue(props.sendValue);
  }, [props]);

  const closeModal = () => {
    // Since the state of this module is controlled by the parent component
    // instead of changing the open state directly here, it is necessary to make a request
    // to App.js to make the change
    props.onChangeOpenState(false);
  };

  const sendShutdownRequest = async () => {
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    const req = await fetch("http://192.168.0.8:6653/", {
      method: "POST",
      body: JSON.stringify({ text: sendValue, time: waitTime }),
      headers,
    });

    // Close modal upon server response
    if (req.status) {
      closeModal();
    }
  };

  const changeTime = (e) => {
    const inputValue = e.target.value;
    const isNotANumber = isNaN(inputValue);

    //
    if (!isNotANumber) {
      setWaitTime(inputValue);
    }
  };

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          display="column"
          style={{
            backgroundColor: "#454545",
            zIndex: "2",
            width: "80vw",
            height: "40vh", // Allows the modal to close properly
          }}
          alignItems="center"
          justify="center"
        >
          <h3 style={{ color: "white" }}> ¿Seguro?</h3>
          <Grid container display="column" justify="center">
            <input
              type="text"
              placeholder="Minutos a esperar"
              className="waitTimeInput"
              style={{
                padding: "15px 5px",
                width: "130px",
                backgroundColor: "#585858",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
              onChange={changeTime}
            />
          </Grid>
          <Grid container display="row" justify="center" spacing={2}>
            <Grid item>
              <Button
                variant="outlined"
                size="large"
                color="secondary"
                onClick={closeModal}
              >
                No
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={sendShutdownRequest}
              >
                Sí
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </React.Fragment>
  );
}
