import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      boxShadow: "none",
      borderRadius: 0,
      overFlow: "hidden",
      paddingTop: "10px",
    },

    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
      paddingLeft: 10,
      paddingTop: 0,
      paddingBottom: "0 !important",
    },
    cover: {
      width: 100,
      height: 100,
    },
  })
);
