// App.js
import { useEffect, useState } from "react";
import "./App.css";
import { getAllProducts } from "../utils/products";
import Card from "./components/Card";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setProducts(products);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center text-3xl font-semibold">Shopping List</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
