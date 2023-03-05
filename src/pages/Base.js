import {} from "react";

const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

const Base = ({ pizza, setBase, setCurrentPage }) => {
  return (
    <div>
      <h2>Base Page</h2>
      {bases.map((item) => {
        const selected = pizza.base === item ? "base selected" : "base";
        return (
          <div className={selected} key={item} onClick={() => setBase(item)}>
            {item}
          </div>
        );
      })}
      {pizza.base && (
        <button onClick={() => setCurrentPage("toppings")}>Next</button>
      )}
    </div>
  );
};
export default Base;
