import React from "react";

interface TextProps {
  heading: string;
  content: string;
  textCenter?: boolean;
  reSize?: true;
}

export const Text: React.FC<TextProps> = ({
  heading,
  content,
  textCenter,
  reSize,
}) => {
  return (
    <div
      className={`${
        textCenter ? "center-content" : reSize ? "lg-size" : "md-size"
      }`}
    >
      <h2>{heading}</h2>
      <p>{content}</p>
    </div>
  );
};
