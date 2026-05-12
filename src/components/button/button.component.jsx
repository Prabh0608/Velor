import { motion } from 'framer-motion';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButtonClasses = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  const baseClasses = "min-w-[165px] w-auto h-[50px] tracking-[0.1em] px-[35px] text-[0.8rem] font-bold uppercase cursor-pointer flex justify-center items-center rounded-full transition-colors font-inherit";
  
  if (buttonType === BUTTON_TYPE_CLASSES.google) {
    return `${baseClasses} bg-[#4285f4] text-white hover:bg-[#357ae8]`;
  }
  
  if (buttonType === BUTTON_TYPE_CLASSES.inverted) {
    return `${baseClasses} bg-white text-black border-[1.5px] border-black hover:bg-black hover:text-white`;
  }
  
  return `${baseClasses} bg-black text-white hover:bg-gray-800`;
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const buttonClass = getButtonClasses(buttonType);
  
  return (
    <motion.button 
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={buttonClass} 
      {...otherProps}
    >
      {children}
    </motion.button>
  );
};

export default Button;
