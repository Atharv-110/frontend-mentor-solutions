import ChallengeCard from "@/components/ChallengeCard";
import challengeData from "@/public/data/challenges";

export default function Home() {
  const data = challengeData.challenge;
  return (
    <main className="container flex gap-8 md:gap-16 items-center flex-wrap">
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
    </main>
  );
}
