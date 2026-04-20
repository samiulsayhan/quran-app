"use client";

import qurans from "@/data/quran.json"

import { useParams } from "next/navigation";

export default function AyahCard() {
    const params = useParams();

    const surah = qurans[Number(params.slug) - 1];
    const nextSurah = Number(params.slug) + 1;
    const prevSurah = Number(params.slug) - 1;

    return (
        <div className="w-[55%] flex flex-col items-center">
            {/* top section of details surah pages */}
            <div className="flex w-full items-center justify-between mb-6">
                <a href="/" className="inline-flex items-center gap-2 text-sm text-[#0D6549] hover:text-[#0d65498a]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left h-4 w-4" aria-hidden="true">
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path>
                    </svg>
                    All Surahs
                </a>
                <div className="flex gap-2">
                    <a href={`/surah/${prevSurah}`} className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left h-3.5 w-3.5" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                        Prev
                    </a>
                    <a href={`/surah/${nextSurah}`} className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-white">Next
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right h-3.5 w-3.5" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>

            {/* mid section of details surah pages */}
            <div className="text-center w-full bg-white mb-8 rounded-2xl border-[0.5px] border-[#0d654947] p-6">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Surah {qurans[Number(params.slug) - 1].id}
                </p>
                <h1 className="text-3xl font-bold mt-1">{qurans[Number(params.slug) - 1].transliteration}</h1>
                <p className="text-muted-foreground italic">{qurans[Number(params.slug) - 1].translation}</p>
                <p className="mt-3 text-[26px] text-[#0D6549] font-amiri">{qurans[Number(params.slug) - 1].name}</p>

                <p className="text-xs text-muted-foreground mt-2">{qurans[Number(params.slug) - 1].type} · {qurans[Number(params.slug) - 1].total_verses} ayahs</p>
            </div>

            {/* dynamic section of showing ayah list */}
            <div className="w-full flex flex-col gap-5">
                {surah.verses.map((ayah, index) => (
                    <div className="rounded-xl p-5 border-[0.5px] border-[#0d654947]">
                        <div className="flex items-center justify-between mb-4">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E6EFEC] text-[#0D6549] text-sm font-medium">
                                {ayah.id}
                            </span>
                        </div>
                        <p className="text-right text-[22px] leading-loose text-foreground font-amiri">
                            {ayah.text}
                        </p>
                        <p className="mt-4 text-[13px] text-[#262c2ab0] leading-relaxed" >{ayah.translation}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}