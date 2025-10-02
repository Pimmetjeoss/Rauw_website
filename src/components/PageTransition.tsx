'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '-100%' }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="relative"
      >
        {/* Wit blok dat van onder naar boven komt */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.4
          }}
          className="fixed inset-0 bg-white z-[200]"
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
