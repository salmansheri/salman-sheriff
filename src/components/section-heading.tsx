import React from "react";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <h2 className="font-medium capitalize text-3xl mb-8 text-center">
      {title}
    </h2>
  );
};

export default SectionHeading;
