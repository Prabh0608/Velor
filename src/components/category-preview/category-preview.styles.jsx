import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  margin-bottom: var(--spacing-2xl);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-lg);
    padding-bottom: var(--spacing-sm);
    border-bottom: 1px solid var(--color-gray-200);
  }
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-black);
  cursor: pointer;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-primary-dark);
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);

  @media screen and (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const SeeAll = styled.button`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gray-500);
  background: none;
  border: none;
  cursor: pointer;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-black);
  }
`;
