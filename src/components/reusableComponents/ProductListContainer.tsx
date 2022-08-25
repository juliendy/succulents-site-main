import { FC } from "react";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: "0px 0% 180px 0%",
    },
  })
);

const ProductListContainer: FC = ({ children }) => {
  const isMobile = useMediaQuery("(max-width:599px)");
  const isfrom959px = useMediaQuery("(min-width:960px)");
  const isto1279px = useMediaQuery("(max-width:1279px)");

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        style={
          isMobile
            ? {
                justifyContent: "space-between",
                margin: "0px 5%",
                width: "auto",
              }
            : isfrom959px
            ? {
                justifyContent: "start",
                margin: "0px 14px",
                width: "auto",
              }
            : isto1279px
            ? {
                justifyContent: "start",
                margin: "0px 14px",
                width: "auto",
              }
            : {
                justifyContent: "start",
                margin: "0px 14px",
                width: "auto",
              }
        }
      >
        {children}
      </Grid>
    </div>
  );
};

export default ProductListContainer;
