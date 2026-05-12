import { motion } from 'framer-motion';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const Authentication = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 pb-24 flex flex-col lg:flex-row gap-12 lg:gap-24 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 flex flex-col gap-12"
      >
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
            VELOR ACCOUNT
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight text-gray-900 leading-none">
            Welcome Back
          </h2>
          <p className="text-lg text-gray-600 max-w-md">
            Sign in to access your orders, saved items, and personalized recommendations.
          </p>
        </div>
        <div className="w-full h-[300px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl relative">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop" 
            alt="VELOR Store" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="flex-1 flex flex-col lg:flex-row gap-12 lg:gap-8 justify-center items-center"
      >
        <div className="w-full max-w-[420px] bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <SignInForm />
        </div>

        <div className="flex flex-row lg:flex-col items-center justify-center gap-4">
          <div className="w-[100px] lg:w-[1px] h-[1px] lg:h-[100px] bg-gray-200" />
          <span className="text-xs font-bold tracking-[0.2em] text-gray-400">OR</span>
          <div className="w-[100px] lg:w-[1px] h-[1px] lg:h-[100px] bg-gray-200" />
        </div>

        <div className="w-full max-w-[420px] bg-gray-50 p-8 rounded-3xl border border-gray-100">
          <SignUpForm />
        </div>
      </motion.div>
    </div>
  );
};

export default Authentication;
