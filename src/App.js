import { useState } from "react";
import CounterFunction from "./component/counterFunction";

function App() {
  const [loginStatus, setLoginStatus] = useState('')


  return (
    <>
      <button onClick={() => {}}>{`${loginStatus ? "Click to Logged Out" : "Click to Logged In"}`}</button>
      <CounterFunction />
    </>
  )
}

export default App;
