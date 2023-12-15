import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ArrowR from "@/assets/arrow-right.svg";
import Image1 from "@/assets/BlogImage1.png";
import Image2 from "@/assets/BlogImage2.png";
import Image3 from "@/assets/BlogImage3.png";
import Image4 from "@/assets/BlogImage4.png";

export default function BlogLanding() {
  const router = useRouter();
  const ImageData = [
    {
      image: Image1,
      imgSize: "w-full h-[55%] max-sm:h-full",
      descSize: "w-full h-[45%]",
      grid: "col-span-1 row-span-2 max-sm:row-span-1 max-sm:flex-row max-sm:space-x-4 max-sm:col-span-1 flex flex-col space-y-2 w-full h-[400px] max-sm:h-52",
      author: "Olivia Rodrigo",
      date: "1 Jan 2023",
      title: "Berolahraga untuk Meredakan Stres",
      desc: "Dalam artikel ini, kita akan membahas betapa berolahraga dapat membantu mengurangi stres dan meningkatkan suasana hati. ",
    },
    {
      image: Image2,
      imgSize: "w-1/2 h-full",
      descSize: "w-1/2 h-full",
      grid: "col-span-1 max-sm:col-row max-lg:flex flex max-lg:flex-row space-x-4 w-full h-52",
      author: "Olivia Rodrigo",
      date: "1 Jan 2023",
      title: "Berolahraga untuk Meredakan Stres",
      desc: "Dalam artikel ini, kita akan membahas betapa berolahraga dapat membantu mengurangi stres dan meningkatkan suasana hati.",
    },
    {
      image: Image3,
      imgSize: "w-1/2 h-full",
      descSize: "w-1/2 h-full",
      grid: "col-span-1 flex flex-row space-x-4 w-full h-52",
      author: "Olivia Rodrigo",
      date: "1 Jan 2023",
      title: "Berolahraga untuk Meredakan Stres",
      desc: "Dalam artikel ini, kita akan membahas betapa berolahraga dapat membantu mengurangi stres dan meningkatkan suasana hati.",
    },
    {
      image: Image4,
      imgSize: "w-1/2 h-full",
      descSize: "w-1/2 h-full",
      grid: "col-span-2 max-sm:col-span-1 row-span-1 flex flex-row space-x-4 h-full",
      author: "Olivia Rodrigo",
      date: "1 Jan 2023",
      title: "Berolahraga untuk Meredakan Stres",
      desc: "Dalam artikel ini, kita akan membahas betapa berolahraga dapat membantu mengurangi stres dan meningkatkan suasana hati.",
    },
  ];

  return (
    <div className="flex flex-col py-5 px-4 lg:px-20">
      <span className="flex flex-row justify-between py-4 px-4">
        <span className="">
          <p className=" text-2xl font-bold">Blog</p>
        </span>
        <span
          className="flex flex-row items-center justify-center space-x-2 hover:underline hover:cursor-pointer"
          onClick={() => router.push("/blog")}
        >
          <p>View All</p>
          <Image src={ArrowR} alt="Arrow Right" />
        </span>
      </span>
      <div className="w-full h-fit grid grid-rows-3 max-sm:grid-rows-4 grid-cols-2 max-sm:grid-cols-1 gap-0 max-sm:gap-y-2 max-sm:px-1 ">
        {ImageData.map((item, idx) => (
          <div
            className={`${item.grid} rounded-3xl overflow-hidden p-4 max-sm:p-1`}
            key={idx}
          >
            <div className={`${item.imgSize} rounded-3xl overflow-hidden`}>
              <Image
                src={item.image}
                className="w-full h-full object-cover hover:scale-110 transition-all duration-200 ease-in-out"
                alt={item.image}
              />
            </div>
            <div className={`${item.descSize} justify-between flex flex-col`}>
              <span className="py-2 max-sm:py-0 rounded-full text-teal-700 font-bold text-xs max-sm:text-[9px] max-sm:space-x-1 space-x-3 w-fit flex flex-row">
                <p>{item.author}</p>
                <span>|</span>
                <p>{item.date}</p>
              </span>
              <span className="max-lg:text-base max-sm:text-sm w-full flex flex-col items-start justify-center space-y-2">
                <p className="font-semibold max-sm:text-sm">{item.title}</p>
                <p className="font-semibold text-sm max-sm:text-xs">
                  {item.desc}
                </p>
              </span>
              <div className="flex flex-row w-full space-x-3 max-md:hidden max-sm:hidden">
                <span className="px-2 py-1 bg-teal-500/40 text-teal-700 rounded-full text-sm">
                  kategori
                </span>
                <span className="px-2 py-1 bg-red-500/40 text-red-700 rounded-full text-sm">
                  kategori
                </span>
                <span className="px-2 py-1 bg-blue-500/40 text-blue-700 rounded-full text-sm">
                  kategori
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
