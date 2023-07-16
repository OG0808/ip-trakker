import { useForm } from "react-hook-form";
import "./App.css";
import useFecth from "./hooks/useFetch";
import Maped from "./components/Maped";
import { useEffect, useState } from "react";
import IpAddresInfo from "./components/IpAddresInfo";

function App() {
  const [position, setPosition] = useState();

  //? Manejo de form
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (values) => {
    setPosition(values.ip);
    reset();
  };

  //? localizacion por la api
  const ipAddress = position;
//? aqui hay dos apis la que se debe de utilizar sefun el reto pero 
//? pero no la utilice por que tiene un numero limitado de llamadas
//? uan que podriamos hacer un funcionalidad para que al acerle click
//? se cambie de de api y muestre valores diferentes 
  const url = `https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8/${ipAddress}`;
  const url2 = `https://geo.ipify.org/api/v2/country,city?apiKey=at_zpQJ3faTg4xMRcEN3yhSTqUwG9SOv&ipAddress=${ipAddress}`;
  const [location, getLocation] = useFecth(url);

  useEffect(() => {
    getLocation()?.catch(() => {
      setError(true);
    });
  }, [position]);

  //!Manejando el error de la ip no valida

  

  

  return (
    <div className="ipaddres">
      <div className="ipaddres__form">
        <h1>IP Address Tracker</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("ip")} type="text" />
          <button>
            <i className="bx bxs-right-arrow bx-sm"></i>
          </button>
        </form>
        <div className="ipaddres__info">
          <IpAddresInfo location={location} />
        </div>
      </div>

      <Maped location={location} />
    </div>
  );
}

export default App;

//192.168.1.10
