import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `export const AboutSection = () => {
  return (
    <div className="about">
      <p>
        I am a Full Stack Developer with a passion for building web 
        applications. I am proficient in HTML, CSS, JavaScript, React, 
        Node.js, Express, MongoDB, and other technologies. I am also 
        familiar with Python, Java, and C++.
      </p>
    </div>
  );
};`;

function VScodeScrShot() {
  return (
    <div className="card">
      {/* VS Code Buttons */}
      <div className="tools">
        <div className="circle"><span className="red box"></span></div>
        <div className="circle"><span className="yellow box"></span></div>
        <div className="circle"><span className="green box"></span></div>
      </div>

      {/* Code Block */}
      <div className="card__content">
        <SyntaxHighlighter
          language="javascript"
          style={oneDark}
          showLineNumbers
          wrapLines={true}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default VScodeScrShot;
