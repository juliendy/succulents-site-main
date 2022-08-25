import { NavLink } from "react-router-dom";
import { WhiteButton } from "../reusableComponents/ButtonWhite";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function MainButton() {
  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <div
      className={isMobile ? "main-button_mobile" : "main-button_bigger-screen"}
    >
      <NavLink to="product/Succulents">
        <WhiteButton
          variant="contained"
          color="primary"
          style={{ fontSize: "15px" }}
        >
          Explore
          <KeyboardArrowRightIcon style={{ marginLeft: "13px" }} />
        </WhiteButton>
      </NavLink>
    </div>
  );
}
