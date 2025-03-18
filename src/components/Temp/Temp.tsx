import viteLogo from "../../assets/vite.svg";
import reactLogo from "../../assets/react.svg";
import { Button } from "react-bootstrap";
import { increment, useCount } from "../../store/count";
import store from "../../store/store";

export const Temp = () => {
  const count = useCount();
  const setCount = () => {
    store.dispatch(increment(""));
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button
          variant="primary"
          onClick={setCount}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Temp;
