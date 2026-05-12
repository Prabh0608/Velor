import styled from 'styled-components';

export const ShopContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: calc(72px + var(--spacing-3xl)) var(--spacing-lg) var(--spacing-3xl);
  min-height: 100vh;
`;

export const ShopHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-3xl);

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    color: var(--color-black);
    margin-bottom: var(--spacing-sm);
  }

  p {
    font-size: 1.1rem;
    color: var(--color-gray-500);
    max-width: 500px;
    margin: 0 auto;
  }
`;
