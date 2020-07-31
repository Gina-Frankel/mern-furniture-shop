import React from "react";
import axios from "axios";

function Home() {
  //interacting with the outside world - something where we don't know what the result will be
  React.useEffect(() => {
    getProducts();
  }, []);

  //async automatically returns promoise
  async function getProducts() {
    const url = "http://localhost:3000/api/products";
    const response = await axios.get(url);
    console.log(response.data);
  }
  return <>home</>;
}

export default Home;
