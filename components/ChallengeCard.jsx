import Image from "next/image";
import Link from "next/link";

const ChallengeCard = ({ title, banner, tech, level, route }) => {
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
    <div className="max-w-[300px] max-sm:mx-auto border bg-white shadow-md rounded-xl">
      <Link href={route}>
        <Image
          src={banner}
          width={200}
          height={200}
          alt="banner image"
          className="w-fit rounded-xl rounded-b-none"
        />
      </Link>
      <div className="px-3 py-5 flex flex-col gap-3">
        <Link href={route}>
          <h1 className="text-lg w-fit font-bold hover:underline">{title}</h1>
        </Link>

        <div className="flex gap-1 text-xs">
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
