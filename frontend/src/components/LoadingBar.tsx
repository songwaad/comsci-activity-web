"use client";

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function LoadingBar() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleStop = () => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    handleStart();
    handleStop();
  }, [pathname, searchParams]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white">
      <div
        className="h-full bg-gradient-to-r from-[#0b0058] via-[#030041] to-[#0b0058] animate-loading-bar shadow-lg"
        style={{ width: '100%' }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
      </div>
    </div>
  );
} 