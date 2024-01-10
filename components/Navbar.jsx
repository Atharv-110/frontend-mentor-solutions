import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-6 py-4 shadow-md flex items-center justify-between">
      <Image
        src="https://www.frontendmentor.io/static/images/logo-desktop.svg"
        width={220}
        height={220}
        alt="logo"
        className="w-[150px] md:w-[200px]"
      />
      <div className="flex items-center gap-2 font-medium">
        <h1>Solutions by:</h1>
        <Link
          href="https://www.atharv110.tech/"
          target="_blank"
          className="underline"
        >
          Atharv Vani
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
