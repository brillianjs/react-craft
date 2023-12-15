import React from "react";
import Image from "next/image";
import { Icon, Select, IconButton } from "@chakra-ui/react";
import Dot from "@/assets/dot.svg";
import { Text } from "@chakra-ui/react";
import { Nunito } from "next/font/google";
import IndFlag from "@/assets/IDFlag.svg";

const inter = Nunito({ subsets: ["latin"] });

function Footer() {
  return (
    <footer
      className={`bg-indigo-950 text-white w-full flex flex-col max-sm:flex-col px-16 py-10 max-lg:p-10 ${inter.className} h-auto max-sm:px-3 max-sm:py-6 space-y-8 max-sm:space-y-6 p-5 max-md:p-10 max-md:flex-row justify-between items-center`}
    >
      <div className="w-full h-auto flex flex-row max-sm:flex-col justify-between ">
        <div className="w-1/2 max-sm:w-full h-auto max-w-xs container text-center md:text-left md:space-y-0 md:mr-10">
          <span className="font-bold text-xl">Zen Calm Space</span>
          <Text
            fontSize={{ lg: "md", base: "md", md: "xs", sm: "small" }}
            className="py-5"
          >
            "Calm Zen Space adalah platform online yang didedikasikan untuk
            memupuk kesadaran dan ketenangan, menawarkan pelacak suasana hati
            yang canggih untuk membantu pengguna menavigasi kesejahteraan
            emosional anda dan menemukan saat-saat kedamaian dalam kehidupan
            sehari-hari."
          </Text>
        </div>
        <div className="w-1/2 max-sm:w-full flex flex-row items-start justify-between space-x-2 mt-5 md:mt-0">
          <span className="space-y-3">
            <span className="font-bold">Layanan</span>
            <ul className="text-sm space-y-2">
              <li className="hover:underline hover:cursor-pointer">Kursus</li>
              <li className="hover:underline hover:cursor-pointer">
                Jurnal Harian
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Musik Meditasi
              </li>
            </ul>
          </span>
          <span className="space-y-3">
            <span className="font-bold">Tautan Singkat</span>
            <ul className="text-sm space-y-2">
              <li className="hover:underline hover:cursor-pointer">FAQ</li>
              <li className="hover:underline hover:cursor-pointer">
                Tentang Kami
              </li>
              <li className="hover:underline hover:cursor-pointer">Kontak</li>
            </ul>
          </span>
          <span className="w-[30%] max-sm:w-[10%] flex flex-row space-x-3 max-sm:space-x-1">
            <Image src={IndFlag} alt="flag image" width={30} height={30} />
            <span className="max-sm:hidden">
              <Select
                className="max-sm:"
                borderStyle="none"
                focusBorderColor="false"
                color="white"
                background="transparent"
              >
                <option value="option1" className="text-black">
                  Indonesia
                </option>
                <option value="option2" className="text-black">
                  English
                </option>
              </Select>
            </span>
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-5 ">
        <span className="max-lg:text-base max-sm:text-sm">
          Copyright@ 2023 HIMATIFOR TEAM.
        </span>
        <div className="flex flex-row space-x-2 mt-2 md:mt-0">
          <p className="text-xs md:text-sm hover:underline hover:cursor-pointer">
            Syarat dan Ketentuan
          </p>
          <Image src={Dot} alt="dot image" width={5} height={5} />
          <p className="text-xs md:text-sm hover:underline hover:cursor-pointer">
            Kebijakan Privasi
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
