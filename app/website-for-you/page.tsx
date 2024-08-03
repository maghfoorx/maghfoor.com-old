import { Metadata } from "next";
import Link from "next/link";

const headline = "Make More Money with My Web Design Skills";

export const metadata: Metadata = {
  title: headline,
};

export default function WebsiteForYouPage() {
  return (
    <main className="min-w-0 text-left text-2xl">
      <section className="p-4 mx-auto max-w-4xl flex flex-col gap-2">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          {headline}
        </h1>
        <p className="my-2">
          I create stunning, responsive websites that get you more customers for
          your business 🚀
        </p>
        <div>
          <Link
            href="mailto:maghfoor.dev@gmail.com"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#F0C61A] px-8 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Email Me
          </Link>
        </div>
      </section>
      <section className="p-4 mx-auto max-w-4xl flex flex-col gap-2">
        <h2 className="text-2xl md:text-4xl font-bold leading-snug">
          Who Am I?
        </h2>
        <p className="my-2">
          Hi there! I am a web developer with many years of experience. I love
          making websites that are easy to use and look great. My focus is
          always on you and your business. I listen to what you need and make
          sure you are happy with the results.
        </p>
      </section>
      <section className="p-4 mx-auto max-w-4xl flex flex-col gap-2">
        <h2 className="text-2xl md:text-4xl font-bold leading-snug">
          Why Work with Me?
        </h2>
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>
            Customer First: You come first. I listen to your ideas and needs.
          </li>
          <li>Experience: I have been building websites for many years.</li>
          <li>
            Personal Touch: I make sure each website is unique to you and your
            business.
          </li>
          <li>Results: My websites help your business grow.</li>
        </ul>
      </section>
    </main>
  );
}
