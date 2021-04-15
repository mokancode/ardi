import { createContext, useState } from "react";

// import all css modules

const RefsContext = createContext({
  refs: [],
  addRef: (newRef) => {},
});

export function RefsContextProvider(props) {
  const [contextRefs, setContextRefs] = useState([]);

  function addRefHandler(newRef) {
    setContextRefs((prevRefsList) => {
      prevRefsList.push({
        name: newRef.name,
        ref: newRef.ref,
      });
      return prevRefsList;
    });
  }

  const context = {
    refs: contextRefs,
    addRef: addRefHandler,
  };

  return (
    <RefsContext.Provider value={context}>
      {props.children}
    </RefsContext.Provider>
  );
}

export default RefsContext;
