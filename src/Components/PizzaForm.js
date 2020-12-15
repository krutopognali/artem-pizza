/* const pizza = {
  size: "30см",
  dough: "thin",
  sauces: "tomato",
  cheese: ["mozzarella", "cheddar", "dor blue"],
  vegetables: ["tomato", "mushroom", "pepper"],
  meat: ["bacon", "pepperoni", "ham"]
} */

import { useState } from "react";
import { calculatePrice } from "../calculatePrice";

export function PizzaForm() {
  const [size, setSize] = useState("medium");
  const [dough, setDough] = useState("thin");
  const [sauce, setSauce] = useState("tomato");
  const [cheese, setCheese] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const [meat, setMeat] = useState([]);

  const price = calculatePrice({ size, cheese, vegetables, meat });

  const updateSize = (event) => {
    setSize(event.target.value);
  };
  const updateDough = (event) => {
    setDough(event.target.value);
  };
  const updateSauce = (event) => {
    setSauce(event.target.value);
  };

  const updateCheese = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheese((cheese) => [...cheese, value]);
    } else {
      setCheese((cheese) => cheese.filter((c) => c !== value));
    }
  };
  const updateVegetables = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setVegetables((vegetables) => [...vegetables, value]);
    } else {
      setVegetables((vegetables) => vegetables.filter((v) => v !== value));
    }
  };
  const updateMeat = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setMeat((meat) => [...meat, value]);
    } else {
      setMeat((meat) => meat.filter((m) => m !== value));
    }
  };

  return (
    <form>
      <fieldset>
        <legend>Размер</legend>
        <label>
          <input
            type='radio'
            value='medium'
            onChange={updateSize}
            checked={size === "medium"}
          />
          30 см
        </label>
        <label>
          <input
            type='radio'
            value='big'
            onChange={updateSize}
            checked={size === "big"}
          />
          35 см
        </label>
      </fieldset>

      <fieldset>
        <legend>Тесто</legend>
        <label>
          <input
            type='radio'
            value='lush'
            onChange={updateDough}
            checked={dough === "lush"}
          />
          Пышное
        </label>
        <label>
          <input
            type='radio'
            value='thin'
            onChange={updateDough}
            checked={dough === "thin"}
          />
          Тонкое
        </label>
      </fieldset>

      <fieldset>
        <legend>Соус</legend>
        <label>
          <input
            type='radio'
            value='tomato'
            onChange={updateSauce}
            checked={sauce === "tomato"}
          />
          Томатный
        </label>
        <label>
          <input
            type='radio'
            value='white'
            onChange={updateSauce}
            checked={sauce === "white"}
          />
          Белый
        </label>
        <label>
          <input
            type='radio'
            value='hot'
            onChange={updateSauce}
            checked={sauce === "hot"}
          />
          Острый
        </label>
      </fieldset>

      <fieldset>
        <legend>Добавьте сыр</legend>
        <label>
          <input
            type='checkbox'
            value='mozzarella'
            onChange={updateCheese}
            checked={cheese.includes("mozzarella")}
          />
          Моцарелло
        </label>
        <label>
          <input
            type='checkbox'
            value='cheddar'
            onChange={updateCheese}
            checked={cheese.includes("cheddar")}
          />
          Чеддер
        </label>
        <label>
          <input
            type='checkbox'
            value='dorblue'
            onChange={updateCheese}
            checked={cheese.includes("dorblue")}
          />
          Дор Блю
        </label>
      </fieldset>

      <fieldset>
        <legend>Добавьте овощи</legend>
        <label>
          <input
            type='checkbox'
            value='tomato'
            onChange={updateVegetables}
            checked={vegetables.includes("tomato")}
          />
          Помидоры
        </label>
        <label>
          <input
            type='checkbox'
            value='mushrooms'
            onChange={updateVegetables}
            checked={vegetables.includes("mushrooms")}
          />
          Грибы
        </label>
        <label>
          <input
            type='checkbox'
            value='pepper'
            onChange={updateVegetables}
            checked={vegetables.includes("pepper")}
          />
          Перец
        </label>
      </fieldset>

      <fieldset>
        <legend>Добавьте мясо</legend>
        <label>
          <input
            type='checkbox'
            value='bacon'
            onChange={updateMeat}
            checked={meat.includes("bacon")}
          />
          Бекон
        </label>
        <label>
          <input
            type='checkbox'
            value='pepperoni'
            onChange={updateMeat}
            checked={meat.includes("pepperoni")}
          />
          Пепперони
        </label>
        <label>
          <input
            type='checkbox'
            value='ham'
            onChange={updateMeat}
            checked={meat.includes("ham")}
          />
          Ветчина
        </label>
      </fieldset>
      <button>Заказать за {price} </button>
    </form>
  );
}
