import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);

  @media screen and (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
