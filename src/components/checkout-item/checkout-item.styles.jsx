import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr 1fr 0.5fr;
  gap: var(--spacing-sm);
  min-height: 100px;
  border-bottom: 1px solid var(--color-gray-200);
  padding: var(--spacing-sm) 0;
  align-items: center;
  font-size: 1rem;

  @media screen and (max-width: 640px) {
    grid-template-columns: 80px 1fr auto;
    grid-template-rows: auto auto;
    gap: var(--spacing-xs);
    padding: var(--spacing-md) 0;

    .name {
      grid-column: 2;
      grid-row: 1;
      font-weight: 700;
    }

    .price {
      grid-column: 3;
      grid-row: 1;
      text-align: right;
      font-weight: 700;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: var(--radius-md);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 640px) {
    grid-row: span 2;
  }
`;

export const BaseSpan = styled.span`
  color: var(--color-gray-700);
  font-weight: 500;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 640px) {
    grid-column: 2;
    grid-row: 2;
  }
`;

export const Arrow = styled.button`
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-gray-600);
  background: var(--color-gray-100);
  border: none;
  width: 28px;
  height: 28px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);

  &:hover {
    background: var(--color-gray-200);
    color: var(--color-black);
  }
`;

export const Value = styled.span`
  font-weight: 700;
  color: var(--color-black);
  min-width: 24px;
  text-align: center;
`;

export const RemoveButton = styled.button`
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 300;
  color: var(--color-gray-400);
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);

  &:hover {
    color: #ef4444;
    background: #fef2f2;
  }

  @media screen and (max-width: 640px) {
    grid-column: 3;
    grid-row: 2;
    justify-self: end;
  }
`;
