import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import ProductCard from "./ProductCard";


const API_URL = "https://fakestoreapi.com/products";

// const movie1 = {
//   Title: "The Matrix Revisited",
//   Year: "2001",
//   imdbID: "tt0295432",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMTkzNjg3NjE4N15BMl5BanBnXkFtZTgwNTc3NTAwNzE@._V1_SX300.jpg",
// };

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchProducts = async (title) => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      const filteredProducts = data.filter((product) =>
        product.title.toLowerCase().includes(title.toLowerCase())
      );
      setProducts(filteredProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchProducts("");
  }, []);

  return (
    <div className="app">
      <h1>Buy Clothes</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for products"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <img 
        src={SearchIcon} 
        alt="Search" 
        onClick={() => searchProducts(searchTerm)} />
      </div>

      {products.length > 0 ? (
        <div className="container">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No products found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
