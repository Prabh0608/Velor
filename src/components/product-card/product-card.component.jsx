import { useContext } from 'react'
import { ProductCardContainer, FooterContainer, Name, Price } from './product-card.styles.jsx'
import { CartContext } from '../../context/cart.context'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <FooterContainer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </FooterContainer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
    );
}

export default ProductCard;