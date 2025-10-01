"use client";

/**
 * @author: @dorian_baffier
 * @description: Scroll Text
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { useRef, useEffect } from "react";
import { motion, Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollTextProps {
    texts?: string[];
    className?: string;
}

export default function ScrollText({
    texts = [
        "TailwindCSS",
        "Kokonut UI",
        "shadcn/ui",
        "Next.js",
        "Vercel",
        "Motion",
        "React",
        "Resend",
        "TypeScript",
        "Fumadocs",
        "Supabase",
        "Vercel"
    ],
    className,
}: ScrollTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll to top on mount
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
    }, []);

    // Animation variants for the reveal effect
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: (index: number) => ({
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            rotate: index % 2 === 0 ? -10 : 10,
        }),
        visible: {
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.5,
            },
        },
    };

    return (
        <div className={cn("w-full", className)}>
            <div
                ref={containerRef}
                className={cn(
                    "h-auto overflow-visible",
                    "relative flex flex-col items-start"
                )}
            >
                <div className="h-0" />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-start w-full"
                >
                    {texts.map((text, index) => (
                        <motion.div
                            key={text}
                            custom={index}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: false,
                                margin: "-20% 0px -20% 0px"
                            }}
                            className={cn(
                                "text-7xl font-bold py-1 px-0 whitespace-nowrap text-white"
                            )}
                        >
                            {text}
                        </motion.div>
                    ))}
                </motion.div>
                <div className="h-[90px]" />
            </div>
        </div>
    );
}
