"use client";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
type Grid = {
  rows: number;
  cols: number;
};
const DEFAULT_GRIDS: Record<string, Grid> = {
  "6x4": { rows: 4, cols: 6 },
  "8x8": { rows: 8, cols: 8 },
  "8x3": { rows: 3, cols: 8 },
  "4x6": { rows: 6, cols: 4 },
  "3x8": { rows: 8, cols: 3 },
};
type PredefinedGridKey = keyof typeof DEFAULT_GRIDS;
interface PixelImageProps {
  src: string;
  grid?: PredefinedGridKey;
  customGrid?: Grid;
  grayscaleAnimation?: boolean;
  pixelFadeInDuration?: number; // in ms
  maxAnimationDelay?: number; // in ms
  colorRevealDelay?: number; // in ms
  showReplayButton?: boolean;
}
export const PixelImage = ({
  src,
  grid = "6x4",
  grayscaleAnimation = true,
  pixelFadeInDuration = 1000,
  maxAnimationDelay = 1200,
  colorRevealDelay = 1300,
  customGrid,
  showReplayButton = false,
}: PixelImageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [key, setKey] = useState(0);
  const MIN_GRID = 1;
  const MAX_GRID = 16;
  const { rows, cols } = useMemo(() => {
    const isValidGrid = (grid?: Grid) => {
      if (!grid) return false;
      const { rows, cols } = grid;
      return (
        Number.isInteger(rows) &&
        Number.isInteger(cols) &&
        rows >= MIN_GRID &&
        cols >= MIN_GRID &&
        rows <= MAX_GRID &&
        cols <= MAX_GRID
      );
    };
    return isValidGrid(customGrid) ? customGrid! : DEFAULT_GRIDS[grid];
  }, [customGrid, grid]);
  const resetAnimation = () => {
    setIsVisible(false);
    setShowColor(false);
    setKey(prev => prev + 1);
  };
  useEffect(() => {
    // Small delay to ensure proper animation on initial mount/refresh
    const startTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => {
      clearTimeout(startTimeout);
    };
  }, [key]);

  const handleMouseEnter = () => {
    setShowColor(true);
  };
  const pieces = useMemo(() => {
    const total = rows * cols;
    return Array.from({ length: total }, (_, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;
      const clipPath = `polygon(
        ${col * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${(row + 1) * (100 / rows)}%,
        ${col * (100 / cols)}% ${(row + 1) * (100 / rows)}%
      )`;
      // Use deterministic "random" based on index to avoid hydration issues
      const delay = ((index * 23) % total) * (maxAnimationDelay / total);
      return {
        clipPath,
        delay,
      };
    });
  }, [rows, cols, maxAnimationDelay]);
  return (
    <div className="relative cursor-pointer" onMouseEnter={handleMouseEnter}>
      <div className="relative h-80 w-80 select-none md:h-[32rem] md:w-[32rem]" key={key}>
        {pieces.map((piece, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all ease-out",
              isVisible ? "opacity-100" : "opacity-0",
            )}
            style={{
              clipPath: piece.clipPath,
              transitionDelay: `${piece.delay}ms`,
              transitionDuration: `${pixelFadeInDuration}ms`,
            }}
          >
            <img
              src={src}
              alt={`Pixel image piece ${index + 1}`}
              className={cn(
                "size-full object-cover",
                grayscaleAnimation && (showColor ? "grayscale-0" : "grayscale"),
              )}
              style={{
                transition: grayscaleAnimation
                  ? `filter ${pixelFadeInDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
                  : "none",
              }}
              draggable={false}
            />
          </div>
        ))}
      </div>
      {showReplayButton && (
        <button
          onClick={resetAnimation}
          className="absolute top-2 right-2 z-10 rounded-lg bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm transition-opacity hover:bg-black/70"
        >
          Replay
        </button>
      )}
    </div>
  );
};

interface VerkoopBlockProps {
  images?: string[];
}

export const VerkoopBlock = ({ images }: VerkoopBlockProps) => {
  const steps = [
    { text: "Kies je tafelblad", image: "/tafelblad.jpeg" },
    { text: "Kies je kleur", image: "/Kleur.webp" },
    { text: "Kies je onderstel", image: "/onderstel.webp" },
    { text: "Upload foto van je woon-/eetkamer (optioneel)", image: "/tafels.png" }
  ];

  return (
    <div className="w-full">
      {/* Top row - 3 steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
        {steps.slice(0, 3).map((step, index) => (
          <div key={`top-${index}`} className="flex justify-center items-center relative">
            <PixelImage
              src={step.image}
              grid="8x8"
              grayscaleAnimation={true}
              showReplayButton={false}
            />
            <div className="absolute inset-0 flex items-start justify-center pt-8 pointer-events-none">
              <div className="bg-black/50 backdrop-blur-lg rounded-xl px-6 py-3 border-2 border-white/50 shadow-xl">
                <p className="text-2xl md:text-3xl font-semibold text-center text-white tracking-wide">
                  {step.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom row - 1 step on the left */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="flex justify-center items-center relative">
          <PixelImage
            src={steps[3].image}
            grid="8x8"
            grayscaleAnimation={true}
            showReplayButton={false}
          />
          <div className="absolute inset-0 flex items-start justify-center pt-8 pointer-events-none">
            <div className="bg-black/50 backdrop-blur-lg rounded-xl px-6 py-3 border-2 border-white/50 shadow-xl">
              <p className="text-2xl md:text-3xl font-semibold text-center text-white tracking-wide">
                {steps[3].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
