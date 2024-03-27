import ramadhanChallenge from "../public/images/ramadhan-challenge.png";
import jobDescriptionGenerator from "../public/images/generate-job-description.png";
import Image from "next/image";

const projectsData = [
  {
    image: ramadhanChallenge,
    description:
      "I built a 30 day community challenge for my community. Over 30 people signed up and took part in the challenge. Each week I iterated and delivered new features to keep users active. The community generated 2000+ points in under two weeks. Each week the leaderboard is announced and at the end top 3 users get prizes. Implemented cool data visulisation diagrams to let users track their activities.",
  },
  {
    image: jobDescriptionGenerator,
    description:
      "I used OpenAI API to build a job description generator. This generated responses are live streamed to the user for great user experience. Stripe payment integration to purchase credits.",
  },
];

export default function Projects() {
  return (
    <section className="max-w-4xl p-4 mx-auto">
      <div>
        <h2 className="font-bold text-3xl md:text-4xl">Projects</h2>
        <div className="">
          {projectsData.map((project) => {
            return (
              <div
                key={project.image.blurDataURL}
                className="flex flex-col md:flex-row gap-2 py-2"
              >
                <Image
                  src={project.image}
                  alt=""
                  className="border border-black"
                  width={400}
                  height={300}
                  loading="lazy"
                />
                <div>
                  <p>{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
