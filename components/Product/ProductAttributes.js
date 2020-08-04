import { Header, Button, Modal } from "semantic-ui-react";
import { Model, modelNames } from "mongoose";

function ProductAttributes({ description }) {
  return (
    <>
      <Header as="h3"> About this Product </Header>
      <p>{description}</p>
      <Button
        icon="trash alternate outline"
        color="red"
        content="Delete Product"
      />
      <Modal open={true} dimmer="blurring">
        <Modal.Header>Confirm delete</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete this product?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button content="cancel" />
          <Button
            negative
            icon="trash"
            labelPosition="right"
            content="delete"
          />
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default ProductAttributes;
