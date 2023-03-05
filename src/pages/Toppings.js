import {} from "react";

const Toppings = ({ pizza, addTopping, setCurrentPage }) => {
  const toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes"
  ];

  return (
    <div>
      <h2>Toppings Page</h2>
      {toppings.map((topping) => {
        const selected = pizza.toppings.includes(topping)
          ? "topping selected"
          : "topping";
        return (
          <div
            className={selected}
            key={topping}
            onClick={() => addTopping(topping)}
          >
            {topping}
          </div>
        );
      })}

      {toppings.length > 0 && (
        <button onClick={() => setCurrentPage("order")}>Next</button>
      )}
    </div>
  );
};
export default Toppings;
