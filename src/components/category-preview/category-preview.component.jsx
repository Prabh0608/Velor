import { useNavigate } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import {
  CategoryPreviewContainer,
  Title,
  Preview,
  SeeAll
} from './category-preview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  return (
    <CategoryPreviewContainer>
      <div className="header">
        <Title onClick={() => navigate(`/shop/${title}`)}>
          {title.toUpperCase()}
        </Title>
        <SeeAll onClick={() => navigate(`/shop/${title}`)}>
          SEE ALL →
        </SeeAll>
      </div>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
