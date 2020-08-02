import React, { useState, useEffect } from "react";
import { Grid, Button, Modal } from "@material-ui/core";

export default function MyModal(props) {
  const [open, setOpen] = useState(props.toggleModal);
  const [sendValue, setSendValue] = useState(props.sendValue);

  useEffect(() => {
    setOpen(props.toggleModal);
    setSendValue(props.sendValue);
  }, [props]);

  const closeModal = () => {
    props.onChangeOpenState(false);
  };

  const sendShutdownRequest = async () => {
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    const req = await fetch("http://192.168.0.8:6653/", {
      method: "POST",
      body: JSON.stringify({ text: sendValue }),
      headers,
    });

    // Close modal upon server response
    if (req.status) {
      closeModal();
    }
  };

  return (
    <React.Fragment>
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
              <Button variant="outlined" color="primary" onClick={closeModal}>
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
