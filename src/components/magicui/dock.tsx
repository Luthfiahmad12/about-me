"use client";

import { cn } from "@/lib/utils";
import { motion, type MotionValue, useMotionValue, useSpring, useTransform } from "motion/react";
import { createContext, useContext, useRef, type ReactNode } from "react";

interface DockProps {
  className?: string;
  children: ReactNode;
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  direction?: "middle" | "left" | "right";
}

interface DockIconProps {
  className?: string;
  children?: ReactNode;
}

const DEFAULT_ICON_SIZE = 48;
const DEFAULT_ICON_MAGNIFICATION = 80;
const DEFAULT_ICON_DISTANCE = 140;
const ICON_SIZE_RATIO = 0.55;
const SPRING = { mass: 0.1, stiffness: 150, damping: 12 };

interface DockContextValue {
  mouseX: MotionValue<number>;
  iconSize: number;
  iconMagnification: number;
  iconDistance: number;
}

const DockContext = createContext<DockContextValue | null>(null);

const Dock = ({ 
  className, 
  children, 
  iconSize = DEFAULT_ICON_SIZE,
  iconMagnification = DEFAULT_ICON_MAGNIFICATION,
  iconDistance = DEFAULT_ICON_DISTANCE,
  direction = "middle"
}: DockProps) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <DockContext.Provider value={{ mouseX, iconSize, iconMagnification, iconDistance }}>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "mx-auto w-max h-full flex items-end justify-center overflow-visible rounded-full border",
          direction === "left" && "justify-start",
          direction === "right" && "justify-end",
          className
        )}
      >
        {children}
      </motion.div>
    </DockContext.Provider>
  );
};

const DockIcon = ({ className, children }: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const context = useContext(DockContext);

  if (!context) {
    throw new Error("DockIcon must be used within a Dock component");
  }

  const { mouseX, iconSize, iconMagnification, iconDistance } = context;

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const containerSize = useSpring(
    useTransform(distanceCalc, [-iconDistance, 0, iconDistance], [iconSize, iconMagnification, iconSize]),
    SPRING
  );
  const innerIconSize = useSpring(
    useTransform(distanceCalc, [-iconDistance, 0, iconDistance], [iconSize * ICON_SIZE_RATIO, iconMagnification * ICON_SIZE_RATIO, iconSize * ICON_SIZE_RATIO]),
    SPRING
  );

  return (
    <motion.div
      ref={ref}
      style={{ width: containerSize, height: containerSize }}
      className={cn("relative flex aspect-square items-center justify-center rounded-full shrink-0", className)}
    >
      <motion.div
        style={{ width: innerIconSize, height: innerIconSize }}
        className="flex items-center justify-center"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export { Dock, DockIcon };
export type { DockProps, DockIconProps };
