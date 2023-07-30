import Image, { StaticImageData } from "next/image";
import React from "react";

interface SkillsCardProps {
  label: string;
  src: StaticImageData;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ label, src }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-3">
      <div>
        <Image src={src} alt={label} height={100} width={100} />
      </div>
      <div>
        <h1>{label}</h1>
      </div>
    </div>
  );
};

export default SkillsCard;
