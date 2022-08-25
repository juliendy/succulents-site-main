import { withStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const GrayButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText("rgb(255,255,255.0.9)"),
    backgroundColor: "#bababa",
    "&:hover": {
      backgroundColor: "#a6a6a6",
      boxShadow: "none",
    },
    fontWeight: "normal",
    borderRadius: "4px",
    width: "100%",
    fontSize: "16px",
    boxShadow: "none",
    padding: "14px",
  },
}))(Button);
