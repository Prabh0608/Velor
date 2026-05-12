import { useContext } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../../context/cart.context';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-10 h-10 flex items-center justify-center cursor-pointer" 
      onClick={toggleIsCartOpen}
    >
      <div className="w-[22px] h-[22px] relative flex justify-center mt-1">
        <div className="absolute top-0 w-3 h-3 border-2 border-gray-700 rounded-t-full border-b-0" />
        <div className="absolute bottom-0 w-full h-[14px] border-2 border-gray-700 rounded-b-md border-t-0 bg-white" />
      </div>
      <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
        {cartCount}
      </span>
    </motion.div>
  );
};

export default CartIcon;
