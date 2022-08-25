import { FC } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const ProductViewContainer: FC = ({ children }) => {
  const isMobile = useMediaQuery("(max-width:599px)");
  const isBigger = useMediaQuery("(max-width:1350px)");

  return (
    <div
      className={
        isMobile
          ? "product-view_mobile"
          : isBigger
          ? "product-view_bigger-screen"
          : "product-view_1280-px"
      }
      style={{ maxWidth: "1280px" }}
    >
      {children}
    </div>
  );
};

export default ProductViewContainer;
