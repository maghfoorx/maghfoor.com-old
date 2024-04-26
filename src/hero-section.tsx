import { Card } from "@/components/ui/card";
import codingTournament from "../public/images/coding-tournament.png";
import starAward from "../public/images/star-award.png";
import Image from "next/image";

const highlightsData = [
  {
    image: codingTournament,
    title: "Won Secure Code Tournament",
    description:
      "I won a keyboard and a Supercar Experience Day at my first very tech tournament. This was the secure code warrior security tournament held by IAGL.",
  },
  {
    image: starAward,
    title: "Received Company Wide Star Award",
    description:
      "I received a company wide Star Award just after 7 months of working at IAGL. This award is given those who accomplish a lot and make a meaningful difference at the company.",
  },
];

export default function HeroSection() {
  return (
    <section className="max-w-4xl p-4 mx-auto">
      <div className="mb-4">
        <h1 className="font-bold text-5xl md:text-7xl">HEY! I AM MAGHFOOR</h1>
        <p>Full Stack Software Engineer</p>
        <p>Currently At IAG Loyalty</p>
      </div>
      <div>
        <h2 className="font-bold text-3xl md:text-4xl">HIGHLIGHTS</h2>
        <div className="flex flex-col md:flex-row md:gap-4">
          {highlightsData.map((highlight) => {
            return (
              <div
                key={highlight.image.blurDataURL}
                className="flex flex-col md:flex-row gap-2 py-2"
              >
                {/* <Image
                  src={highlight.image}
                  alt=""
                  width={400}
                  height={300}
                  className="border border-black"
                  loading="lazy"
                /> */}
                {/* <p>{highlight.description}</p> */}
                <Card className="max-w-[400px]">
                  <Image
                    src={highlight.image}
                    alt=""
                    width={400}
                    height={300}
                    className="rounded-t-md"
                    loading="lazy"
                  />
                  <div className="p-2">
                    <p className="font-bold">{highlight.title}</p>
                    <p>{highlight.description}</p>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
