import { useState } from "react";
import "./styles.css";
import Base from "./pages/Base";
import Toppings from "./pages/Toppings";
import Order from "./pages/Order";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hide: { opacity: 0 },
  show: { opacity: 1 }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("base");
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  // const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  // const toppings = [
  //   "mushrooms",
  //   "peppers",
  //   "onions",
  //   "olives",
  //   "extra cheese",
  //   "tomatoes"
  // ];

  const setBase = (base) => {
    setPizza({ ...pizza, base: base });
    console.log(pizza);
  };

  const addTopping = (topping) => {
    let newToppings = [];

    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <div>
      <hr />

      <p>base -- {pizza.base}</p>
      <p>toppings -- {JSON.stringify(pizza.toppings)}</p>

      <AnimatePresence exitBeforeEnter>
        {currentPage === "base" && (
          <motion.div key="base" variants={variants} animate="show" exit="hide">
            <Base
              pizza={pizza}
              setBase={setBase}
              setCurrentPage={setCurrentPage}
            />
          </motion.div>
        )}
        {currentPage === "toppings" && (
          <motion.div
            key="toppings"
            variants={variants}
            animate="show"
            exit="hide"
          >
            <Toppings
              // toppings={pizza.toppings}
              pizza={pizza}
              setCurrentPage={setCurrentPage}
              addTopping={addTopping}
            />
          </motion.div>
        )}
        {currentPage === "order" && (
          <motion.div
            key="order"
            variants={variants}
            animate="show"
            exit="hide"
          >
            <Order
              pizza={pizza}
              setPizza={setPizza}
              setCurrentPage={setCurrentPage}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
