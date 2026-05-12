import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton
} from './checkout-item.styles.jsx';

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan className="name">{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>−</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>+</Arrow>
      </Quantity>
      <BaseSpan className="price">${price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>×</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckOutItem;
