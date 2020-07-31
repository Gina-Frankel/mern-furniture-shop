import React from "react";
import axios from "axios";
import ProductList from "../components/Index/ProductList";

function Home(props) {
  console.log(props);
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

//method on component
// get initial data that will be added t props of this component
// need to connect in _app page
Home.getInitialProps = () => {
  //fetch data on server
  //make get request
  //return response data as an object as props is an object
  //note: this object will be merged with existing props
  return { hello: "world" };
};

export default Home;
