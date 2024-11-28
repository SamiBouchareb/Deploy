import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
}

export function ScrollReveal({ children, width = "fit-content" }: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} style={{ width, overflow: 'hidden', willChange: 'transform' }}>
      <motion.div
        variants={{
          hidden: { transform: 'translateY(75px)' },
          visible: { transform: 'translateY(0px)' }
        }}
        initial="hidden"
        animate={controls}
        transition={{ 
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
          type: "tween"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
