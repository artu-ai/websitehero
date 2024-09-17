"use client";

import { useEffect, useState } from "react";

interface TypingAnimationProps {
  segments: { text: string; className: string }[];
  duration?: number; // Speed of typing
  onFinish: () => void;
}

export default function TypingAnimation({
  segments,
  duration = 100,
  onFinish,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string[]>([]);

  useEffect(() => {
    let totalLength = segments.reduce((acc, segment) => acc + segment.text.length, 0);
    let currentSegment = 0;
    let charIndex = 0;

    const interval = setInterval(() => {
      if (currentSegment < segments.length) {
        if (charIndex < segments[currentSegment].text.length) {
          setDisplayedText((prev) => {
            const updatedText = [...prev];
            updatedText[currentSegment] =
              segments[currentSegment].text.substring(0, charIndex + 1);
            return updatedText;
          });
          charIndex++;
        } else {
          currentSegment++;
          charIndex = 0;
        }
      } else {
        clearInterval(interval);
        onFinish(); // Notify that typing has finished
      }
    }, duration);

    return () => clearInterval(interval); // Cleanup interval
  }, [segments, duration, onFinish]);

  return (
    <h1>
      {segments.map((segment, index) => (
        <span key={index} className={segment.className}>
          {displayedText[index]}
        </span>
      ))}
    </h1>
  );
}
