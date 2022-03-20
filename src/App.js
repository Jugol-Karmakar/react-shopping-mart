import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const addToCart = () => setCount(count + 1);
  return (
    <div className="App">
      <Header count={count}></Header>
      <h1>hello shopping</h1>
      <Products addToCart={addToCart}></Products>
    </div>
  );
}

export default App;
