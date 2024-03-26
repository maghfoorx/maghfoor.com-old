import codingTournament from "../public/images/coding-tournament.png";
import starAward from "../public/images/star-award.png";
import Image from "next/image";

const highlightsData = [
  {
    image: codingTournament,
    description:
      "I won a keyboard and a Supercar Experience Day at my first very tech tournament. This was the secure code warrior security tournament held by IAGL.",
  },
  {
    image: starAward,
    description:
      "I received a company wide Star Award just after 7 months of working at IAGL. This award is given those who accomplish a lot and make a meaningful difference at the company.",
  },
];

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-7 max-w-4xl p-4 mx-auto">
      <div>
        <h1 className="font-bold text-5xl md:text-7xl">HEY! I AM MAGHFOOR</h1>
        <p>Full Stack Software Engineer</p>
        <p>Currently At IAG Loyalty</p>
      </div>
      <div>
        <h2 className="font-bold text-3xl md:text-5xl">HIGHLIGHTS</h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {highlightsData.map((highlight) => {
            return (
              <div key={highlight.image.blurDataURL}>
                <Image
                  src={highlight.image}
                  alt=""
                  className="object-contain md:object-cover md:h-[322px] md:w-[455px] rounded-md mx-auto"
                />
                <p>{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
