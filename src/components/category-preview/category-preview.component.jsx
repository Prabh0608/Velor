import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../product-card/product-card.component';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
        <h2 
          className="text-3xl font-black tracking-tight text-gray-900 cursor-pointer hover:text-[#8B9A84] transition-colors uppercase"
          onClick={() => navigate(`/shop/${title}`)}
        >
          {title}
        </h2>
        <motion.button 
          whileHover={{ x: 4 }}
          onClick={() => navigate(`/shop/${title}`)}
          className="text-xs font-bold tracking-[0.1em] text-gray-500 hover:text-black transition-colors uppercase flex items-center gap-1.5"
        >
          SEE ALL <span className="text-lg leading-none">→</span>
        </motion.button>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </motion.div>
  );
};

export default CategoryPreview;
