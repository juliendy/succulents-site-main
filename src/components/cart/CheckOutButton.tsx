import { OrangeButton } from "../reusableComponents/ButtonOrange";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function CheckOutButton() {
  return (
    <div className="checkout-button">
      <OrangeButton variant="contained" color="primary">
        <ShoppingCartIcon
          className="checkout-button-icon"
          style={{ fontSize: "26px" }}
        />
        Proceed to check out
      </OrangeButton>
    </div>
  );
}
