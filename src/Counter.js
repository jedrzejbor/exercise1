import React, { useState, useCallback } from "react";

const Counter = () => {
  const counter = { number: 0, name: "" };
  const [states, setPartialStates] = useSetState(counter);
  return (
    <div>
      <p>
        kliknales {states.number} w przycisko o nazwie: {states.name}
      </p>
      <button onClick={() => setPartialStates({ number: states.number + 1 })}>
        {states.name}
      </button>
      <form action="">
        <input
          type="text"
          value={states.name}
          onChange={(e) => setPartialStates({ name: e.target.value })}
        />
      </form>
    </div>
  );
};

const useSetState = (initial) => {
  const [state, setState] = useState(initial);

  const setPartialState = useCallback(
    (value) => {
      console.log(value);
      setState((prevState) =>
        Object.assign(
          {},
          prevState,
          value instanceof Function ? value(prevState) : value
        )
      );
    },
    [setState]
  );

  return [state, setPartialState];
};

export default Counter;
