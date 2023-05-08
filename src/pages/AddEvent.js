import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEvent } from "../redux/action";

const useButtonStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      m: 1,
    },
  },
}));

const AddEvent = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const buttonStyle = useButtonStyle();

  const backToHome = () => {
    navigate("/");
  };

  const [error, setError] = useState("");

  const [eventData, setEventData] = useState({
    id: "",
    title: "",
    description: "",
    status: "",
  });

  const { id, title, description, status } = eventData;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || !title || !description || !status) {
      setError("Please input data in input field");
    } else {
      dispatch(addEvent(eventData));
      navigate("/");
      setError("");
    }
  };
  return (
    <div>
      <div className={buttonStyle.root}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginTop: "25px" }}
          onClick={() => backToHome()}
        >
          Back To Home Page
        </Button>
      </div>
      <h1>AddEvent</h1>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <FormControl sx={{ m: 1, width: "150ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Id</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={id}
            name="id"
            type="number"
            onChange={handleInputChange}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "150ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Title</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={title}
            name="title"
            type="text"
            onChange={handleInputChange}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "150ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">
            Description
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            value={description}
            name="description"
            type="text"
            onChange={handleInputChange}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "150ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Status</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={status}
            name="status"
            type="text"
            onChange={handleInputChange}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <div className={buttonStyle.root}>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={{ marginTop: "10px" }}
          >
            Add Event
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
