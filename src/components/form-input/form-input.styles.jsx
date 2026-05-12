import styled, { css } from 'styled-components';

export const FormInputLabel = styled.label`
  color: var(--color-gray-500);
  font-size: 0.85rem;
  font-weight: 500;
  position: absolute;
  pointer-events: none;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 200ms ease;
  background: var(--color-white);
  padding: 0 4px;

  ${({ shrink }) => shrink && css`
    top: 0;
    font-size: 0.7rem;
    color: var(--color-primary-dark);
    font-weight: 600;
  `};
`;

export const Input = styled.input`
  background: var(--color-white);
  color: var(--color-black);
  font-size: 0.95rem;
  padding: 14px 16px;
  display: block;
  width: 100%;
  border: 1.5px solid var(--color-gray-200);
  border-radius: var(--radius-md);
  transition: all 200ms ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(139, 154, 132, 0.15);
  }

  &:focus ~ label {
    top: 0;
    font-size: 0.7rem;
    color: var(--color-primary-dark);
    font-weight: 600;
  }

  &::placeholder {
    color: var(--color-gray-400);
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 8px 0;
`;
