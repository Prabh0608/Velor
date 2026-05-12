import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 pb-24 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-20 mt-12"
      >
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight text-gray-900 mb-4">
          SHOP ALL
        </h1>
        <p className="text-lg text-gray-500 max-w-lg mx-auto">
          Explore our complete collection of premium essentials
        </p>
      </motion.div>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    </div>
  );
};

export default Shop;
