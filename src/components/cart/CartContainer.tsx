import { FC } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const CartContainer: FC = ({ children }) => {
  const isMobile = useMediaQuery("(max-width:599px)");
  const isBigger = useMediaQuery("(max-width:1350px)");

  return (
    <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
      <div
        className={
          isMobile
            ? "cart_container_mobile"
            : isBigger
            ? "cart_container_bigger-screen"
            : "cart_container_over1280px"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default CartContainer;
