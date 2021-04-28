import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import "./App.css";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { docs } = await db.collection("Productos").get();
      const data = docs.map((item) => ({ id: item.id, ...item.data() }));
      setItems(data);
    };

    getData();
  }, []);

  return (
    <div className="card-container">
      {items.map((item) => (
        <div class="card" style={{ width: "18rem" }}>
          <img src={item.imagen} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{item.titulo}</h5>
            <p class="card-text">
              {item.descripcion}
            </p>
            <p>{item.precio}</p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
