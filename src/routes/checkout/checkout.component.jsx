import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { CheckOutContainer, CheckOutHeader, HeaderBlock, Total } from './checkout.styles.jsx'

import CheckOutItem from '../../components/checkout-item/checkout-item.compnent'

const CheckOut = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <CheckOutContainer>
            <CheckOutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Discription</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckOutHeader>
            {cartItems.map((cartItem) => (
                <CheckOutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <Total>Total: ${cartTotal}</Total>
        </CheckOutContainer>
    )
}
export default CheckOut;