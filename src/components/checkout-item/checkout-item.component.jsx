import { useContext } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../../context/cart.context';

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="w-full flex min-h-[100px] items-center border-b border-gray-200 py-[15px] text-[20px]"
    >
      <div className="w-[23%] pr-[15px]">
        <img src={imageUrl} alt={name} className="w-full h-full border border-gray-200 rounded-md p-1 bg-white shadow-sm" />
      </div>
      <span className="w-[23%] text-lg font-semibold">{name}</span>
      <span className="w-[23%] flex items-center font-medium">
        <div className="cursor-pointer font-bold px-2 hover:text-[#8B9A84] transition-colors" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="mx-2">{quantity}</span>
        <div className="cursor-pointer font-bold px-2 hover:text-[#8B9A84] transition-colors" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="w-[23%] text-lg font-medium">${price}</span>
      <div 
        className="w-[8%] pl-3 cursor-pointer text-2xl font-bold text-gray-400 hover:text-black transition-colors" 
        onClick={clearItemHandler}
      >
        &#10005;
      </div>
    </motion.div>
  );
};

export default CheckOutItem;
