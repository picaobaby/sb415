import {} from "react";

const Order = ({ pizza, setPizza, setCurrentPage }) => {
  const back = () => {
    setPizza({ ...pizza, base: "", toppings: [] });
    setCurrentPage("base");
  };

  return (
    <div>
      <h2>Order Page</h2>
      <button onClick={back}>back</button>
    </div>
  );
};
export default Order;
