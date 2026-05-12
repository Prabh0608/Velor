import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CartContext } from '../../context/cart.context';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setIsCartOpen(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute w-[280px] sm:w-[320px] h-[340px] flex flex-col p-5 border border-black bg-white top-24 right-6 sm:right-12 z-[1000] shadow-2xl rounded-xl"
    >
      <div className="h-[240px] flex flex-col overflow-y-scroll overflow-x-hidden border-b border-gray-100 pb-2 mb-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="text-[16px] m-auto text-gray-500 font-medium">Your cart is empty</span>
        )}
      </div>
      <button 
        onClick={goToCheckoutHandler}
        className="mt-4 w-full h-[50px] bg-black text-white text-xs font-bold tracking-[0.1em] uppercase hover:bg-[#8B9A84] transition-colors rounded-full"
      >
        GO TO CHECKOUT
      </button>
    </motion.div>
  );
};

export default CartDropdown;
