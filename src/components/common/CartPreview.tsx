import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import { PopperPlacementType } from "@material-ui/core/Popper";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import RichTooltip from "./RichTooltip";
import CartPreviewContents from "./CartPreviewContents";
import { useStyles } from "./NavigationItemStyles";

export default function CartPreview() {
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const classes = useStyles();

  const handleClick = (newPlacement: PopperPlacementType) => () => {
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const { state } = useContext(AppContext);

  const CartState = () => {
    if (state.shoppingCart < 100) {
      return <div className="cart-state">{state.shoppingCart}</div>;
    } else {
      return <div className="cart-state">99+</div>;
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <RichTooltip
          content={<CartPreviewContents onClick={handleClickAway} />}
          open={open}
          placement="bottom"
          onClose={() => setOpen(false)}
        >
          <div style={{ marginTop: "-10px", position: "relative" }}>
            <div
              className={
                state.shoppingCart < 10
                  ? "cart-state_container"
                  : state.shoppingCart > 9 && state.shoppingCart < 100
                  ? "cart-state_container-more-than-ten"
                  : "cart-state_container-more-than-hundred"
              }
            >
              <CartState />
            </div>
            <button onClick={handleClick("bottom-end")} className="cart-icon">
              <ShoppingCartIcon style={{ fontSize: "34px" }} />
            </button>
          </div>
        </RichTooltip>
      </div>
    </ClickAwayListener>
  );
}
