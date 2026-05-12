import { Link } from 'react-router-dom';
import {
  FooterContainer,
  FooterContent,
  FooterBrand,
  FooterLinks,
  FooterBottom
} from './footer.styles.jsx';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterBrand>
          <h3>VELOR</h3>
          <p>Premium essentials for the modern wardrobe. Designed with intention, crafted with care.</p>
          <div className="social-links">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="Facebook">FB</a>
          </div>
        </FooterBrand>

        <FooterLinks>
          <div>
            <h4>SHOP</h4>
            <Link to="/shop/mens">Men</Link>
            <Link to="/shop/womens">Women</Link>
            <Link to="/shop/hats">Accessories</Link>
            <Link to="/shop">New Arrivals</Link>
          </div>
          <div>
            <h4>COMPANY</h4>
            <Link to="/">About Us</Link>
            <Link to="/">Sustainability</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Press</Link>
          </div>
          <div>
            <h4>SUPPORT</h4>
            <Link to="/">Contact</Link>
            <Link to="/">Shipping</Link>
            <Link to="/">Returns</Link>
            <Link to="/">FAQ</Link>
          </div>
        </FooterLinks>
      </FooterContent>

      <FooterBottom>
        <p>© 2026 VELOR. All rights reserved.</p>
        <div className="legal">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
