import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LandingBar from "@/components/LandingBar";
import BlogLanding from "@/components/BlogLanding";
import OurFeatures from "@/components/OurFeatures";
import QuotesLanding from "@/components/QuotesLanding";
import FriendStory from "@/components/FriendStory";
import Footer from "@/components/footer";
import HeroLandingImage from "@/assets/HeroLandingImage.svg";
import TurnR from "@/assets/turnRight.svg";
import UnderLine from "@/assets/under-line.svg";

export default function LandingPage() {
  const router = useRouter();
  return (
    <div className="w-full h-auto flex  flex-col bg-[#f8f9fa] overflow-hidden">
      <LandingBar />
      <div className="w-full flex flex-col lg:flex-row px-5 lg:px-20 pb-5 pt-16 lg:pt-28 space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="flex pt-10 flex-col space-y-10 w-full lg:w-1/2 justify-center items-start lg:p-10">
          <span className="text-3xl lg:text-5xl font-bold">
            Tempat buat kamu yang pengen tenang dan damai
          </span>
          <Image src={UnderLine} alt="underline" />
          <span className="text-base lg:text-lg font-semibold">
            Kamu lagi stres, bosen, atau galau? Atau kamu pengen lebih mindful
            dan aware sama diri sendiri? Yuk, coba Calm Zen Space! dan rasakan
            manfaatnya!
          </span>
          <span
            className="flex flex-row space-x-3 py-2 px-4 bg-teal-500 text-white rounded-full hover:scale-105 hover:cursor-pointer hover:shadow-md transition-all  duration-200 ease-in-out"
            onClick={() => router.push("/")}
          >
            <p>Mulai aja dulu</p>
            <Image alt="image" src={TurnR} />
          </span>
        </div>
        <div className="flex flex-col space-y-4 w-full lg:w-1/2 p-4 lg:p-16">
          <Image src={HeroLandingImage} alt="hero image" />
        </div>
      </div>

      <OurFeatures />
      <QuotesLanding />
      <BlogLanding />
      <FriendStory />
      <Footer />
    </div>
  );
}
