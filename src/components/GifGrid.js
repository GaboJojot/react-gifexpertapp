import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  const { data: images, loading } = useFetchGifs(category);
  //Sirve para trabajar los efectos secundarios en tus componentes.
  //Un efecto secundario es todo aquello q no se relaciona con el valor de salida del componente.
  //con useEffect podemos ejecutar un método al cargar el componente y justo antes de que se vaya a ser destruido.
  //podemos indicar condiciones para evitar que se ejecute.

  return (
    <>
      <h3 className="card animate__animated animate__fadeIn">{category}</h3>
      {loading && (
        <p className="card animate__animated animate__flash">Loading</p>
      )}
      {
        <div className="card-grid">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      }
    </>
  );
};
