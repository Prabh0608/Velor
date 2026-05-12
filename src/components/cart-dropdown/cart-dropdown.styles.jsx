import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  width: 340px;
  max-height: 500px;
  background: var(--color-white);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-md);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);

  @media screen and (max-width: 480px) {
    width: calc(100vw - 2rem);
    right: -1rem;
    max-height: 70vh;
  }
`;

export const CartItems = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  max-height: 320px;
  padding-right: var(--spacing-xs);

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-gray-300);
    border-radius: var(--radius-full);
  }
`;

export const EmptyMessage = styled.span`
  font-size: 0.9rem;
  color: var(--color-gray-500);
  text-align: center;
  padding: var(--spacing-xl) 0;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 14px;
  background: var(--color-black);
  color: var(--color-white);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);

  &:hover {
    background: var(--color-gray-800);
    transform: translateY(-1px);
  }
`;
