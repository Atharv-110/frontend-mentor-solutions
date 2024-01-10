import Image from "next/image";
import Link from "next/link";
const ChallengeCard = ({ title, banner, tech, level, route }) => {
  return (
    <div className="max-w-[300px] border bg-white shadow-md rounded-xl">
      <Link href={route}>
        <Image
          src={banner}
          width={200}
          height={200}
          alt="banner image"
          className="w-fit rounded-xl rounded-b-none"
        />
      </Link>
      <div className="px-2 py-4 flex flex-col gap-3">
        <Link href={route}>
          <h1 className="text-lg font-semibold hover:underline ease-in-out duration-200">
            {title}
          </h1>
        </Link>

        <div className="text-sm">
          <div className="flex gap-2 mb-4">
            {tech.map((item, idx) => (
              <h3 key={idx}>{item}</h3>
            ))}
          </div>
          <div className="w-fit flex border-2 rounded-[5px] items-center border-blue-400 ">
            <h1 className="px-2 bg-blue-400 text-white text-sm font-semibold">
              {level}
            </h1>
            <h1 className="bg-white rounded-[5px] px-2 text-sm font-semibold text-blue-400">
              {level == 1 ? "Newbie" : level == 2 ? "Junior" : "Intermediate"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
