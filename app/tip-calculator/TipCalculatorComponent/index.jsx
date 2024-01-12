"use client";
import userImg from "./assets/icon-person.svg";
import { useState, useEffect } from "react";
import Image from "next/image";

const TipCalculatorComponent = () => {
  const [billAmt, setBillAmt] = useState("");
  const [tip, setTip] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // Function to reset all state values
  const reset = () => {
    setBillAmt("");
    setTip("");
    setCustomTip("");
    setPeople("");
    setTipAmount(0);
    setTotal(0);
  };

  // Function to calculate tip amount and total
  const calculateTipAndTotal = (tipValue) => {
    if (billAmt && people > 0) {
      const convert = parseFloat(tipValue / 100);
      const TipAmount = ((billAmt * convert) / people).toFixed(2);
      const total = (
        (billAmt * convert + parseFloat(billAmt)) /
        people
      ).toFixed(2);
      setTipAmount(TipAmount);
      setTotal(total);
    }

    if (billAmt.length >= 10) {
      const convert = parseFloat(tipValue / 100);
      const TipAmount = ((billAmt * convert) / people).toExponential(1);
      const total = (
        (billAmt * convert + parseFloat(billAmt)) /
        people
      ).toExponential(1);
      setTipAmount(TipAmount);
      setTotal(total);
    }
  };

  // Effect to calculate tip amount and total when tip, billAmt, or people change
  useEffect(() => {
    if (tip) {
      calculateTipAndTotal(tip);
      setCustomTip("");
    }
  }, [billAmt, tip, people]);

  // Effect to calculate tip amount and total when customTip, billAmt, or people change
  useEffect(() => {
    if (customTip) {
      calculateTipAndTotal(customTip);
      setTip("");
    }
  }, [billAmt, customTip, people]);

  // Effect to calculate total when billAmt or people change
  useEffect(() => {
    if (billAmt && people > 0) {
      const total = (parseFloat(billAmt) / people).toFixed(2);
      setTotal(total);
    }

    if (billAmt.length >= 9) {
      const total = (parseFloat(billAmt) / people).toExponential(1);
      setTotal(total);
    }
  }, [billAmt, customTip, people]);

  return (
    <div className="font-spaceMono bg-[#c5e4e7] pt-8 md:py-16 flex flex-col items-center gap-8 md:gap-10">
      <h1 className="font-[700] text-[#00494d] tracking-[4px]">
        SPLI <br />
        TTER
      </h1>
      <div className="flex flex-col gap-6 md:gap-0 md:flex-row bg-white justify-between py-7 px-6 max-sm:border-b rounded-t-2xl md:rounded-2xl w-full md:w-[50%]">
        {/* Bill, Select Tip %, Number of People inputs */}
        <div className="md:w-[50%] py-2 px-2 md:pl-2 md:pr-5">
          <label
            htmlFor="bill-amt"
            className="text-xs text-[#5e7a7d] font-[700]"
          >
            Bill
          </label>
          <div className="flex relative items-center justify-between mb-6">
            <p className="absolute left-3 text-[20px] text-[#7f9c9f]">$</p>
            <input
              type="number"
              id="bill-amt"
              name="bill-amt"
              step="any"
              value={billAmt}
              min="0"
              onChange={(e) => setBillAmt(e.target.value)}
              required
              placeholder="0"
              className="text-right text-[#00494d] font-[700] w-full outline-none border-2 border-white focus:border-2 pr-3 focus:border-[#26c0ab]  bg-[#f4fafa] rounded-md text-[24px]"
            />
          </div>
          <label className="text-xs text-[#5e7a7d] font-[700]">
            Select Tip %
          </label>
          <div className="grid grid-rows-2 grid-cols-3 gap-x-5 gap-y-3 mb-6">
            <button className="tip_btn" onClick={() => setTip(5)}>
              5%
            </button>
            <button className="tip_btn" onClick={() => setTip(10)}>
              10%
            </button>
            <button className="tip_btn" onClick={() => setTip(15)}>
              15%
            </button>
            <button className="tip_btn" onClick={() => setTip(25)}>
              25%
            </button>
            <button className="tip_btn" onClick={() => setTip(50)}>
              50%
            </button>
            <input
              type="number"
              id="custom-tip"
              name="custom-tip"
              min="1"
              value={customTip}
              onChange={(e) => setCustomTip(e.target.value)}
              maxLength="100"
              max={100}
              placeholder="Custom"
              className="text-right text-[#00494d] font-[700] py-1 outline-none border-2 border-white focus:border-2 px-1 focus:border-[#26c0ab]  bg-[#f4fafa] rounded-[4px] text-[18px]"
            />
          </div>

          <div className="flex text-xs text-[#5e7a7d] font-[700] justify-between mb-1">
            <label htmlFor="">Number of People</label>
            {people == 0 ? (
              <p className="text-red-400">Can&apos;t be zero</p>
            ) : (
              ""
            )}
          </div>
          <div className="flex relative items-center">
            <Image
              src={userImg}
              width={12}
              height={12}
              alt="user icon"
              className="absolute left-3"
            />
            <input
              type="number"
              id="people"
              name="people"
              step="any"
              value={people}
              min="1"
              onChange={(e) => setPeople(e.target.value)}
              required
              placeholder="0"
              className="text-right text-[#00494d] font-[700] w-full outline-none border-2 border-white focus:border-2 pr-3 focus:border-[#26c0ab]  bg-[#f4fafa] rounded-md text-[24px] focus:invalid:border-red-400 invalid:border-red-400"
            />
          </div>
        </div>

        {/* Tip Amount and Total display */}
        <div className="md:w-[47%] pt-8 pb-6 px-5 flex flex-col justify-between rounded-xl bg-[#00494d]">
          <div className="flex flex-col gap-6 md:gap-8 mb-10 md:mb-0">
            <div className="flex items-center justify-between font-bold">
              <h3 className="text-sm text-[#f4fafa]">
                Tip Amount{" "}
                <span className="block text-xs text-[#7f9c9f]">/ person</span>
              </h3>
              <h1 className="text-3xl text-[#26c0ab]">${tipAmount}</h1>
            </div>
            <div className="flex items-center justify-between font-bold">
              <h3 className="text-sm text-[#f4fafa]">
                Total{" "}
                <span className="block text-xs text-[#7f9c9f]">/ person</span>
              </h3>
              <h1 className="text-3xl text-[#26c0ab]">${total}</h1>
            </div>
          </div>
          <button
            disabled={billAmt == 0 || people == 0 ? true : false}
            onClick={() => reset()}
            className={
              billAmt == 0 || people == 0
                ? "bg-[#5e7a7d] uppercase text-[#00494d] font-bold py-1 rounded-md"
                : "bg-[#c5e4e7] uppercase text-[#00494d] font-bold py-1 rounded-md cursor-pointer hover:bg-[#26c0ab]"
            }
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default TipCalculatorComponent;
