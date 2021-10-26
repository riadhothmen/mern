import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { useDispatch } from "react-redux";
import { addItems } from "../actions/itemActions";

const ItemModal = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const onChange = (e) => {
    setName(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: name,
    };
    dispatch(addItems(newItem));
    toggle();
  };

  return (
    <div>
      <Button color='dark' style={{ marginBottom: "2rem" }} onClick={toggle}>
        Add Item
      </Button>

      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Addd to shopping list</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for='item'>Item</Label>
              <Input
                typ='text'
                name={name}
                id='item'
                placeholder='Add shopping item'
                onChange={onChange}
              ></Input>
              <Button color='dark' style={{ matginTop: "2rem" }} block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ItemModal;