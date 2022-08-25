import { NavLink } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
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

const EachItemInCartBiggerScreen = ({
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
        <div>
          <QuantitySelectCartTextField
            onChange={(e) =>
              handleChangeQuantity_TextField(id, e.target.value.toString())
            }
            value={quantity}
          />
          <QuantitySetButtonSwitch
            id={id}
            quantity={quantity}
            price={price}
            button={button}
            handleUpdateQuantity_TextField={handleUpdateQuantity_TextField}
          />
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
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <NavLink to={`/product/${category}/${id}`}>
          <CardMedia className={classes.cover} image={image} />
        </NavLink>
        <div
          className="product-name-in-cart_bigger-screen"
          style={{ flexBasis: "20%" }}
        >
          {name}
        </div>
        <QuantityPresentationSwitch />
        <div className="price-in-cart_bigger-screen">{price}Eur</div>
        <Button
          onClick={() => deleteProduct(id, quantity, price)}
          className="delete-button-in-cart_bigger-screen"
        >
          <ClearIcon />
        </Button>
      </div>
    </div>
  );
};

export default EachItemInCartBiggerScreen;
