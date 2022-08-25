import { withStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const WhiteButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText("rgb(255,255,255.0.9)"),
    backgroundColor: "rgb(255,255,255,0.9)",
    "&:hover": {
      backgroundColor: "rgb(255,255,255,0.9)",
    },
    padding: "10px 18px 10px 30px",
    fontSize: "20px",
    fontWeight: "normal",
    borderRadius: "24px",
  },
}))(Button);
