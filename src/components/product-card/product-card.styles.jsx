import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);

  .image-container {
    position: relative;
    aspect-ratio: 3/4;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: var(--color-gray-100);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-slow);
    }

    &:hover {
      img {
        transform: scale(1.05);
      }

      button {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 4px;
`;

export const Name = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-black);
  line-height: 1.4;
  max-width: 70%;
`;

export const Price = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-gray-600);
`;

export const AddButton = styled.button`
  position: absolute;
  bottom: var(--spacing-md);
  left: var(--spacing-md);
  right: var(--spacing-md);
  padding: 12px;
  background: var(--color-white);
  color: var(--color-black);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  opacity: 0;
  transform: translateY(10px);
  transition: all var(--transition-base);

  &:hover {
    background: var(--color-black);
    color: var(--color-white);
  }
`;
