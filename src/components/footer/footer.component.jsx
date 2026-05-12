import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-24 pb-8 px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-12 lg:gap-24 pb-16 border-b border-white/10">
        <div className="max-w-[360px]">
          <h3 className="text-2xl font-black tracking-[0.15em] mb-6">VELOR</h3>
          <p className="text-[0.95rem] text-gray-400 leading-relaxed mb-8">
            Premium essentials for the modern wardrobe. Designed with intention, crafted with care.
          </p>
          <div className="flex gap-4">
            {['IG', 'TW', 'FB'].map(social => (
              <a 
                key={social}
                href="#" 
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-xs font-bold tracking-[0.05em] text-gray-400 hover:border-white hover:text-white hover:bg-white/10 transition-all"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-2">SHOP</h4>
            <Link to="/shop/mens" className="text-[0.9rem] text-gray-400 hover:text-white transition-colors">Men</Link>
            <Link to="/shop/womens" className="text-[0.9rem] text-gray-400 hover:text-white transition-colors">Women</Link>
            <Link to="/shop/hats" className="text-[0.9rem] text-gray-400 hover:text-white transition-colors">Accessories</Link>
            <Link to="/shop" className="text-[0.9rem] text-gray-400 hover:text-white transition-colors">New Arrivals</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-2">COMPANY</h4>
            <Link to="/" className="text-[0.9rem] text-gray-400 hover:text-white transition-colors">About Us</Link>
            <Link to="/" className="text-[0.9rem] text-gray-400 hover:text-white transition-colors">Sustainability</Link>
            <Link to="/" className="text-[0.9rem] text-gray-400 hover:text-white transition-colors">Careers</Link>
            <Link to="/" className="text-[0.9rem] text-gray-400 hover:text-white transition-colors">Press</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-2">SUPPORT</h4>
            <Link to="/" className="text-[0.9rem] text-gray-400 hover:text-white transition-colors">Contact</Link>
            <Link to="/" className="text-[0.9rem] text-gray-400 hover:text-white transition-colors">Shipping</Link>
            <Link to="/" className="text-[0.9rem] text-gray-400 hover:text-white transition-colors">Returns</Link>
            <Link to="/" className="text-[0.9rem] text-gray-400 hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[0.85rem] text-gray-500">© 2026 VELOR. All rights reserved.</p>
        <div className="flex gap-8">
          <Link to="/" className="text-[0.85rem] text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/" className="text-[0.85rem] text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
