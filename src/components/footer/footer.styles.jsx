import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: var(--color-black);
  color: var(--color-white);
  padding: var(--spacing-3xl) var(--spacing-lg) var(--spacing-lg);
`;

export const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: var(--spacing-3xl);
  padding-bottom: var(--spacing-2xl);
  border-bottom: 1px solid rgba(255,255,255,0.1);

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
`;

export const FooterBrand = styled.div`
  max-width: 360px;

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 0.15em;
    margin-bottom: var(--spacing-md);
  }

  p {
    font-size: 0.95rem;
    color: var(--color-gray-400);
    line-height: 1.7;
    margin-bottom: var(--spacing-lg);
  }

  .social-links {
    display: flex;
    gap: var(--spacing-sm);

    a {
      width: 40px;
      height: 40px;
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: var(--color-gray-400);
      transition: all var(--transition-fast);

      &:hover {
        border-color: var(--color-white);
        color: var(--color-white);
        background: rgba(255,255,255,0.1);
      }
    }
  }
`;

export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);

  div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);

    h4 {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--color-gray-500);
      margin-bottom: var(--spacing-sm);
    }

    a {
      font-size: 0.9rem;
      color: var(--color-gray-400);
      transition: color var(--transition-fast);

      &:hover {
        color: var(--color-white);
      }
    }
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FooterBottom = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-top: var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-sm);

  p {
    font-size: 0.85rem;
    color: var(--color-gray-500);
  }

  .legal {
    display: flex;
    gap: var(--spacing-lg);

    a {
      font-size: 0.85rem;
      color: var(--color-gray-500);
      transition: color var(--transition-fast);

      &:hover {
        color: var(--color-white);
      }
    }
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
    text-align: center;
  }
`;
