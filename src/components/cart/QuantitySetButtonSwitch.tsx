import QuantitySetButton from "./QuantitySetButton";

type eachItemProps = {
  id: string;
  quantity: string;
  price: number;
  button: boolean;
  handleUpdateQuantity_TextField: (
    id: string,
    quantity: string,
    price: number
  ) => void;
};

const QuantitySetButtonSwitch = ({
  id,
  quantity,
  price,
  button,
  handleUpdateQuantity_TextField,
}: eachItemProps) => {
  if (button) {
    return (
      <QuantitySetButton
        onClick={() => handleUpdateQuantity_TextField(id, quantity, price)}
      />
    );
  } else return null;
};

export default QuantitySetButtonSwitch;
