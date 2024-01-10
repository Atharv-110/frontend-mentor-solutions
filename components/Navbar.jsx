import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 bg-white px-3 md:px-6 py-4 shadow-md flex items-center justify-between">
      <Link href="/">
        <Image
          src="https://www.frontendmentor.io/static/images/logo-desktop.svg"
          width={220}
          height={220}
          alt="logo"
          className="w-[150px] md:w-[200px]"
        />
      </Link>
      <div className="flex items-center gap-2 font-medium">
        <h1 className="hidden md:block text-gray-500">Solutions by:</h1>
        <Link
          href="https://www.atharv110.tech/"
          target="_blank"
          className="text-sm md:text-base underline"
        >
          Atharv Vani
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
