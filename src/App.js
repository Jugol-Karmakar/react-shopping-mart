import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);
  const addToCart = () => setCount(count + 1);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Header count={count}></Header>
      <h1>hello shopping</h1>
      <Products addToCart={addToCart}></Products>
    </div>
  );
}

export default App;
