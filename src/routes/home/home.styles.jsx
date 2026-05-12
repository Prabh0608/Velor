import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: linear-gradient(135deg, #c5d1be 0%, #a8b5a0 100%);
  padding: 0 var(--spacing-lg);
  padding-top: 72px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: rgba(255,255,255,0.1);
    border-radius: 50%;
  }

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: calc(72px + var(--spacing-xl)) var(--spacing-lg) var(--spacing-3xl);
    gap: var(--spacing-xl);
  }
`;

export const HeroContent = styled.div`
  max-width: 600px;
  z-index: 1;

  .hero-description {
    font-size: 1.1rem;
    color: var(--color-gray-700);
    margin-bottom: var(--spacing-xl);
    line-height: 1.7;
    max-width: 480px;
  }

  @media screen and (max-width: 968px) {
    max-width: 100%;
    text-align: center;

    .hero-description {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const HeroSubtitle = styled.span`
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-md);
`;

export const HeroTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: var(--color-black);
  margin-bottom: var(--spacing-lg);

  @media screen and (max-width: 968px) {
    text-align: center;
  }
`;

export const HeroCta = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: 16px 32px;
  background: var(--color-black);
  color: var(--color-white);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-radius: var(--radius-full);
  margin-bottom: var(--spacing-3xl);
  transition: all var(--transition-base);

  &:hover {
    background: var(--color-gray-800);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

export const HeroStats = styled.div`
  display: flex;
  gap: var(--spacing-xl);
  flex-wrap: wrap;

  @media screen and (max-width: 968px) {
    justify-content: center;
  }
`;

export const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .number {
    font-size: 0.75rem;
    font-weight: 800;
    color: var(--color-primary-dark);
    letter-spacing: 0.05em;
  }

  .label {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--color-gray-600);
    letter-spacing: 0.05em;
  }
`;

export const HeroImage = styled.div`
  position: relative;
  height: 80vh;
  max-height: 700px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
  }

  .image-badge {
    position: absolute;
    bottom: var(--spacing-lg);
    right: var(--spacing-lg);
    background: var(--color-white);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    display: flex;
    flex-direction: column;
    gap: 2px;

    span {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: var(--color-gray-500);
    }

    .price {
      font-size: 0.9rem;
      color: var(--color-black);
      font-weight: 800;
    }
  }

  @media screen and (max-width: 968px) {
    height: 50vh;
    max-height: 400px;
  }
`;

export const BrandMarquee = styled.div`
  background: var(--color-black);
  color: var(--color-white);
  padding: var(--spacing-md) 0;
  overflow: hidden;

  .marquee-track {
    display: flex;
    gap: var(--spacing-xl);
    animation: marquee 20s linear infinite;
    width: max-content;

    span {
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      white-space: nowrap;
    }
  }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

export const NewDropsSection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--spacing-3xl) var(--spacing-lg);
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
  gap: var(--spacing-sm);

  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--color-black);
  line-height: 1.2;
`;

export const SectionSubtitle = styled.p`
  font-size: 0.95rem;
  color: var(--color-gray-500);
  margin-top: 4px;
`;

export const ViewAllLink = styled.button`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gray-600);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-black);
  }
`;

export const FeaturedSection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg) var(--spacing-3xl);

  .featured-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-md);

    @media screen and (max-width: 968px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }

  .featured-card {
    cursor: pointer;
    border-radius: var(--radius-lg);
    overflow: hidden;
    position: relative;
    aspect-ratio: 3/4;

    .card-image {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform var(--transition-slow);
      }
    }

    .card-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: var(--spacing-lg);
      transition: opacity var(--transition-base);

      .category {
        font-size: 1.25rem;
        font-weight: 800;
        color: var(--color-white);
        letter-spacing: -0.01em;
      }

      .cta {
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: rgba(255,255,255,0.8);
        margin-top: var(--spacing-xs);
        transition: color var(--transition-fast);
      }
    }

    &:hover {
      img {
        transform: scale(1.05);
      }

      .cta {
        color: var(--color-white);
      }
    }
  }
