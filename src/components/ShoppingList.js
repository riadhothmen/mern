import React, { useEffect } from "react";
import { Container, ListGroup, Button, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, getItems } from "../actions/itemActions";

const ShoppingList = () => {
  const state = useSelector((state) => state.item.items);
  const dispatch = useDispatch();
  console.log(state);
  useEffect(() => {
    dispatch(getItems());
  }, []);
  return (
    <div>
      <Container>
        <ListGroup>
          <TransitionGroup className='ShoppingList'>
            {state.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    onClick={() => dispatch(deleteItem(_id))}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    </div>
  );
};

export default ShoppingList;