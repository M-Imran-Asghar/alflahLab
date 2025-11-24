// src/app/(dashboard)/layout.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Navbar from '@/app/components/layout/navbar';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <TooltipProvider>
        <Navbar />
        <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="min-h-[calc(100vh-8rem)]"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
        <Toaster position="top-center" richColors />
      </TooltipProvider>
    </div>
  );
}