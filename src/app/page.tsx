import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 max-w-[1540px] lg:w-[80%] md:w-[80%] sm:w-[80%] px-5 bg-[#FDFCF8] font-sans dark:bg-black">
      <header>
        <div>
          <h1 className="text-3xl text-[#0D6549]">AL Quran</h1>
        </div>
        <div></div>
      </header>
      <main className="">
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
              className="lucide lucide-book-open h-7 w-7"
              aria-hidden="true"
            >
              <path d="M12 7v14"></path>
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            The Holy Qur'an
          </h1>
          <p className="mt-2 text-md max-w-xl mx-auto">
            Read all 114 surahs in Arabic with English translation. Customize
            fonts and search verses.
          </p>

          <div className="mt-6 max-w-md mx-auto">
            <input
              className="flex h-9 w-full rounded-md border-[1px] border-[#E4ECE6]  focus:ring-[0.5px] outline-0 focus:ring-[#79b3a0] bg-transparent px-3 py-1 text-base shadow-sm "
              placeholder="Filter surahs by name or number..."
              type="text"
            />
          </div>
        </section>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a
            href="/surah/1"
            className="group flex items-center gap-4 rounded-xl bg-white border-[0.5px]  border-[#E4ECE6] p-4 hover:border-[#0d65498b] hover:shadow-sm transition"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4ECE6] text-primary font-semibold rotate-45">
              <span className="-rotate-45 text-sm">1</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold truncate group-hover:text-[#0D6549] transition">
                  Al-Faatiha
                </p>
                <p className="font-amiri text-xl text-primary">
                  سُورَةُ ٱلْفَاتِحَةِ
                </p>
              </div>
              <p className="text-xs text-muted-foreground truncate">
                The Opening · 7 ayahs · Meccan
              </p>
            </div>
          </a>
          <a
            href="/surah/1"
            className="group flex items-center gap-4 rounded-xl bg-white border-[0.5px]  border-[#E4ECE6] p-4 hover:border-[#0d65498b] hover:shadow-sm transition"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4ECE6] text-primary font-semibold rotate-45">
              <span className="-rotate-45 text-sm">1</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold truncate group-hover:text-[#0D6549] transition">
                  Al-Faatiha
                </p>
                <p className="font-amiri text-xl text-primary" dir="rtl">
                  سُورَةُ ٱلْفَاتِحَةِ
                </p>
              </div>
              <p className="text-xs text-muted-foreground truncate">
                The Opening · 7 ayahs · Meccan
              </p>
            </div>
          </a>
          <a
            href="/surah/1"
            className="group flex items-center gap-4 rounded-xl bg-white border-[0.5px]  border-[#E4ECE6] p-4 hover:border-[#0d65498b] hover:shadow-sm transition"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4ECE6] text-primary font-semibold rotate-45">
              <span className="-rotate-45 text-sm">1</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold truncate group-hover:text-[#0D6549] transition">
                  Al-Faatiha
                </p>
                <p className="font-amiri text-xl text-primary" dir="rtl">
                  سُورَةُ ٱلْفَاتِحَةِ
                </p>
              </div>
              <p className="text-xs text-muted-foreground truncate">
                The Opening · 7 ayahs · Meccan
              </p>
            </div>
          </a>
          <a
            href="/surah/1"
            className="group flex items-center gap-4 rounded-xl bg-white border-[0.5px]  border-[#E4ECE6] p-4 hover:border-[#0d65498b] hover:shadow-sm transition"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4ECE6] text-primary font-semibold rotate-45">
              <span className="-rotate-45 text-sm">1</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold truncate group-hover:text-[#0D6549] transition">
                  Al-Faatiha
                </p>
                <p className="font-amiri text-xl text-primary" dir="rtl">
                  سُورَةُ ٱلْفَاتِحَةِ
                </p>
              </div>
              <p className="text-xs text-muted-foreground truncate">
                The Opening · 7 ayahs · Meccan
              </p>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}
