import React, { useState, useCallback } from "react";

const Counter = () => {
  const counter = { number: 0, name: "" };
  const [states, setPartialStates] = useSetState(counter);

  const addNumber = () => {
    setPartialStates({ number: states.number + 1 })
  };
  const changeName = (e) => {
    setPartialStates({ name: e.target.value})
  };

  console.log(states);
  return (
    <div>
      <p>
        kliknales {states.number} w przycisko o nazwie: {states.name}
      </p>
      <button onClick={addNumber}>
        {states.name}
      </button>
      <form action="">
        <input
          type="text"
          value={states.name}
          onChange= {changeName}
        />
      </form>
    </div>
  );
};

const useSetState = (initial) => {
  const [state, setState] = useState(initial);

  const setPartialState = useCallback(
    (value) => {
      const valueToStore = value instanceof Function ? value(state) : value;
      console.log(value);
      setState((prevState) =>
        Object.assign(
          {},
          prevState,
          valueToStore
        )
      );
    },
    [state]
  );

  return [state, setPartialState];
};

export default Counter;
