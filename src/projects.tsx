import ramadhanChallenge from "../public/images/ramadhan-challenge.png";
import jobDescriptionGenerator from "../public/images/generate-job-description.png";
import familyCarePicture from "../public/images/family-care.png";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const projectsData = [
  {
    image: ramadhanChallenge,
    title: "Community Challenge",
    description:
      "I built a 30 day community challenge for my community. Over 30 people signed up and took part in the challenge. Each week I iterated and delivered new features to keep users active. The community generated 2000+ points in under two weeks. Each week the leaderboard is announced and at the end top 3 users get prizes. Implemented cool data visulisation diagrams to let users track their activities.",
  },
  {
    image: jobDescriptionGenerator,
    title: "AI Job Description Generator",
    description:
      "I used OpenAI API to build a job description generator. This generated responses are live streamed to the user for great user experience. Stripe payment integration to purchase credits.",
  },
  {
    image: familyCarePicture,
    title: "Desktop applicaiton for homeopathic clinic",
    description:
      "Building an offline desktop application using the Tauri framework (Rust + React) for a homeopathic pharamacy to help them manage their medicine database and online orders. The application allows to seemelssly print labels for online orders.",
  },
];

export default function Projects() {
  return (
    <section className="max-w-4xl p-4 mx-auto">
      <div>
        <h2 className="font-semibold text-2xl md:text-3xl pb-2">Projects</h2>
        <div className="flex flex-col gap-4 items-stretch">
          {projectsData.map((project) => {
            return (
              <div key={project.image.blurDataURL} className="">
                <Card className="flex flex-col md:flex-row">
                  <Image
                    src={project.image}
                    alt=""
                    width={400}
                    height={300}
                    className="rounded-l-md object-contain"
                    loading="lazy"
                  />
                  <div className="p-2 flex flex-col gap-2">
                    <p className="font-bold">{project.title}</p>
                    <p>{project.description}</p>
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
