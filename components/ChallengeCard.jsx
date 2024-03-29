import Image from "next/image";
import Link from "next/link";

const ChallengeCard = ({ title, banner, tech, level, route, target }) => {
  const levelStyles = {
    1: {
      container:
        "w-fit flex border-2 rounded-[5px] items-center border-[#6abecd]",
      badge: "px-2 bg-[#6abecd] text-white text-sm font-semibold",
      label:
        "bg-white rounded-[5px] px-2 text-sm uppercase font-bold text-[#6abecd]",
      text: "Newbie",
    },
    2: {
      container:
        "w-fit flex border-2 rounded-[5px] items-center border-[#aad742]",
      badge: "px-2 bg-[#aad742] text-white text-sm font-semibold",
      label:
        "bg-white rounded-[5px] px-2 text-sm uppercase font-bold text-[#aad742]",
      text: "Junior",
    },
    default: {
      container:
        "w-fit flex border-2 rounded-[5px] items-center border-[#f1b604]",
      badge: "px-2 bg-[#f1b604] text-white text-sm font-semibold",
      label:
        "bg-white rounded-[5px] px-2 text-sm uppercase font-bold text-[#f1b604]",
      text: "Intermediate",
    },
  };

  const currentLevelStyle = levelStyles[level] || levelStyles.default;

  return (
    <div className="w-[280px] md:w-[300px] max-sm:mx-auto border border-gray-300 bg-white shadow-md rounded-2xl overflow-hidden">
      <Link href={route} target={target ? "_blank" : "_self"}>
        <Image
          src={banner}
          width={300}
          height={300}
          alt="banner image"
          className="w-full rounded-t-2xl hover:scale-105 ease-in-out duration-300"
        />
      </Link>
      <div className="p-4 flex flex-col gap-4">
        <Link
          href={route}
          className="w-fit"
          target={target ? "_blank" : "_self"}
        >
          <h1 className="text-lg text-[#3E54A3] tracking-wide w-fit font-bold hover:text-gray-700 ease-in-out duration-200">
            {title}🚀
          </h1>
        </Link>

        <div className="flex gap-1.5 text-xs items-center flex-wrap">
          {tech.map((item, idx) => (
            <h3 key={idx} className="challenge_card_text uppercase font-bold">
              {item}
            </h3>
          ))}
        </div>
        <div className={currentLevelStyle.container}>
          <h1 className={currentLevelStyle.badge}>{level}</h1>
          <h1 className={currentLevelStyle.label}>{currentLevelStyle.text}</h1>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
