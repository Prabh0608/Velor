import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.$scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(20px)' : 'none'};
  border-bottom: ${props => props.$scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent'};
  transition: all var(--transition-base);
`;

export const NavHeader = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .mobile-actions {
    display: none;
    align-items: center;
    gap: var(--spacing-sm);
  }

  @media screen and (max-width: 768px) {
    .desktop-links {
      display: none !important;
    }

    .mobile-actions {
      display: flex;
    }
  }
`;

export const LogoContainer = styled(Link)`
  .logo-text {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 0.15em;
    color: var(--color-black);
    line-height: 1;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);

  .auth-link {
    font-weight: 500;
    padding: 0.5rem 1rem;
    border: 1.5px solid var(--color-black);
    border-radius: var(--radius-full);
    transition: all var(--transition-fast);

    &:hover {
      background: var(--color-black);
      color: var(--color-white);
    }
  }
`;

export const NavLink = styled(Link)`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gray-700);
  padding: 0.5rem 0;
  position: relative;
  transition: color var(--transition-fast);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1.5px;
    background: var(--color-black);
    transition: width var(--transition-base);
  }

  &:hover {
    color: var(--color-black);

    &::after {
      width: 100%;
    }
  }
`;

export const MobileMenuButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;

  .hamburger {
    width: 24px;
    height: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      display: block;
      width: 100%;
      height: 2px;
      background: var(--color-black);
      transition: all 0.3s ease;
      transform-origin: center;
    }

    &.open {
      span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }
    }
  }
`;

export const MobileNavOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;

  .mobile-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-xl);

    a, span {
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-black);
      cursor: pointer;
      transition: color var(--transition-fast);

      &:hover {
        color: var(--color-primary);
      }
    }
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;
