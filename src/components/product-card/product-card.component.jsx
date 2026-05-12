import { useContext } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../../context/cart.context';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <motion.div 
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="group flex flex-col cursor-pointer"
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl mb-4 bg-gray-100 shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Quick Add Button */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <motion.button 
            whileTap={{ scale: 0.96 }}
            onClick={addProductToCart}
            className="w-full py-3.5 bg-white/95 backdrop-blur-sm text-black text-xs font-bold tracking-[0.1em] uppercase rounded-full shadow-lg hover:bg-black hover:text-white transition-colors"
          >
            ADD TO CART
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col gap-1 px-1">
        <span className="text-sm font-semibold text-gray-900 line-clamp-1">{name}</span>
        <span className="text-sm font-bold text-gray-500">${price}</span>
      </div>
    </motion.div>
  );
};

export default ProductCard;
