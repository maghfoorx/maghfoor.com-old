import Link from "next/link";

export const runtime = "edge";

export default async function Home() {
  return (
    <main className="min-w-0 flex flex-col items-center">
      <section className="border-2 border-black rounded max-w-3xl m-10 p-3 bg-yellow-300 shadow-md mx-4">
        <h1 className="text-4xl text-center font-semibold">Maghfoor Ahmed</h1>
        <div className="flex items-center">
          <Link
            href={"https://sphorb.io"}
            className="hover:underline mx-auto text-blue-900"
          >
            sphorb.io
          </Link>
        </div>
      </section>
    </main>
  );
}
