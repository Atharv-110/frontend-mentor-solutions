import ChallengeCard from "@/components/ChallengeCard";
import challengeData from "@/public/data/challenges";

export default function Home() {
  const data = challengeData.challenge;
  return (
    <main className="container">
      <div className="w-full flex gap-x-0 md:gap-x-16 items-center gap-y-8 md:gap-y-12 flex-wrap">
        {data.map((item) => (
          <ChallengeCard
            key={item.id}
            title={item.title}
            banner={item.banner}
            tech={item.technologies}
            level={item.level}
            route={item.route}
          />
        ))}
      </div>
    </main>
  );
}
