import React, { useState, useEffect } from "react";

interface TypewriterProps {
  textArray: string[]; // Array of words to display
  speed?: number; // Typing speed for each character
  delay?: number; // Delay between each word change
}

const Typewriter: React.FC<TypewriterProps> = ({
  textArray,
  speed = 150,
  delay = 1500,
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [charIndex, setCharIndex] = useState<number>(0);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentWord = textArray[wordIndex % textArray.length];
    let typingSpeed = isDeleting ? speed / 2 : speed;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setDisplayedText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      // When word is fully typed, wait for delay and start deleting
      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), delay);
      }

      // When word is fully deleted, move to next word and start typing
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % textArray.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textArray, wordIndex, speed, delay]);

  return (
    <span className="text-2xl font-bold leading-10 text-green-800">
      {displayedText}
    </span>
  );
};

export default Typewriter;
