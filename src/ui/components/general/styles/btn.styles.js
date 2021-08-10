import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  btn: {
    fontSize: 14,
    // margin: "25px",
    color: "white",
    "&:hover": {
      background: "slateblue",
    },
  },
  btnWrapper: {
    color: "white",
    minWidth: "3px",
    padding: "5px",
    textDecoration:"none",
    border: "none",
    "&:hover": {
      background: "slateblue",
      textDecoration:"none",
    },
  },
  btnCreate: {
    fontSize: 20,
    color: "",
    "&:hover": {
      background: "slateblue",
    },
  },
  btnOpen: {
    color: "white",
    // minWidth: "3px",
    padding: "5px",
    // border: "none",
    "&:hover": {
      background: "slateblue",
    },
  },
  btnEdit: {
    color: "orange",
  },
  btnSave: {
    fontSize: 18,
    color: "#CAC531",
  },
  btnExit: {
    fontSize: 18,
    color: "#F00000",
  },
  btnIfAccount:{
    textTransform : "none",
    fontSize: 14,
    fontWeight: "normal",
    color: "white",
    "&:hover": {
      background: "none",
      // textDecoration: "1px solid white "
    }
  },

});
