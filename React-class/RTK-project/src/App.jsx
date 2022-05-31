import { useCallback, useEffect, useState } from "react";
import Child from "./components/Child";
import { useGetUserQuery } from "./services/users";

function App() {
  // const { data } = useGetUserQuery();
  // console.log(data);
  const [state, setState] = useState(true);

  // const test = useCallback(() => {
  //   console.log("This is a test");
  // }, []);

  // const test = () => {
  //   console.log("This is a test");
  // };

  const test = 1;

  return (
    <div className="App">
      <Child callBack={test} />
      <button onClick={() => setState(!state)}>Click</button>
    </div>
  );
}

export default App;
