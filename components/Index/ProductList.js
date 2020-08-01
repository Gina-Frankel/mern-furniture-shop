import { Card } from "semantic-ui-react";

function ProductList(props) {
  function mapProductsToItem(products) {
    return products.map((product) => ({
      header: product.name,
      image: product.mediaUrl,
      meta: `$${product.price}`,
      color: "pink",
      fluid: true,
      childKey: product._id,
      // Query string
      href: `/product?_id${product._id}`,
    }));
  }
  return (
    <>
      <Card.Group items={mapProductsToItem(props.products)} />
    </>
  );
}

export default ProductList;
