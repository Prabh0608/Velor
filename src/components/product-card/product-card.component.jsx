import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
  AddButton
} from './product-card.styles.jsx';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
        <AddButton onClick={addProductToCart}>
          ADD TO CART
        </AddButton>
      </div>
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
    </ProductCartContainer>
  );
};

export default ProductCard;
