import React from "react";
import Image from "next/image";

interface StatCardProps {
  title: string;
  number: string | number;
  growth: string;
  color: string;
  icon: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  number,
  growth,
  color,
  icon,
}) => {
  return (
    <div className="w-[250px] h-[130px] shadow-md rounded-md pl-[21px] flex items-start justify-center flex-col relative bg-white">
      <h3 className="uppercase text-[10px]">{title}</h3>
      <h3 className="my-2 font-bold text-[20px]">{number}</h3>
      <h3 className="uppercase text-[12px]">{growth}</h3>
      <div
        className="w-[60px] h-[60px] absolute right-0 bottom-0 rounded-tl-full rounded-br-md flex items-center justify-center"
        style={{
          backgroundColor: color,
        }}
      >
        <Image
          src={icon}
          alt={`${title} icon`}
          width={24}
          height={24}
          className="ml-3 mt-2"
        />
      </div>
    </div>
  );
};

export default StatCard;
