import React from "react";
import Fade from "@material-ui/core/Fade";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import GoToCartButton from "./GoToCartButton";
import CartPreviewContentsSwitch from "./CartPreviewContentsSwitch";

type CartPreviewContentsProps = {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export default function CartPreviewContents({
  onClick,
}: CartPreviewContentsProps) {
  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <div>
      <Fade timeout={350}>
        <div style={{ visibility: "visible", opacity: "inherit" }}>
          <div
            className={
              isMobile
                ? "cart-preview_container_mobile"
                : "cart-preview_container_bigger-screen"
            }
          >
            <div className="title-in-cart-preview">YOUR SHOPPING CART</div>
            <div
              className={
                isMobile
                  ? "item-in-cart-preview_mobile"
                  : "item-in-cart-preview_bigger-screen"
              }
            >
              <CartPreviewContentsSwitch onClick={onClick} />
            </div>
            <GoToCartButton onClick={onClick} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
