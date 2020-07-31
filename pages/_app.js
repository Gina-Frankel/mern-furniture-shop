import App from "next/app";
import Layout from "../components/_App/Layout";

class MyApp extends App {
  render() {
    const { Component } = this.props;
    //returning entire page
    return (
      <Layout>
        <Component />
      </Layout>
    );
  }
}

export default MyApp;
