import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 second preloader
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0A0A0A]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative">
        <motion.div
          className="text-6xl font-bold text-transparent bg-clip-text font-heading bg-gradient-to-r from-red-500 to-red-700"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            WebkitTextStroke: "1px #E10600",
            filter: "drop-shadow(0 0 10px rgba(225, 6, 0, 0.8))"
          }}
        >
          PR
        </motion.div>
        <motion.div
          className="absolute inset-0 border-t-2 border-r-2 border-[var(--color-primary-red)] rounded-full -m-4"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 border-b-2 border-l-2 border-[var(--color-primary-red-hover)] rounded-full -m-2 opacity-50"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
