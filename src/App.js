import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CounterFunction from "./component/counterFunction";
import CounterClass from "./component/class"
import TodoApp from "./component/toDo";
import StartPage from "./startPage"

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/CounterFunction" element={<CounterFunction />} />
          <Route path="/CounterClass" element={<CounterClass />} />
          <Route path="/TodoApp" element={<TodoApp />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;
