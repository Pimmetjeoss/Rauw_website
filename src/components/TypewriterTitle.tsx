"use client";

import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";

interface TypewriterSequence {
    text: string;
    deleteAfter?: boolean;
    pauseAfter?: number;
}

interface TypewriterTitleProps {
    sequences?: TypewriterSequence[];
    typingSpeed?: number;
    startDelay?: number;
    autoLoop?: boolean;
    loopDelay?: number;
    color?: string;
}

export default function TypewriterTitle({
    sequences = [
        { text: "Typewriter", deleteAfter: true },
        { text: "Multiple Words", deleteAfter: true },
        { text: "Auto Loop", deleteAfter: false },
    ],
    typingSpeed = 50,
    startDelay = 500,
    autoLoop = true,
    loopDelay = 2000,
    color = "white",
}: TypewriterTitleProps) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        let isActive = true;

        const typeText = async () => {
            const titleElement =
                scope.current.querySelector("[data-typewriter]");
            if (!titleElement) return;

            while (isActive) {
                // Reset the text content
                await animate(scope.current, { opacity: 1 });
                titleElement.textContent = "";

                // Wait for initial delay on first run
                await new Promise((resolve) => setTimeout(resolve, startDelay));

                // Process each sequence
                for (const sequence of sequences) {
                    if (!isActive) break;

                    // Type out the sequence text
                    for (let i = 0; i < sequence.text.length; i++) {
                        if (!isActive) break;
                        titleElement.textContent = sequence.text.slice(
                            0,
                            i + 1
                        );
                        await new Promise((resolve) =>
                            setTimeout(resolve, typingSpeed)
                        );
                    }

                    // Pause after typing if specified
                    if (sequence.pauseAfter) {
                        await new Promise((resolve) =>
                            setTimeout(resolve, sequence.pauseAfter)
                        );
                    }

                    // Delete the text if specified
                    if (sequence.deleteAfter) {
                        // Small pause before deleting
                        await new Promise((resolve) =>
                            setTimeout(resolve, 500)
                        );

                        for (let i = sequence.text.length; i > 0; i--) {
                            if (!isActive) break;
                            titleElement.textContent = sequence.text.slice(
                                0,
                                i
                            );
                            await new Promise((resolve) =>
                                setTimeout(resolve, typingSpeed / 2)
                            );
                        }
                    }
                }

                if (!autoLoop || !isActive) break;

                // Wait before starting next loop
                await new Promise((resolve) => setTimeout(resolve, loopDelay));
            }
        };

        typeText();

        // Cleanup function to stop the animation when component unmounts
        return () => {
            isActive = false;
        };
    }, [
        sequences,
        typingSpeed,
        startDelay,
        autoLoop,
        loopDelay,
        animate,
        scope,
    ]);

    return (
        <div className="relative w-full flex justify-center items-start px-4">
            <div
                className="relative text-center z-10 w-full"
                ref={scope}
            >
                <motion.div
                    className="flex items-center justify-center"
                    style={{
                        fontFamily: 'SupremeLL-Bold, sans-serif',
                        fontSize: 'clamp(6.5rem, 23vw, 33rem)',
                        fontWeight: 400,
                        lineHeight: 1,
                        letterSpacing: '-0.02em',
                        color: color
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <span
                        data-typewriter
                        className="inline-block border-r-4 animate-cursor pr-2"
                        style={{ borderColor: color }}
                    >
                        {sequences[0].text}
                    </span>
                </motion.div>
            </div>
        </div>
    );
}
