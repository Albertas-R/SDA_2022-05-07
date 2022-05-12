// https://reactjs.org/docs/react-api.html

// memo - for when you want to AVOID RENDERS when parent renders (usually)
// useCallback - used to remember a function through different renders
// useMemo - used to remember a value through different renders

import React, { useRef } from "react";

export const App = () => {
  // https://reactjs.org/docs/hooks-reference.html#useref
  // const element = useRef(null);
  const element = useRef();
  console.log(element);

  const handleFocus = () => {
    console.log(element);

    element.current.focus();
  };

  return (
    <div>
      <input ref={element} type="text" />
      <button onClick={handleFocus}>Click to focus</button>
    </div>
  );
};

// useRef sukuria ref kintamajį
// ref propsas priskiria jį elementui

// useRef skirtumas nuo state, kad:
// 1. netrigerina life cycle
// 2. o nuo kintamojo, kad jis atsimena kiekvieną life cycle eventą praėjus vis tiek reikšmei
// pagrinde naudojamas atsiminti html elementams
