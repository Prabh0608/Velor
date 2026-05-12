import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: background var(--transition-fast);

  &:hover {
    background: var(--color-gray-100);
  }
`;

export const ItemImage = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: var(--radius-sm);
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`;

export const ItemName = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-black);
  line-height: 1.3;
`;

export const ItemPrice = styled.span`
  font-size: 0.8rem;
  color: var(--color-gray-500);
  font-weight: 500;
`;
