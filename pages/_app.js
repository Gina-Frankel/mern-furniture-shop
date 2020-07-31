import App from "next/app";
import Layout from "../components/_App/Layout";

class MyApp extends App {
  // static methods can be accessed outside class component as it is static method
  //ctx stands for context, - provides additional information - current route, request/ response info
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    //check if component has a getInitialProps method if it does exectute
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps: pageProps };
    // can shorten it to {pageProps} as have same name
  }
  render() {
    const { Component, pageProps } = this.props;
    //returning entire page
    return (
      <Layout>
        {/* ... spread operator to spread in all of the props flatten into individual properties and values   */}
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
