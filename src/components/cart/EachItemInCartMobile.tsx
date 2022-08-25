import { NavLink } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import ClearIcon from "@material-ui/icons/Clear";
import Button from "@material-ui/core/Button";
import QuantitySelectCartTextField from "./QuantitySelectCart_TextField";
import QuantitySelectCartDropDown from "./QuantitySelectCart_DropDown";
import QuantitySetButtonSwitch from "./QuantitySetButtonSwitch";
import { useStyles } from "./CartStyles";

type eachItemProps = {
  category: string;
  id: string;
  image: string;
  quantity: string;
  price: number;
  name: string;
  currentQuantity: string;
  button: boolean;
  handleChangeQuantity_TextField: (id: string, e: string) => void;
  handleUpdateQuantity_TextField: (
    id: string,
    quantity: string,
    price: number
  ) => void;
  handleUpdateQuantity_DropDown: (
    id: string,
    quantity: string,
    price: number,
    e: unknown
  ) => void;
  deleteProduct: (id: string, quantity: string, price: number) => void;
};

const EachItemInCartMobile = ({
  category,
  id,
  image,
  quantity,
  price,
  name,
  currentQuantity,
  button,
  handleChangeQuantity_TextField,
  handleUpdateQuantity_TextField,
  handleUpdateQuantity_DropDown,
  deleteProduct,
}: eachItemProps) => {
  const classes = useStyles();

  const QuantityPresentationSwitch = () => {
    if (parseInt(currentQuantity) >= 10) {
      return (
        <div style={{ flexGrow: 1 }}>
          <Grid container style={{ justifyContent: "flex-start" }}>
            <Grid item xs={6} style={{ flexBasis: "0%" }}>
              <QuantitySelectCartTextField
                onChange={(e) =>
                  handleChangeQuantity_TextField(id, e.target.value.toString())
                }
                value={quantity}
              />
            </Grid>
            <Grid item xs={6}>
              <QuantitySetButtonSwitch
                id={id}
                quantity={quantity}
                price={price}
                button={button}
                handleUpdateQuantity_TextField={handleUpdateQuantity_TextField}
              />
            </Grid>
          </Grid>
        </div>
      );
    } else if (parseInt(currentQuantity) <= 9) {
      return (
        <QuantitySelectCartDropDown
          onChange={(e) =>
            handleUpdateQuantity_DropDown(id, quantity, price, e.target.value)
          }
          value={quantity}
        />
      );
    } else return null;
  };

  return (
    <div>
      <Card className={classes.root}>
        <NavLink to={`/product/${category}/${id}`}>
          <CardMedia className={classes.cover} image={image} />
        </NavLink>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div className="product-name-in-cart_mobile">{name}</div>
            <div className="quantity-select-title-in-cart_mobile">
              Quantity:
            </div>
            <QuantityPresentationSwitch />
            <div className="price-in-cart_mobile">{price} Eur</div>
            <Button
              onClick={() => deleteProduct(id, quantity, price)}
              className="delete-button-in-cart_mobile"
            >
              <ClearIcon />
            </Button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default EachItemInCartMobile;
