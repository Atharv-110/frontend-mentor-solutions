import Image from "next/image";
import Link from "next/link";
import avatar from "./assets/avatar.png";

const socials = [
  {
    id: 1,
    title: "GitHub",
    link: "https://github.com/Atharv-110",
  },
  {
    id: 2,
    title: "Frontend Mentor",
    link: "https://www.frontendmentor.io/profile/Atharv-110",
  },
  {
    id: 3,
    title: "Linkedin",
    link: "https://www.frontendmentor.io/profile/Atharv-110",
  },
  {
    id: 4,
    title: "Twitter",
    link: "https://www.frontendmentor.io/profile/Atharv-110",
  },
  {
    id: 5,
    title: "Instagram",
    link: "https://www.frontendmentor.io/profile/Atharv-110",
  },
];

const SocialLinkComponent = () => {
  return (
    <div className="w-full flex justify-center py-12 bg-[#141414]">
      <div className="w-full max-sm:mx-4 md:w-[350px] bg-[#1f1f1f] p-6 rounded-lg flex flex-col justify-center items-center gap-4">
        <Image
          src={avatar}
          width={100}
          height={100}
          alt="avatar"
          className="w-[100px] rounded-full"
          unoptimized
        />
        <div className="text-center">
          <h1 className="text-xl text-white font-[700]">Atharv Vani</h1>
          <h2 className="text-[#c5f82a] font-[600]">Indore, India</h2>
        </div>
        <p className="text-sm text-white">Software & Frontend Developer</p>
        {socials.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="w-full bg-[#333333] py-2 rounded-md text-white text-center text-sm font-[600] hover:bg-[#c5f82a] hover:text-[#333333] ease-in-out duration-200"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialLinkComponent;
