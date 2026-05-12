import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category] || []);
  }, [category, categoriesMap]);

  return (
    <div className="flex flex-col mb-24">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
        <div className="flex flex-col gap-2">
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/shop')}
            className="text-xs font-bold tracking-widest text-gray-500 hover:text-black transition-colors uppercase flex items-center gap-1.5 w-fit"
          >
            <span className="transform rotate-180 text-lg leading-none">→</span> BACK TO SHOP
          </motion.button>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight text-gray-900 leading-none mt-2"
          >
            {category?.toUpperCase()}
          </motion.h1>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium text-gray-500 tracking-widest uppercase"
          >
            {products.length} products
          </motion.span>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </div>
  );
};

export default Category;
