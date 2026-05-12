import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Directory from '../../components/directory/directory.component';
import { CategoriesContext } from '../../context/categories.context';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Home = () => {
  const navigate = useNavigate();
  const { categoriesMap } = useContext(CategoriesContext);
  const newDropsCategories = Object.keys(categoriesMap || {}).slice(0, 3);

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col lg:flex-row items-center bg-gradient-to-br from-[#c5d1be] to-[#a8b5a0] px-6 lg:px-16 pt-24 pb-12 lg:py-0 overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute -top-[20%] -right-[10%] w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div 
          className="w-full lg:w-1/2 max-w-2xl z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="block text-xs font-bold tracking-[0.2em] uppercase text-gray-600 mb-6">
            SPRING / SUMMER 2026
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.95] tracking-tight text-[#1a1a1a] mb-8">
            REFLECT<br />FASHION
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-gray-700 mb-12 leading-relaxed max-w-md">
            Discover curated collections that blend timeless elegance with contemporary edge. 
            Crafted for those who lead with style.
          </motion.p>
          <motion.button 
            variants={fadeInUp}
            whileHover={{ scale: 1.02, backgroundColor: '#262626' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/shop')}
            className="inline-flex items-center px-8 py-4 bg-[#1a1a1a] text-white text-sm font-bold tracking-[0.15em] uppercase rounded-full shadow-lg transition-colors mb-16 lg:mb-24"
          >
            EXPLORE COLLECTION
          </motion.button>

          <motion.div variants={staggerContainer} className="flex flex-wrap gap-8 lg:gap-12">
            {[
              { num: '01', label: 'Premium Materials' },
              { num: '02', label: 'Sustainable' },
              { num: '03', label: 'Worldwide' },
              { num: '04', label: 'Artisan Crafted' }
            ].map((stat) => (
              <motion.div key={stat.num} variants={fadeInUp} className="flex flex-col gap-1">
                <span className="text-xs font-black text-[#6B7B64] tracking-widest">{stat.num}</span>
                <span className="text-xs font-medium text-gray-600 tracking-widest">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 relative h-[50vh] lg:h-[80vh] max-h-[700px] mt-12 lg:mt-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop" 
            alt="VELOR Fashion" 
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-6 right-6 bg-white p-3 lg:p-4 rounded-xl shadow-xl flex flex-col gap-1"
          >
            <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">NEW ARRIVAL</span>
            <span className="text-sm lg:text-base text-black font-black">From $89</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="bg-[#1a1a1a] text-white py-4 overflow-hidden border-y border-gray-800">
        <div className="flex gap-12 whitespace-nowrap animate-[marquee_20s_linear_infinite] w-max">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-sm font-bold tracking-[0.2em] uppercase">
              {i % 2 === 0 ? 'VELOR • PREMIUM ESSENTIALS' : 'TIMELESS DESIGN •'}
            </span>
          ))}
        </div>
      </div>

      {/* New Drops Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-gray-900 leading-tight">NEW DROPS</h2>
            <p className="text-gray-500 mt-2">Fresh arrivals for the season</p>
          </motion.div>
          <motion.button 
            variants={fadeInUp}
            whileHover={{ x: 5 }}
            onClick={() => navigate('/shop')}
            className="text-sm font-bold tracking-widest text-gray-600 hover:text-black transition-colors uppercase flex items-center gap-2"
          >
            VIEW ALL <span>→</span>
          </motion.button>
        </div>
        <Directory />
      </motion.section>

      {/* Featured Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-gray-900 leading-tight">FEATURED DROPS</h2>
            <p className="text-gray-500 mt-2">Stand out, stay ahead</p>
          </motion.div>
          <motion.button 
            variants={fadeInUp}
            whileHover={{ x: 5 }}
            onClick={() => navigate('/shop')}
            className="text-sm font-bold tracking-widest text-gray-600 hover:text-black transition-colors uppercase flex items-center gap-2"
          >
            VIEW ALL <span>→</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newDropsCategories.map((title, idx) => (
            <motion.div 
              key={title}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="cursor-pointer rounded-2xl overflow-hidden relative aspect-[3/4] group shadow-sm hover:shadow-2xl transition-shadow duration-500"
              onClick={() => navigate(`/shop/${title}`)}
            >
              <img 
                src={categoriesMap[title]?.items?.[0]?.imageUrl || `https://images.unsplash.com/photo-${1500 + idx}?w=600&auto=format&fit=crop`} 
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="text-2xl font-black text-white tracking-tight">{title.toUpperCase()}</span>
                <span className="text-xs font-bold tracking-[0.1em] text-white/80 mt-2 group-hover:text-white transition-colors flex items-center gap-2">
                  SHOP NOW <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Promo Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-[#1a1a1a] text-white min-h-[600px]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="p-12 lg:p-24 flex flex-col justify-center max-w-2xl mx-auto lg:mx-0"
        >
          <motion.span variants={fadeInUp} className="text-xs font-bold tracking-[0.2em] uppercase text-[#C5D1BE] mb-8 block">
            ABOUT VELOR
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight mb-8 tracking-tight">
            Clothing label offering premium quality, trend-conscious pieces for men and women who lead with style.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-base text-gray-400 leading-relaxed mb-12">
            Each piece in our collection is thoughtfully designed and meticulously crafted 
            using sustainable materials. We believe fashion should feel as good as it looks.
          </motion.p>
          <motion.button 
            variants={fadeInUp}
            whileHover={{ scale: 1.05, backgroundColor: '#C5D1BE', color: '#1a1a1a' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/shop')}
            className="self-start px-8 py-4 bg-white text-[#1a1a1a] text-sm font-bold tracking-[0.15em] uppercase rounded-full transition-colors"
          >
            SHOP NOW
          </motion.button>
        </motion.div>
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
          <motion.img 
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop" 
            alt="VELOR Collection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1a1a1a] to-transparent w-full h-full pointer-events-none opacity-50" />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 py-24 px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-xl mx-auto text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-black text-white mb-4 tracking-tight">
            Join the VELOR Circle
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 mb-10 text-lg">
            Sign up for exclusive offers, style tips, and early access to new drops.
          </motion.p>
          <motion.form variants={fadeInUp} className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-500 outline-none focus:border-[#C5D1BE] focus:bg-white/15 transition-all"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit" 
              className="px-8 py-4 bg-white text-black text-sm font-bold tracking-widest uppercase rounded-full hover:bg-[#C5D1BE] transition-colors whitespace-nowrap"
            >
              SUBSCRIBE
            </motion.button>
          </motion.form>
        </motion.div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

export default Home;
