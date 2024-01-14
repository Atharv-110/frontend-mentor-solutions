import Image from "next/image";
import desktopImg from "./assets/image-product-desktop.jpg";
import mobileImg from "./assets/image-product-mobile.jpg";
import cartImg from "./assets/icon-cart.svg";

const ProductPreviewCardComponent = () => {
  return (
    <div className="bg-[#f2ebe3] py-20 px-4 flex items-center justify-center">
      <div className="rounded-lg md:flex overflow-hidden md:w-[500px] md:h-[375px] bg-white">
        <Image
          src={desktopImg}
          width={200}
          height={200}
          alt="product image"
          className="w-1/2 hidden md:block"
        />
        <Image
          src={mobileImg}
          width={200}
          height={200}
          alt="product image"
          className="w-full md:hidden"
        />
        <div className="w-full md:w-1/2 px-6 py-6 gap-4 md:gap-6 flex flex-col">
          <p className="text-[10px] font-montserrat tracking-[3px] text-[#6c7289]">
            PERFUME
          </p>
          <h1 className="font-fraunces text-3xl leading-none text-[#1c232b]">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-[12px] font-montserrat text-[#6c7289]">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer- Creator for the house of CHANEL .
          </p>
          <div className="flex items-center gap-x-4">
            <h1 className="text-2xl leading-none font-fraunces text-[#3c8067]">
              $149.99
            </h1>
            <p className="text-xs line-through text-[#6c7289]">$169.99</p>
          </div>
          <button className="bg-[#3c8067] flex items-center rounded-md justify-center gap-x-2 text-[12px] py-2 hover:bg-green-950">
            <Image src={cartImg} width={12} height={12} alt="cart icon" />
            <h2 className=" text-white font-montserrat font-bold">
              Add to Cart
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewCardComponent;
