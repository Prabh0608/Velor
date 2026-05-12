import styled from 'styled-components';

export const CartIconContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform var(--transition-fast);

  &:hover {
    transform: scale(1.05);
  }
`;

export const ShoppingIcon = styled.div`
  width: 22px;
  height: 22px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    border: 2px solid var(--color-gray-700);
    border-radius: 50% 50% 0 0;
    border-bottom: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 14px;
    border: 2px solid var(--color-gray-700);
    border-radius: 0 0 6px 6px;
    border-top: none;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  top: -2px;
  right: -2px;
  background: var(--color-black);
  color: var(--color-white);
  font-size: 0.65rem;
  font-weight: 700;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
