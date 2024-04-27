import ramadhanChallenge from "../public/images/ramadhan-challenge.png";
import jobDescriptionGenerator from "../public/images/generate-job-description.png";
import familyCarePicture from "../public/images/family-care.png";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const projectsData = [
  {
    image: jobDescriptionGenerator,
    title: "AI Job Description Generator",
    description:
      "I used OpenAI API to build a job description generator. This generated responses are live streamed to the user for great user experience. Stripe payment integration to purchase credits.",
    link: "https://generatejobdescription.com",
  },
  {
    image: ramadhanChallenge,
    title: "Community Challenge",
    description:
      "I built a 30 day community challenge for my community. Over 30 people signed up and took part in the challenge. Each week I iterated and delivered new features to keep users active. The community generated 2000+ points in under two weeks. Each week the leaderboard is announced and at the end top 3 users get prizes. Implemented cool data visulisation diagrams to let users track their activities.",
    link: "https://ramadhan-challenge.pages.dev",
  },

  {
    image: familyCarePicture,
    title: "Desktop applicaiton for homeopathic clinic",
    description:
      "Building an offline desktop application using the Tauri framework (Rust + React) for a homeopathic pharamacy to help them manage their medicine database and online orders. The application allows to seemelssly print labels for online orders.",
    link: "https://github.com/maghfoor-dev/family-care-homeopathic-label-maker",
  },
];

export default function Projects() {
  return (
    <section className="p-4 mx-auto max-w-4xl">
      <div>
        <h2 className="pb-2 text-2xl font-semibold md:text-3xl">Projects</h2>
        <div className="flex flex-col gap-4 items-stretch">
          {projectsData.map((project) => {
            return (
              // <div key={project.image.blurDataURL} className="">
              <Link
                key={project.image.blurDataURL}
                href={project.link}
                target="_blank"
                className="rounded-md border-2 border-transparent border-solid hover:border-black group"
              >
                <Card className="flex flex-col h-full md:flex-row">
                  <Image
                    src={project.image}
                    alt=""
                    width={400}
                    height={300}
                    className="object-contain rounded-t-md md:rounded-t-none md:rounded-tl-md md:rounded-l-md"
                    loading="lazy"
                  />
                  <div className="flex flex-col gap-2 p-2">
                    <p className="font-bold">{project.title}</p>
                    <p>{project.description}</p>
                    <p className="text-blue-600 group-hover:underline">
                      Check it out
                    </p>
                  </div>
                </Card>
              </Link>
              // </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
