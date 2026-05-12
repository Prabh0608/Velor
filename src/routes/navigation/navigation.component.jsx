import { Fragment, useContext, useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import {
  NavigationContainer,
  NavHeader,
  LogoContainer,
  NavLinks,
  NavLink,
  MobileMenuButton,
  MobileNavOverlay
} from './navigation.styles.jsx';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  return (
    <Fragment>
      <NavigationContainer $scrolled={isScrolled}>
        <NavHeader>
          <LogoContainer to='/'>
            <span className="logo-text">VELOR</span>
          </LogoContainer>

          <NavLinks className="desktop-links">
            <NavLink to='/shop'>SHOP</NavLink>
            <NavLink to='/shop/mens'>MEN</NavLink>
            <NavLink to='/shop/womens'>WOMEN</NavLink>
            <NavLink to='/shop/hats'>ACCESSORIES</NavLink>

            {currentUser ? (
              <NavLink as="span" onClick={signOutUser} className="auth-link">
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to='/auth' className="auth-link">SIGN IN</NavLink>
            )}

            <CartIcon />
          </NavLinks>

          <div className="mobile-actions">
            <CartIcon />
            <MobileMenuButton onClick={toggleMobileMenu} aria-label="Toggle menu">
              <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </MobileMenuButton>
          </div>
        </NavHeader>
      </NavigationContainer>

      <MobileNavOverlay $isOpen={isMobileMenuOpen}>
        <div className="mobile-links">
          <Link to='/shop' onClick={toggleMobileMenu}>SHOP</Link>
          <Link to='/shop/mens' onClick={toggleMobileMenu}>MEN</Link>
          <Link to='/shop/womens' onClick={toggleMobileMenu}>WOMEN</Link>
          <Link to='/shop/hats' onClick={toggleMobileMenu}>ACCESSORIES</Link>
          {currentUser ? (
            <span onClick={() => { signOutUser(); toggleMobileMenu(); }}>SIGN OUT</span>
          ) : (
            <Link to='/auth' onClick={toggleMobileMenu}>SIGN IN</Link>
          )}
        </div>
      </MobileNavOverlay>

      {isCartOpen && <CartDropdown />}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
