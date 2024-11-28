import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

export function LoadingAnimation() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-green-800 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1.2, 1],
          opacity: 1,
        }}
        transition={{ 
          duration: 1.5,
          times: [0, 0.5, 1],
          ease: "easeOut"
        }}
        className="text-white text-center"
      >
        <motion.div
          animate={{ 
            rotate: [0, 360],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-6"
        >
          <Leaf className="w-16 h-16" />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Dago
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-green-100"
        >
          Fresh. Healthy. Fast.
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-green-900"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
