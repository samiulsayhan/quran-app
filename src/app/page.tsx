import Image from "next/image";
import qurans from "@/data/quran.json";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10 w-full bg-[#FDFCF8] font-sans dark:bg-black">
      <header className="flex justify-center w-full py-5 px-5 border-[0.5px] border-gray-200">
        <div className="flex flex-row max-w-[1540px] lg:w-[80%] md:w-[80%] sm:w-[80%] justify-between items-center">
          <div className="flex items-center gap-2 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-book-open text-[#0D6549] h-6 w-6"
              aria-hidden="true"
            >
              <path d="M12 7v14"></path>
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
            </svg>
            <h1 className="text-xl sm:text-xl font-bold tracking-tight text-[#0D6549]">
              AL Quran
            </h1>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-settings h-5 w-5"
              aria-hidden="true"
            >
              <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
        </div>
      </header>
      <main className="max-w-[1540px] lg:w-[80%] md:w-[80%] sm:w-[80%] px-5 ">
        <section className="text-center mb-10">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E4ECE6] text-primary mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-book-open text-[#0D6549] h-7 w-7"
              aria-hidden="true"
            >
              <path d="M12 7v14"></path>
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            The Holy Qur'an
          </h1>
          <p className="mt-2 text-md max-w-xl font-light text-gray-600 mx-auto">
            Read all 114 surahs in Arabic with English translation. Customize
            fonts and search verses.
          </p>

          <div className="mt-6 max-w-md mx-auto">
            <input
              className="flex h-9 w-full rounded-lg border-[1px] border-[#E4ECE6]  focus:ring-[0.5px] outline-0 focus:ring-[#79b3a0] bg-transparent  px-3 py-1 text-sm shadow-sm "
              placeholder="Filter surahs by name or number..."
              type="text"
            />
          </div>
        </section>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {qurans.map((quran, index) => (
            <a
              href="/surah/1"
              className="group flex items-center gap-4 rounded-2xl bg-white border-[0.5px]  border-[#E4ECE6] p-4 hover:border-[#0d65498b] hover:shadow-sm transition"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E6EFEC] text-primary font-semibold rotate-45">
                <span className="-rotate-45 text-sm">{quran.id}</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold truncate group-hover:text-[#0D6549] transition">
                    {quran.transliteration}
                  </p>
                  <p className="font-amiri text-xl text-primary">
                    {quran.name}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  {quran.translation} · {quran.total_verses} ayahs ·{" "}
                  {quran.type}
                </p>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
