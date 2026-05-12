import styled from 'styled-components';

export const DirectoryItemContainer = styled.div`
  position: relative;
  min-height: 380px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: transform var(--transition-base), box-shadow var(--transition-base);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);

    .background-image {
      transform: scale(1.08);
    }

    .cta {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 640px) {
    min-height: 300px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  transition: transform var(--transition-slow);
  position: absolute;
  inset: 0;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 50%, transparent 100%);
  }
`;

export const Body = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-lg);
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 6px;

  h2 {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--color-white);
    letter-spacing: -0.01em;
    text-transform: uppercase;
  }

  p {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.7);
    font-weight: 500;
  }

  .cta {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: var(--color-white);
    margin-top: var(--spacing-xs);
    opacity: 0;
    transform: translateX(-10px);
    transition: all var(--transition-base);
  }
`;