`;

export const PromoSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--color-black);
  color: var(--color-white);
  min-height: 600px;

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const PromoContent = styled.div`
  padding: var(--spacing-3xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;

  .promo-label {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-primary-light);
    margin-bottom: var(--spacing-lg);
    display: block;
  }

  h2 {
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: var(--spacing-lg);
    letter-spacing: -0.01em;
  }

  p {
    font-size: 1rem;
    color: var(--color-gray-400);
    line-height: 1.7;
    margin-bottom: var(--spacing-xl);
  }

  button {
    align-self: flex-start;
    padding: 14px 32px;
    background: var(--color-white);
    color: var(--color-black);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    border-radius: var(--radius-full);
    transition: all var(--transition-fast);

    &:hover {
      background: var(--color-primary-light);
      transform: translateY(-2px);
    }
  }

  .promo-thumbnails {
    display: flex;
    gap: var(--spacing-sm);
    margin-top: var(--spacing-xl);

    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: var(--radius-md);
      border: 2px solid rgba(255,255,255,0.2);
      transition: all var(--transition-fast);
      cursor: pointer;

      &:hover {
        border-color: var(--color-white);
        transform: scale(1.1);
      }
    }
  }

  @media screen and (max-width: 968px) {
    padding: var(--spacing-2xl) var(--spacing-lg);
    max-width: 100%;
  }
`;

export const PromoImage = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, var(--color-black) 0%, transparent 30%);
  }

  @media screen and (max-width: 968px) {
    min-height: 400px;

    &::after {
      background: linear-gradient(to top, var(--color-black) 0%, transparent 30%);
    }
  }
`;

export const GallerySection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--spacing-3xl) var(--spacing-lg);

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 280px);
    gap: var(--spacing-md);

    .gallery-item {
      position: relative;
      border-radius: var(--radius-lg);
      overflow: hidden;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform var(--transition-slow);
      }

      .gallery-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity var(--transition-base);

        span {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-white);
          padding: 12px 24px;
          border: 2px solid var(--color-white);
          border-radius: var(--radius-full);
        }
      }

      &:hover {
        img {
          transform: scale(1.05);
        }

        .gallery-overlay {
          opacity: 1;
        }
      }

      &.large {
        grid-column: span 2;
        grid-row: span 2;
      }

      &.wide {
        grid-column: span 2;
      }
    }

    @media screen and (max-width: 968px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 200px);

      .gallery-item.large {
        grid-column: span 2;
        grid-row: span 1;
      }

      .gallery-item.wide {
        grid-column: span 2;
      }
    }

    @media screen and (max-width: 640px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 250px);

      .gallery-item,
      .gallery-item.large,
      .gallery-item.wide {
        grid-column: span 1;
        grid-row: span 1;
      }
    }
  }
`;

export const NewsletterSection = styled.section`
  background: var(--color-gray-900);
  padding: var(--spacing-3xl) var(--spacing-lg);
`;

export const NewsletterContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 800;
    color: var(--color-white);
    margin-bottom: var(--spacing-sm);
    letter-spacing: -0.02em;
  }

  p {
    color: var(--color-gray-400);
    margin-bottom: var(--spacing-xl);
    font-size: 1rem;
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  gap: var(--spacing-sm);
  max-width: 480px;
  margin: 0 auto;

  input {
    flex: 1;
    padding: 14px 20px;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: var(--radius-full);
    color: var(--color-white);
    font-size: 0.95rem;
    outline: none;
    transition: all var(--transition-fast);

    &::placeholder {
      color: var(--color-gray-500);
    }

    &:focus {
      border-color: var(--color-primary);
      background: rgba(255,255,255,0.15);
    }
  }

  button {
    padding: 14px 28px;
    background: var(--color-white);
    color: var(--color-black);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius: var(--radius-full);
    white-space: nowrap;
    transition: all var(--transition-fast);

    &:hover {
      background: var(--color-primary-light);
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;
