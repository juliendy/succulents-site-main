import { Dispatch, SetStateAction } from "react";
import AddToCartButton from "./AddToCartButton";
import Quantityselect from "./QuantitySelect";
import useMediaQuery from "@material-ui/core/useMediaQuery";

type eachItemProps = {
  name: string;
  description: string;
  price: number;
  id: string;
  quantityState: {
    quantity: string;
    name: string;
  };
  setQuantityState: Dispatch<
    SetStateAction<{
      quantity: string;
      name: string;
    }>
  >;
  quantity: string;
  AddProduct: () => void;
};

const DescriptionView = ({
  name,
  description,
  price,
  id,
  quantityState,
  setQuantityState,
  quantity,
  AddProduct,
}: eachItemProps) => {
  const isMobile = useMediaQuery("(max-width:599px)");

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: number | unknown }>
  ) => {
    const name = event.target.name as keyof typeof quantityState;
    setQuantityState({
      ...quantityState,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      {!isMobile && (
        <div className="product-view-name_bigger-screen">{name}</div>
      )}
      <div
        className={
          isMobile
            ? "product-view-description_mobile"
            : "product-view-description_bigger-screen"
        }
      >
        {description}
        <div className="product-view-price">{price} Eur</div>
        <Quantityselect onChange={handleChange} value={quantity} />
        <AddToCartButton onClick={AddProduct} />
        <div className="product-view-id">ID: {id}</div>
      </div>
    </div>
  );
};

export default DescriptionView;
