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
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-bg-primary"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative">
        <motion.div
          className="text-7xl font-black font-heading flex items-center justify-center tracking-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span 
            className="text-transparent bg-clip-text"
            style={{ 
              backgroundImage: "linear-gradient(to bottom, #bfe0ff, #5fa8e8, #2c5f96)",
              filter: "drop-shadow(0 0 12px rgba(95, 168, 232, 0.5))"
            }}
          >
            P
          </span>
          <span 
            className="text-transparent bg-clip-text"
            style={{ 
              backgroundImage: "linear-gradient(to bottom, #f4f6f9, #c6ccd6, #8b929e)",
              filter: "drop-shadow(0 0 12px rgba(198, 204, 214, 0.5))"
            }}
          >
            R
          </span>
        </motion.div>
        <motion.div
          className="absolute inset-0 border-t-2 border-r-2 rounded-full -m-6"
          style={{ 
            borderColor: "#5fa8e8",
            filter: "drop-shadow(0 0 8px rgba(95, 168, 232, 0.6))"
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 border-b-2 border-l-2 rounded-full -m-3 opacity-80"
          style={{ 
            borderColor: "#c6ccd6",
            filter: "drop-shadow(0 0 8px rgba(198, 204, 214, 0.6))"
          }}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
