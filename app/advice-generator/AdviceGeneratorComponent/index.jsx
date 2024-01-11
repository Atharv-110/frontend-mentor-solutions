"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import dividerDesktop from "./assets/pattern-divider-desktop.svg";
import dividerMobile from "./assets/pattern-divider-mobile.svg";
import diceImage from "./assets/icon-dice.svg";

const AdviceGeneratorComponent = () => {
  const [advice, setAdvice] = useState([]);
  const [loading, setLoading] = useState(true);
  const initialized = useRef(false);

  // API Fetching function
  const fetchAdvice = async () => {
    setLoading((state) => !state);
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip);
    setLoading(false);
  };

  console.log(advice.advice);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      fetchAdvice();
    }
  }, []);
  return (
    <div className="bg-[#1f2632] py-16 px-4 md:px-10">
      <div className="relative max-w-[400px] mx-auto font-manrope font-[800] bg-[#323a49] px-8 pt-8 pb-14 flex flex-col items-center gap-4 md:gap-6 rounded-2xl">
        <h1 className="text-[#52ffa8] text-sm tracking-[5px] text-center">
          ADVICE #{advice.id}
        </h1>
        <p className="text-lg md:text-[24px] text-center text-[#cee3e9]">
          {loading ? "Loading..." : `"${advice.advice}"`}
        </p>
        <Image
          src={dividerDesktop}
          width={200}
          height={200}
          alt="divider desktop"
          className="w-full hidden md:block"
        />
        <Image
          src={dividerMobile}
          width={200}
          height={200}
          alt="divider desktop"
          className="w-full block md:hidden"
        />
        <button
          onClick={fetchAdvice}
          className="p-4 absolute bottom-[-25px] bg-[#52ffa8] rounded-full hover:shadow-[rgba(82,255,168,1)_0px_2px_35px_0px] ease-in-out duration-300"
        >
          <Image src={diceImage} width={20} height={20} alt="dice icon" />
        </button>
      </div>
    </div>
  );
};

export default AdviceGeneratorComponent;
