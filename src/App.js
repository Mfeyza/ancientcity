import React, { useState } from "react";
import { data } from "./helper/data";
import CardContainer from "./components/CardContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [city, setCity] = useState(data);
  const handlesearch = (e) => {
    let searchcity = e.target.value.toLowerCase().split("").join("");
    let filtcity = data.filter((city) => {
      return city && city.name && city.name.toLowerCase().split("").join("").includes(searchcity);
    });
    setCity(filtcity);
  }

  return (
    <div className="App">
      <Navbar handlesearch={handlesearch}/>
      <CardContainer data={city} />
      <Footer/>
    </div>
  );
}

export default App;