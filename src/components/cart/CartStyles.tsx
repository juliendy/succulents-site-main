import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      boxShadow: "none",
      borderRadius: 0,
      overFlow: "hidden",
    },
    details: {
      display: "flex",
      flexDirection: "column",
      width: "66%",
    },
    content: {
      flex: "1 0 auto",
      padding: "0px 0px 0px 20px",
      paddingBottom: "0 !important",
      position: "relative",
    },
    cover: {
      width: 130,
      height: 130,
    },
  })
);
