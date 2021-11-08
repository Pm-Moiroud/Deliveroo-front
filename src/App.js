import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("https://deliveroo-db.herokuapp.com/");
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <Header
        name={data.restaurant.name}
        description={data.restaurant.description}
        picture={data.restaurant.picture}
      />
      {data.categories.map((categorie, index) => {
        return (
          <div>
            <Content
              key={index}
              name={categorie.name}
              meals={categorie.meals}
            />
          </div>
        );
      })}
    </>
  );
}

export default App;
