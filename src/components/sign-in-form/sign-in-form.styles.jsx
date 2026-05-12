import styled from 'styled-components';

export const SignInContainer = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-black);
    margin-bottom: 4px;
  }

  p {
    font-size: 0.9rem;
    color: var(--color-gray-500);
    margin-bottom: var(--spacing-lg);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
`;
