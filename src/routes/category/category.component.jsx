import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import {
  CategoryContainer,
  CategoryHeader,
  CategoryGrid
} from './category.styles.jsx';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category] || []);
  }, [category, categoriesMap]);

  return (
    <CategoryContainer>
      <CategoryHeader>
        <h1>{category.toUpperCase()}</h1>
        <span>{products.length} products</span>
      </CategoryHeader>
      <CategoryGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CategoryGrid>
    </CategoryContainer>
  );
};

export default Category;
