import React, { useState, useEffect } from 'react';

interface TextAnimationProps {
  text: string;
  delay?: number;
  randomCycleDuration?: number;
}

const HackerText: React.FC<TextAnimationProps> = ({
  text,
  delay = 100,
  randomCycleDuration = 1000,
}) => {
  const [displayText, setDisplayText] = useState<string[]>(Array(text.length).fill(''));

  useEffect(() => {
    const revealText = async () => {
      for (let i = 0; i < text.length; i++) {
        // Cycle through random characters before revealing the actual character
        await cycleRandomCharacters(i, text[i]);
        // Reveal the actual character
        setDisplayText((prev) => {
          const newText = [...prev];
          newText[i] = text[i];
          return newText;
        });
      }
    };

    const cycleRandomCharacters = async (index: number, finalChar: string) => {
      const startTime = Date.now();
      while (Date.now() - startTime < randomCycleDuration) {
        const randomChar = getRandomChar();
        setDisplayText((prev) => {
          const newText = [...prev];
          newText[index] = randomChar;
          return newText;
        });
        await sleep(delay);
      }
      // Set the final character after the random cycle
      setDisplayText((prev) => {
        const newText = [...prev];
        newText[index] = finalChar;
        return newText;
      });
    };

    revealText();
  }, [text, delay, randomCycleDuration]);

  const getRandomChar = () => {
    const characters = ' abcdefghijklmnopqrstuvwxyz0123456789';
    return characters[Math.floor(Math.random() * characters.length)];
  };

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <div className="text-animation">
      {displayText.map((char, index) => (
        <span key={index} className="text-animation-char">
          {char}
        </span>
      ))}
    </div>
  );
};

export default HackerText;