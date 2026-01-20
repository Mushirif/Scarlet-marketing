"use client";

import { ReactLenis as LenisPrimitive } from "lenis/react";

export function ReactLenis({ root, options, children, ...props }: any) {
  const defaultOptions = {
    lerp: 0.05, // Lower for more smoothness/weight
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 1,
    ...options,
  };

  return (
    <LenisPrimitive root={root} options={defaultOptions} {...props}>
      {children}
    </LenisPrimitive>
  );
}

