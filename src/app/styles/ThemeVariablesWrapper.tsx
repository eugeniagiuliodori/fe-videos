// src/app/styles/ThemeVariablesWrapper.tsx
'use client';

import { useEffect, useState } from 'react';
import { ThemeVariables } from './ThemeVariables';
import type { Tokens } from '@/types/tokens';

export const ThemeVariablesWrapper = ({ tokens }: { tokens: Tokens }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true); // solo después de montar
  }, []);

  if (!mounted) return null; // no renderiza nada en SSR

  return <ThemeVariables tokens={tokens} />;
};