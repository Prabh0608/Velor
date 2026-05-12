import styled from 'styled-components';

export const CategoryContainer = styled.div`
  padding: var(--spacing-xl) 0;
`;

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--color-gray-200);

  h1 {
    font-size: 1.75rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--color-black);
  }

  span {
    font-size: 0.9rem;
    color: var(--color-gray-500);
    font-weight: 500;
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);

  @media screen and (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
