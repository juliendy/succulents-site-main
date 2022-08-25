import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

type eachItemProps = {
  id: string;
  category: string;
  name: string;
  image: string;
  price: number;
};

const ProductListContainer = ({
  id,
  category,
  name,
  image,
  price,
}: eachItemProps) => {
  const isMobile = useMediaQuery("(max-width:599px)");
  const isfrom959px = useMediaQuery("(min-width:960px)");
  const isto1279px = useMediaQuery("(max-width:1279px)");

  return (
    <Grid
      item
      xs={6}
      md={4}
      lg={3}
      style={
        isMobile
          ? { flexBasis: "48%", marginBottom: "20px" }
          : isfrom959px
          ? { flexBasis: "22%", margin: "1.5%" }
          : isto1279px
          ? { flexBasis: "31%", margin: "1.16%" }
          : { flexBasis: "80%", margin: "0%" }
      }
    >
      <NavLink to={`/product/${category}/${id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={`${name}`}
            height="280"
            image={image}
            title={`${name}`}
          />
          <CardContent style={{ padding: 0 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{
                margin: "5px 0px 0px 0px",
                fontSize: "18px",
                color: "#242424",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                fontSize: "16px",
                color: "#242424",
              }}
            >
              {price} Eur
            </Typography>
          </CardContent>
        </CardActionArea>
      </NavLink>
    </Grid>
  );
};

export default ProductListContainer;
