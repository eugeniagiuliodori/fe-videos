'use client';
import type { Tokens } from "@/types/tokens";
import {translateCSSVblesToPublicVbles, translateCSSVariablesToIdentity, buildCSSBlock} from "@/app/styles/translateCSSVariablesToIdentity";

export const ThemeVariables =({ tokens }: { tokens: Tokens }) => {
  const vars = translateCSSVblesToPublicVbles(translateCSSVariablesToIdentity(tokens));
  const css = buildCSSBlock(vars);
  if (!css) return null; // evita render server
  return <style id="mlui-theme-vars">{css}</style>;
}
