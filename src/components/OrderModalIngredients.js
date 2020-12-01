import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { MENU } from "../utils/constants";
import { NewPizzaContext } from "../contexts/NewPizzaContext";
import { CurrIngredientsContext } from "../contexts/CurrIngredientsContext";

function OrderModalIngredients(props) {
  const { newPizza } = useContext(NewPizzaContext);
  const { currIngredients } = useContext(CurrIngredientsContext);
  const {
    extras,
    handleIngredientClick,
    handleExtraIngredientInputClick,
    handleExtraIngredientClick,
  } = props;

  return (
    <>
      <ul className="modal-ingredients">
        {newPizza.ingredients.map((i, idx) => (
          <li
            key={uuidv4()}
            value={i}
            className="modal-ingredients-ingredient"
            onClick={() => handleIngredientClick(i)}
          >
            {currIngredients.includes(i) ? (
              <>
                <span className="modal-ingredients-ingredient-name">{i}</span>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-dash-circle"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </>
            ) : (
              <>
                <span className="modal-ingredients-ingredient-name-deleted">
                  {i}
                </span>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-return-left"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </>
            )}

            {newPizza.ingredients[idx + 1] && ","}
          </li>
        ))}
      </ul>
      {extras.length > 0 && (
        <React.Fragment>
          <h6>Dodatki:</h6>

          <ul className="modal-ingredients">
            {extras.map((el, idx) => (
              <li
                key={uuidv4()}
                className="modal-ingredients-ingredient"
                onClick={() => handleExtraIngredientClick(el)}
              >
                <span className="modal-ingredients-ingredient-name">
                  {el.name}
                </span>
                <span>{`+(${el.price}zł)`}</span>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-dash-circle"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                  />
                </svg>
                {extras[idx + 1] && ","}
              </li>
            ))}
          </ul>
        </React.Fragment>
      )}
      <Form>
        <Form.Group>
          <Form.Control
            onChange={handleExtraIngredientInputClick}
            size="sm"
            as="select"
            disabled={extras.length >= 5}
          >
            <option>Dodaj składnik</option>
            {MENU.pizzasIngredients.map((i, idx) => (
              <option key={idx} value={i.name}>
                {i.name} (+{i.price}pln)
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  );
}

export default OrderModalIngredients;
