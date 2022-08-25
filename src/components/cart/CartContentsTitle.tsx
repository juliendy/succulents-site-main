const CartContentsTitle = () => {
  return (
    <div>
      <hr />
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div style={{ width: "130px" }}></div>
        <div style={{ flexBasis: "20%" }}>Item</div>
        <div style={{ width: "91px" }}>Quantity</div>
        <div style={{ minWidth: "40px" }}>Price</div>
        <div style={{ width: "40px" }}></div>
      </div>
    </div>
  );
};

export default CartContentsTitle;
