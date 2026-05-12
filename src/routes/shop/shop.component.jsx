import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { ShopContainer, ShopHeader } from './shop.styles.jsx';

const Shop = () => {
  return (
    <ShopContainer>
      <ShopHeader>
        <h1>SHOP ALL</h1>
        <p>Explore our complete collection of premium essentials</p>
      </ShopHeader>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    </ShopContainer>
  );
};

export default Shop;
