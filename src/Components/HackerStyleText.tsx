import React, { useState, useEffect } from 'react';

type TextAnimationProps = {
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
        await cycleRandomCharacters(i, text[i]);
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
      setDisplayText((prev) => {
        const newText = [...prev];
        newText[index] = finalChar;
        return newText;
      });
    };

    revealText();
  }, [text, delay, randomCycleDuration]);

  const getRandomChar = () => {
    const characters = 'ぃの名たはジョンです';
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