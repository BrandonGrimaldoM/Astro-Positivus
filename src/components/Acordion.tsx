interface AcordionProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

import { useState } from "react";

export default function Arcordion(props: AcordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleAcordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`w-full border border-p-black rounded-big shadow-box ${
        isOpen ? "bg-p-green" : "bg-p-white"
      } px-[60px] py-[41px] mb-[30px]`}>
      <div
        className={`w-full flex justify-between items-center ${
          isOpen ? "pb-[30px]" : null
        }`}>
        <div className="flex justify-center items-center gap-[25px]">
          <p className="text-[60px]">{"0" + props.number}</p>
          <h3>{props.title}</h3>
        </div>
        {isOpen ? (
          <img
            src="/images/Less.png"
            alt="plus"
            decoding="async"
            loading="lazy"
            onClick={handleAcordion}
            className="cursor-pointer"
          />
        ) : (
          <img
            src="/images/Plus.png"
            alt="plus"
            decoding="async"
            loading="lazy"
            onClick={handleAcordion}
            className="cursor-pointer"
          />
        )}
      </div>
      <div
        className={`border-t border-[#000] pt-[30px] ${
          isOpen ? "block" : "hidden"
        }`}>
        {props.children}
      </div>
    </div>
  );
}
