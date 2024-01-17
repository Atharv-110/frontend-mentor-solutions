"use client";
import { useState } from "react";
import Image from "next/image";
import bullet from "./assets/icon-list.svg";
import desktopBanner from "./assets/illustration-sign-up-desktop.svg";
import tick from "./assets/icon-success.svg";

const NewsletterSignupComponent = () => {
  const list = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more",
  ];
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);
  const [redirect, setRedirect] = useState(false);

  const className = valid
    ? "block w-full py-3 px-4 text-sm rounded-lg outline-none mt-1 border border-[#9294a0]"
    : "block w-full py-3 px-4 text-sm rounded-lg outline-none mt-1 border border-[#ff6257] bg-[#ff62572f] text-[#ff6257]";

  const validateEmail = (e) => {
    e.preventDefault();
    if (
      email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setValid(true);
      setRedirect(true);
    } else {
      setValid(false);
    }
  };

  const handleDismiss = () => {
    setEmail("");
    setRedirect(false);
  };

  return (
    <div className="bg-[#36384e] py-10">
      {!redirect ? (
        <div className="w-[700px] h-fit mx-auto p-6 rounded-3xl flex items-center gap-7 bg-white font-roboto">
          <div className="w-[55%] px-4 flex flex-col gap-4">
            <h1 className="text-[2.5rem] font-bold text-[#242742]">
              Stay updated!
            </h1>
            <p className="text-[#242742] text-sm">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <div>
              {list.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 mb-2">
                  <Image
                    src={bullet}
                    width={16}
                    height={16}
                    alt="bullet icon"
                  />
                  <p className="text-sm text-[#242742]">{item}</p>
                </div>
              ))}
            </div>
            <form className="flex flex-col gap-5" onSubmit={validateEmail}>
              <label>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#242742]">
                    Email Address
                  </span>
                  {!valid ? (
                    <span className="text-xs font-bold text-[#ff6257]">
                      Valid email required
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="email@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={className}
                />
              </label>

              <button
                type="submit"
                className="bg-[#242742] w-full text-xs font-bold text-white py-3 rounded-lg"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          <div className="w-[calc(100%-55%)]">
            <Image
              src={desktopBanner}
              width={100}
              height={100}
              alt="desktop banner"
              className="w-fit"
            />
          </div>
        </div>
      ) : (
        <div className="bg-white flex flex-col gap-5 rounded-3xl w-[400px] py-6 px-10 mx-auto">
          <Image src={tick} width={50} height={50} alt="success icon" />
          <h1 className="text-[2.5rem] leading-none font-bold text-[#242742]">
            Thanks for subscribing!
          </h1>
          <p className="text-[#242742] text-sm">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}.</span> Please open it and click
            the button inside to confirm your subscription.
          </p>
          <button
            onClick={handleDismiss}
            className="bg-[#242742] w-full text-xs font-bold text-white py-3 rounded-lg"
          >
            Dismiss Message
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsletterSignupComponent;
