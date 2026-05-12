import { Fragment, useContext, useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

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

  const NavItem = ({ to, children, onClick, as: Component = Link }) => (
    <Component 
      to={to} 
      onClick={onClick}
      className="text-xs font-bold tracking-[0.1em] uppercase text-gray-700 py-2 relative group cursor-pointer transition-colors hover:text-black"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full" />
    </Component>
  );

  return (
    <Fragment>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-black/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link to='/' className="flex items-center">
            <span className="text-2xl font-black tracking-[0.15em] text-[#1a1a1a] leading-none">
              VELOR
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <NavItem to='/shop'>SHOP</NavItem>
            <NavItem to='/shop/mens'>MEN</NavItem>
            <NavItem to='/shop/womens'>WOMEN</NavItem>
            <NavItem to='/shop/hats'>ACCESSORIES</NavItem>

            {currentUser ? (
              <span 
                onClick={signOutUser} 
                className="text-xs font-bold tracking-[0.1em] uppercase px-5 py-2.5 border-2 border-black rounded-full cursor-pointer transition-colors hover:bg-black hover:text-white"
              >
                SIGN OUT
              </span>
            ) : (
              <Link 
                to='/auth' 
                className="text-xs font-bold tracking-[0.1em] uppercase px-5 py-2.5 border-2 border-black rounded-full transition-colors hover:bg-black hover:text-white"
              >
                SIGN IN
              </Link>
            )}

            <CartIcon />
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-4">
            <CartIcon />
            <button 
              onClick={toggleMobileMenu} 
              className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-[1001]"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-[2px] bg-black transition-all duration-300 origin-center ${isMobileMenuOpen ? 'translate-y-[8px] rotate-45' : ''}`} />
              <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-[2px] bg-black transition-all duration-300 origin-center ${isMobileMenuOpen ? '-translate-y-[8px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white/98 backdrop-blur-xl z-[999] flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {['/shop', '/shop/mens', '/shop/womens', '/shop/hats'].map((path, idx) => (
                <Link 
                  key={path}
                  to={path} 
                  onClick={toggleMobileMenu}
                  className="text-2xl font-bold tracking-[0.1em] uppercase text-black hover:text-[#8B9A84] transition-colors"
                >
                  {path.split('/').pop() === 'shop' ? 'SHOP ALL' : path.split('/').pop()}
                </Link>
              ))}
              
              {currentUser ? (
                <span 
                  onClick={() => { signOutUser(); toggleMobileMenu(); }}
                  className="text-2xl font-bold tracking-[0.1em] uppercase text-black hover:text-[#8B9A84] transition-colors cursor-pointer mt-4"
                >
                  SIGN OUT
                </span>
              ) : (
                <Link 
                  to='/auth' 
                  onClick={toggleMobileMenu}
                  className="text-2xl font-bold tracking-[0.1em] uppercase text-black hover:text-[#8B9A84] transition-colors mt-4"
                >
                  SIGN IN
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isCartOpen && <CartDropdown />}
      <main className="pt-20">
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Navigation;
