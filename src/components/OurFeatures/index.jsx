import React from "react";
import Image from "next/image";
import Mind from "@/assets/MindfulTracker.svg";
import Mood from "@/assets/MoodTracker.svg";
import Journal from "@/assets/MindfulJournal.svg";

export default function OurFeatures() {
  return (
    <div className="w-full h-auto flex flex-col bg-[#f8f9fa] px-4 lg:px-16 my-20">
      <span className="w-full flex flex-col lg:flex-row p-4 space-y-4 lg:space-x-10 bg-white">
        <span className="w-full lg:w-[40%] flex p-4 lg:p-10 text-4xl leading-normal font-bold bg-white">
          Fitur-fitur Kami yang Bisa Kamu Dapatkan
        </span>
        <span className="w-full lg:w-[60%] text-gray-500 flex justify-center items-center px-4 lg:px-32 font-lg font-semibold">
          Situs web ini memiliki fitur-fitur yang berkaitan dengan Zen, seperti
          Zen Score, Mindful Tracker, Mood Tracker, dan Mindful Journal.
          Fitur-fitur ini dapat membantu Anda mencapai ketenangan, relaksasi,
          dan kesadaran dengan cara yang efektif dan inspiratif
        </span>
      </span>
      <div className="w-full h-auto lg:h-[530px] flex flex-col lg:flex-row space-y-6 lg:space-x-10 px-4 lg:px-10 py-6">
        <FeatureCard
          image={Mind}
          title="Mindful Tracker"
          description="Lacak aktivitas mindfulness dan lihat pengaruhnya terhadap kesehatan mental Anda"
        />
        <FeatureCard
          image={Mood}
          title="Mood Tracker"
          description=" Melacak suasana hati Anda dari waktu ke waktu dan mendapatkan wawasan tentang kesejahteraan emosional Anda"
        />
        <FeatureCard
          image={Journal}
          title="Mindful Journal"
          description="Membuat jurnal kesadaran untuk mencatat pikiran, perasaan, dan refleksi"
        />
      </div>
    </div>
  );
}

// Helper component for feature cards
const FeatureCard = ({ image, title, description }) => (
  <div className="w-full lg:w-[30%] flex flex-col space-y-6 p-4 bg-white rounded-[30px] shadow-xl">
    <span className="h-[70%]">
      <Image src={image} alt={image} />
    </span>
    <span className="h-[30%] space-y-2">
      <p className="font-bold text-xl">{title}</p>
      <p className="text-gray-500">{description}</p>
    </span>
  </div>
);
