import { Header } from "semantic-ui-react";

function ProductAttributes({ description }) {
  return (
    <>
      <Header as="h3"> About this Product </Header>
      <p>{description}</p>
    </>
  );
}

export default ProductAttributes;
