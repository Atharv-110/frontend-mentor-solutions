import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-30 top-0 bg-white px-3 md:px-6 py-3 md:py-4 shadow-md flex items-center justify-between">
      <Link href="/">
        <Image
          src="https://www.frontendmentor.io/static/images/logo-desktop.svg"
          width={220}
          height={220}
          alt="logo"
          className="w-[160px] md:w-[210px]"
        />
      </Link>
      <div className="flex items-center gap-2 font-medium">
        <Link
          href="https://www.atharv110.tech/"
          target="_blank"
          className="text-sm font-semibold tracking-wide uppercase text-white bg-theme-red px-5 py-2 rounded-full hover:bg-theme-black hover:scale-105 ease-in-out duration-200 hover:shadow-lg"
        >
          Atharv Vani
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
