import Image from "next/image";
import QRImage from "./assets/image-qr-code.png";

const QRCodeComponent = () => {
  return (
    <div className="bg-[#d6e2f0] p-10 flex justify-center">
      <div className="bg-white max-w-[280px] flex flex-col items-center gap-4 rounded-2xl p-4 font-outfit shadow-lg">
        <Image
          src={QRImage}
          width={200}
          height={200}
          alt="qr code image"
          className="w-fit rounded-lg"
        />
        <h1 className="font-[700] text-[#1f3251] text-center text-xl">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-sm text-[#7b879d] text-center font-[400]">
          Scan the QR code to visit Frontend Mentor and take coding skills to
          next level
        </p>
      </div>
    </div>
  );
};

export default QRCodeComponent;
