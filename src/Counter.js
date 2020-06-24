import React, { useState } from "react";

const Counter = () => {
  const counter = { number: 0, name: "" };
  const [state, setPartialState] = useSetState(counter);
  return (
    <div>
      <p>
        kliknales {state.number} w przycisko o nazwie: {state.name}
      </p>
      <button
        onClick={() => setPartialState({ ...state, number: state.number + 1 })}
      >
        {state.name}
      </button>
      <form action="">
        <input
          type="text"
          value={state.name}
          onChange={(e) => setPartialState({ ...state, name: e.target.value })}
        />
      </form>
    </div>
  );
};

const useSetState = (initial) => {
  const [state, setPartialState] = useState(initial);

  return [state, setPartialState];
};

export default Counter;
