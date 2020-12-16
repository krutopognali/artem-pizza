import { useState } from "react";
import { PizzaForm } from "./Components/PizzaForm";
import { PizzaPreview } from "./Components/PizzaPreview";

function App() {
  const [pizza, setPizza] = useState();

  if (pizza) {
    return (
      <>
        <h1>Ваша пицца</h1>
        <PizzaPreview pizza={pizza} />
      </>
    );
  }

  return (
    <>
      <h1>Артём Пицца</h1>
      <PizzaForm onPizzaCreated={setPizza} />
    </>
  );
}

export default App;
