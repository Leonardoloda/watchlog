import Image from "next/image";

export default function Home() {
  return (
    <main>
      <ul className="w-screen h-screen flex lg:flex-row flex-col">
        <li className="basis-1/3 bg-red-500 cursor-pointer hover:bg-red-800 flex justify-center items-center relative">
          <Image src="/img/anime.webp" alt="Anime" fill />
          <h2 className="text-4xl">Movies</h2>
        </li>
        <li className="basis-1/3 bg-emerald-300 hover:bg-emerald-800 cursor-pointer flex justify-center items-center relative">
          <h2 className="text-4xl">Series</h2>
        </li>
        <li className="basis-1/3 bg-amber-500 hover:bg-amber-800 cursor-pointer flex justify-center items-center relative">
          <h2 className="text-4xl">Animes</h2>
        </li>
      </ul>
    </main>
  );
}
