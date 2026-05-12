import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoriesContext } from '../../context/categories.context';
import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles.jsx';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&auto=format&fit=crop',
    subtitle: 'Headwear Collection'
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop',
    subtitle: 'Outerwear'
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop',
    subtitle: 'Footwear'
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop',
    subtitle: "Women's Line"
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop',
    subtitle: "Men's Line"
  }
];

const Directory = () => {
  const navigate = useNavigate();

  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem 
          key={category.id} 
          category={category} 
          onClick={() => navigate(`/shop/${category.title}`)}
        />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
