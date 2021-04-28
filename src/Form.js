import React, { useState } from "react";
import './App.css'
import { db } from "./firebase";


const Form = () => {
    const [producto, setProducto] = useState({
        titulo: '',
        imagen: '',
        precio: 0,
        descripcion: ''
    })

    const handleChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await db.collection("Productos").add(producto)
            console.log("upload success")
        } catch (error) {
            console.log(error)
        }
        
        e.target.reset()
    }

  return (
    <form className="formulario-container" onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          titulo
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          name="titulo"
          onChange={handleChange}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          imagen
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          name="imagen"
          onChange={handleChange}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          precio
        </label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          name="precio"
          onChange={handleChange}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          descripcion
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name="descripcion"
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">cargar</button>
    </form>
  );
};

export default Form;
