import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 72px;

  .forms-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--spacing-3xl);
    gap: var(--spacing-xl);
    max-width: 480px;
    margin: 0 auto;
    width: 100%;
  }

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;

    .forms-wrapper {
      padding: var(--spacing-2xl) var(--spacing-lg);
      max-width: 100%;
    }
  }
`;

export const AuthHero = styled.div`
  position: relative;
  background: var(--color-black);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  .content {
    padding: var(--spacing-3xl);
    z-index: 2;
    position: relative;

    .label {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--color-primary-light);
      margin-bottom: var(--spacing-lg);
      display: block;
    }

    h2 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 900;
      letter-spacing: -0.02em;
      margin-bottom: var(--spacing-md);
    }

    p {
      font-size: 1rem;
      color: var(--color-gray-400);
      line-height: 1.7;
      max-width: 400px;
    }
  }

  .image {
    position: absolute;
    inset: 0;
    z-index: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.4;
    }
  }

  @media screen and (max-width: 968px) {
    min-height: 300px;
  }
`;

export const AuthPanel = styled.div`
  width: 100%;
`;

export const AuthDivider = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  color: var(--color-gray-400);
  font-size: 0.8rem;
  font-weight: 600;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--color-gray-200);
  }
`;
