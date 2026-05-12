import styled from 'styled-components';

export const CheckOutContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: calc(72px + var(--spacing-3xl)) var(--spacing-lg) var(--spacing-3xl);
  min-height: 90vh;

  h1 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    color: var(--color-black);
    margin-bottom: var(--spacing-xl);
    text-align: center;
  }
`;

export const CheckOutHeader = styled.div`
  width: 100%;
  padding: var(--spacing-sm) 0;
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr 1fr 0.5fr;
  gap: var(--spacing-sm);
  border-bottom: 2px solid var(--color-gray-200);
  margin-bottom: var(--spacing-md);

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const HeaderBlock = styled.div`
  span {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-gray-500);
  }
`;

export const CheckoutItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

export const Total = styled.div`
  margin-top: var(--spacing-xl);
  margin-left: auto;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-black);
  text-align: right;
  padding-top: var(--spacing-lg);
  border-top: 2px solid var(--color-black);
`;
