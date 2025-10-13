import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import {
    CheckoutItemContainer,
    ImageContainer,
    Name,
    Quantity,
    Arrow,
    Value,
    RemoveButton,
} from './checkout-item.styles';

const CheckOutItem = ({ cartItem }) => {
    const { deleteItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = cartItem;
    const deleteItemHandler = () => deleteItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Name> {name} </Name>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <Name> {price} </Name>
            <RemoveButton onClick={deleteItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )

}
export default CheckOutItem;