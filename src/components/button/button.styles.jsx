import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.1em;
  line-height: 50px;
  padding: 0 35px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  font-family: inherit;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-black);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);

  &:hover {
    background-color: var(--color-gray-800);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1.5px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 1.5px solid black;
  }
`;
