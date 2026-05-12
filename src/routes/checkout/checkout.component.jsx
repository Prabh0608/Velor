import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { CheckOutContainer, CheckOutHeader, HeaderBlock, Total, CheckoutItemsList } from './checkout.styles.jsx'
import CheckOutItem from '../../components/checkout-item/checkout-item.compnent'

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <CheckOutContainer>
      <h1>CHECKOUT</h1>
      <CheckOutHeader>
        <HeaderBlock><span>Product</span></HeaderBlock>
        <HeaderBlock><span>Description</span></HeaderBlock>
        <HeaderBlock><span>Quantity</span></HeaderBlock>
        <HeaderBlock><span>Price</span></HeaderBlock>
        <HeaderBlock><span>Remove</span></HeaderBlock>
      </CheckOutHeader>
      <CheckoutItemsList>
        {cartItems.map((cartItem) => (
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </CheckoutItemsList>
      <Total>Total: ${cartTotal}</Total>
    </CheckOutContainer>
  )
}
export default CheckOut;
