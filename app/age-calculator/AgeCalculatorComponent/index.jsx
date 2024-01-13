"use client";
import { useState } from "react";
import arrowImg from "./assets/icon-arrow.svg";
import Image from "next/image";

const AgeCalculatorComponent = () => {
  const currentDate = new Date();
  var currentDay = currentDate.getDate();
  var currentMonth = currentDate.getMonth() + 1;
  var currentYear = currentDate.getFullYear();
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [ageDay, setAgeDay] = useState(0);
  const [ageMonth, setAgeMonth] = useState(0);
  const [ageYear, setAgeYear] = useState(0);

  console.log(currentYear);
  console.log(currentDay);
  console.log(currentMonth);

  const calculateAge = () => {
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (birthDay > currentDay) {
      currentDay = currentDay + month[birthMonth - 1];
      currentMonth = currentMonth - 1;
    }
    if (birthMonth > currentMonth) {
      currentYear = currentYear - 1;
      currentMonth = currentMonth + 12;
    }

    setAgeDay(currentDay - birthDay);
    setAgeMonth(currentMonth - birthMonth);
    setAgeYear(currentYear - birthYear);
  };

  return (
    <div className="font-poppins bg-[#f0f0f0] py-10 px-4">
      <div className="bg-white shadow-lg max-sm:w-full rounded-ee-[6rem] md:rounded-ee-[8rem] rounded-2xl w-fit px-4 md:px-10 md:pr-16 py-8 mx-auto">
        <div className="grid grid-cols-3 relative gap-x-20 md:gap-6 pb-16 md:pb-9 border-b-2 pr-16">
          <div>
            <label
              htmlFor="day"
              className="text-[#716f6f] text-xs tracking-widest"
            >
              DAY
            </label>
            <input
              type="number"
              id="day"
              name="day"
              min={1}
              max={31}
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
              className="age_input"
              placeholder="DD"
            />
          </div>
          <div>
            <label
              htmlFor="month"
              className="text-[#716f6f] text-xs tracking-widest"
            >
              MONTH
            </label>
            <input
              type="number"
              id="month"
              name="month"
              min={1}
              max={12}
              value={birthMonth}
              onChange={(e) => setBirthMonth(e.target.value)}
              className="age_input"
              placeholder="MM"
            />
          </div>
          <div>
            <label
              htmlFor="year"
              className="text-[#716f6f] text-xs tracking-widest"
            >
              YEAR
            </label>
            <input
              type="number"
              id="year"
              name="year"
              min="1"
              max={currentYear}
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              className="age_input"
              placeholder="YYYY"
            />
          </div>
          <button
            onClick={calculateAge}
            className="bg-[#854dff] hover:bg-[#141414] absolute max-sm:left-[50%] max-sm:-translate-x-1/2 bottom-[-1.8rem] md:bottom-[-2rem] md:right-[-2rem] p-3 md:p-4 rounded-full"
          >
            <Image src={arrowImg} width={32} height={32} alt="arrow image" />
          </button>
        </div>
        <div className="mt-14 md:mt-8 italic font-[800] text-[52px] md:text-[72px] text-[#854dff] leading-[1.1]">
          <h1 className="">
            {ageYear == 0 ? "--" : ageYear}{" "}
            <span className="text-[#141414]">years</span>
          </h1>
          <h1 className="">
            {ageMonth == 0 ? "--" : ageMonth}{" "}
            <span className="text-[#141414]">months</span>
          </h1>
          <h1 className="">
            {ageDay == 0 ? "--" : ageDay}{" "}
            <span className="text-[#141414]">days</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculatorComponent;
