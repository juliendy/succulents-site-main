import { NavLink } from "react-router-dom";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import { GrayButton } from "../reusableComponents/ButtonGray";

export default function ContinueShoppingButton() {
  return (
    <div className="continue-shopping-button">
      <NavLink to="/">
        <GrayButton variant="contained" color="primary">
          <KeyboardReturnIcon
            className="continue-shopping-button-icon"
            style={{ fontSize: "26px" }}
          />
          Continue Shopping
        </GrayButton>
      </NavLink>
    </div>
  );
}
