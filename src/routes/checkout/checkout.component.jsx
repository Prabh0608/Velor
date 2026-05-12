import { useContext } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../../context/cart.context';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  
  return (
    <div className="w-[55%] min-h-[90vh] flex flex-col items-center my-12 mx-auto pt-24 pb-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight text-gray-900 mb-10 uppercase"
      >
        CHECKOUT
      </motion.h1>
      <div className="w-full py-4 flex justify-between border-b border-gray-300">
        <div className="capitalize w-[23%]">
          <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Product</span>
        </div>
        <div className="capitalize w-[23%]">
          <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Description</span>
        </div>
        <div className="capitalize w-[23%]">
          <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Quantity</span>
        </div>
        <div className="capitalize w-[23%]">
          <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Price</span>
        </div>
        <div className="capitalize w-[8%]">
          <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Remove</span>
        </div>
      </div>
      <div className="w-full flex flex-col mt-4">
        {cartItems.map((cartItem) => (
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 ml-auto text-4xl font-bold tracking-tight text-black"
      >
        Total: ${cartTotal}
      </motion.div>
    </div>
  );
};

export default CheckOut;
