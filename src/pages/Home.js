import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Button, ButtonGroup } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector, useDispatch } from "react-redux";
import { deleteEvent, loadEvents } from "../redux/action";
import { useNavigate } from "react-router-dom";

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Home = () => {
  const buttonStyle = useButtonStyle();

  let dispatch = useDispatch();

  let navigate = useNavigate();

  const { events } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(loadEvents());
  }, [dispatch]);

  const handleEventDelete = (id) => {
    if (window.confirm("Are you sure you want to delete event ?")) {
      dispatch(deleteEvent(id));
    }
  };

  return (
    <div>
      <h1>Event Finder App</h1>

      <div className={buttonStyle.root}>
        <Button
          color="primary"
          variant="contained"
          style={{ marginBottom: "5px", align: "right" }}
          onClick={() => navigate("/addevent")}
        >
          Add Event
        </Button>
      </div>

      <TableContainer>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Options</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events &&
              events.map((event) => (
                <StyledTableRow key={event.id}>
                  <StyledTableCell component="th" scope="row">
                    {event.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {event.title}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {event.description}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {event.status}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <div className={buttonStyle.root}>
                      <ButtonGroup
                        variant="contained"
                        aria-label="outlined primary button group"
                      >
                        <Button
                          color="primary"
                          style={{ marginRight: "5px" }}
                          onClick={() => navigate(`/editevent/${event.id}`)}
                        >
                          Edit
                        </Button>
                        <Button
                          color="secondary"
                          onClick={() => handleEventDelete(event.id)}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
