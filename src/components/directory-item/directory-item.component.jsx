import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const DirectoryItem = ({ category, onClick }) => {
  const { imageUrl, title, subtitle } = category;

  return (
    <motion.div 
      variants={itemVariants}
      onClick={onClick}
      whileHover={{ y: -6 }}
      className="relative min-h-[300px] sm:min-h-[380px] rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-2xl transition-shadow duration-500"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col gap-1.5">
        <h2 className="text-2xl font-black text-white tracking-tight uppercase">
          {title}
        </h2>
        <p className="text-sm font-medium text-white/70">
          {subtitle}
        </p>
        <div className="mt-2 text-xs font-bold tracking-[0.1em] text-white opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center gap-2">
          SHOP NOW <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </motion.div>
  );
};

export default DirectoryItem;
