import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/Header";
import Content from "./components/Content";
import Basket from "./components/Basket";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://deliveroo-db.herokuapp.com/");
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <div className="background-header">
        <Header
          name={data.restaurant.name}
          description={data.restaurant.description}
          picture={data.restaurant.picture}
        />
      </div>

      <div className="flex">
        <div>
          {data.categories.map((categorie, index) => {
            if (categorie.meals.length) {
              return (
                <div>
                  <Content
                    key={index}
                    name={categorie.name}
                    meals={categorie.meals}
                    basket={basket}
                    setBasket={setBasket}
                  />
                </div>
              );
            }
          })}
        </div>
        <div className="basket">
          <Basket basket={basket} setBasket={setBasket} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
