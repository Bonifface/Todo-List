import { makeStyles } from "@material-ui/core";
export const useStylesIcon = makeStyles({
  iconMane: {
    fontSize: 80,
    padding: 10,
    color: "white",
  },
  icon: {
    fontSize: 23,
    border: "none",

    "&:hover": {
      border: "none",
    },
  },
  iconSuccess: {
    fontSize: 26,
    color: "green",
  },
  iconFalse: {
    fontSize: 26,
    color: "red",
  },
});
