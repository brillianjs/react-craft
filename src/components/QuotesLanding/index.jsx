import React from "react";
import Image from "next/image";
import Quote from "@/assets/quote.svg";
import styles from "./Scroll.module.css";
import Figure1 from "@/assets/Luang-Por-Chah.png";
import Figure2 from "@/assets/Dale-Carnegie.png";
import Figure3 from "@/assets/Barack-Obama.png";
import Figure4 from "@/assets/Winston-Churchill.png";

export default function QuotesLanding() {
  const ImageData = [
    {
      image: Figure1,
      name: "Luang Por Chah",
      title: "biksu buddhis Thailand",
      quote:
        "“Ketika kita menenangkan pikiran kita, kita membiarkan kebahagiaan masuk”",
    },
    {
      image: Figure2,
      name: "Dale Carnegie",
      title: "Penulis dan pembicara motivasi",
      quote:
        "“Ketika kita berhenti berusaha menjadi sempurna, kita mulai merasa lebih baik.”",
    },
    {
      image: Figure3,
      name: "Barack Obama",
      title: "Mantan presiden Amerika Serikat",
      quote:
        "“Jangan biarkan kegagalan menghentikan Anda. Jadikan kegagalan sebagai guru Anda.”",
    },
    {
      image: Figure4,
      name: "Winston Churchill",
      title: "Politikus Inggris Raya",
      quote:
        "“Keberhasilan adalah kemampuan untuk melewati dan mengatasi dari satu kegagalan ke kegagalan berikutnya tanpa kehilangan semangat.”",
    },
    {
      image: Figure1,
      name: "Luang Por Chah",
      title: "Biksu Buddhis Thailand",
      quote:
        "“Ketika kita menenangkan pikiran kita, kita membiarkan kebahagiaan masuk”",
    },
    {
      image: Figure2,
      name: "Dale Carnegie",
      title: "Penulis dan pembicara motivasi Amerika",
      quote:
        "“Ketika kita berhenti berusaha menjadi sempurna, kita mulai merasa lebih baik.”",
    },
    {
      image: Figure3,
      name: "Barack Obama",
      title: "Mantan presiden Amerika Serikat",
      quote:
        "“Jangan biarkan kegagalan menghentikan Anda. Jadikan kegagalan sebagai guru Anda.”",
    },
    {
      image: Figure4,
      name: "Winston Churchill",
      title: "Politikus Inggris Raya",
      quote:
        "“Keberhasilan adalah kemampuan untuk melewati dan mengatasi dari satu kegagalan ke kegagalan berikutnya tanpa kehilangan semangat.”",
    },
  ];
  return (
    <div
      className={`w-fit max-w-full h-auto overflow-x-auto grid grid-flow-col gap-8 auto-cols-[minmax(6,_1rem)] px-8 py-12 my-10 space-x-4 scrollbar-hide ${styles["scrollbar-hide"]}`}
    >
      {ImageData.map((item, idx) => (
        <div
          key={idx}
          className="w-[460px] h-[250px] max-sm:w-[300px] max-sm:h-[200px] flex flex-row items-start justify-between relative overflow-hidden max-sm:overflow-visible"
        >
          <span className="w-1/2 max-sm:w-[40%] h-full absolute bottom-0 left-0 grayscale hover:scale-110 transition-all">
            <Image
              alt="image"
              src={item.image}
              className="w-full h-full object-cover"
            />
          </span>
          <span className="flex flex-row items-start w-1/2">
            <Image src={Quote} alt="image" className="w-20 max-sm:w-16" />
          </span>
          <span className="flex flex-col items-start justify-start w-1/2 max-sm:w-[60%] space-y-4 max-sm:space-x-1 max-sm:space-y-2 py-3 max-sm:py-0">
            <p className="max-sm:text-sm max-sm:text-left">{item.quote}</p>
            <p className="font-bold">{item.name}</p>
            <p className="text-sm:w-[70%] font-semibold text-gray-500 max-sm:text-xs">
              {item.title}
            </p>
          </span>
        </div>
      ))}
    </div>
  );
}
