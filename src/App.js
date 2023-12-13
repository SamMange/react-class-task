
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CounterFunction from "./component/counterFunction";
import CounterClass from "./component/class"
import TodoApp from "./component/toDo";
import StartPage from "./startPage";
import {ProductList} from "./component/product"
import {Protfolio} from "./component/protfolio"
import YourComponent from "./component/cards";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<StartPage />}> 
          <Route path=":TodoApp" element={<TodoApp />} />
          </Route>
          <Route path="/CounterClass" element={<CounterClass />} />
          <Route path="/CounterFunction" element={<CounterFunction />} />
          <Route path="/Products" element={<ProductList />} />
          <Route path="/EProducts" element={<YourComponent />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
