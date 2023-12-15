import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import Obama from "@/assets/Barack-Obama.png";
import Arrow from "@/assets/CurvArrow.svg";
import Mind from "@/assets/MindfulTracker.svg";
import Mood from "@/assets/MoodTracker.svg";
import Journal from "@/assets/MindfulJournal.svg";
import styles from "./FrCarousel.module.css";

function FriendStory() {
  return (
    <div className="w-full h-auto flex flex-col bg-[#f8f9fa] px-4 lg:px-16 max-sm:px-4 my-10">
      <span className="w-full flex flex-col lg:flex-row p-4 space-y-4 max-lg:space-x-6  max-sm:space-x-0 bg-white">
        <span className="max-sm:w-full w-[40%] flex p-4 lg:p-10 text-4xl leading-normal font-bold bg-white">
          Cerita Temanmu
        </span>
        <span className="max-sm:w-full w-[60%] flex flex-row  space-x-7 max-sm:space-x-0 items-center px-4 max-sm:px-0  font-lg font-semibold">
          <Image src={Arrow} alt="curvy arrow" className="max-sm:hidden" />
          <span className="px-10 max-sm:px-2 max-sm:text-justify">
            <p>
              Kisah Inspiratif dari Mereka yang Mengatasi Stres dan Depresi
              dengan
              <span className="text-teal-500 font-bold px-1">
                Calm Zen Space
              </span>
            </p>
          </span>
        </span>
      </span>
      <div className="w-full h-auto flex flex-row bg-white justify-between items-end relative z-[6]">
        <div className="w-[430px] h-[300px] max-sm:h-auto flex flex-col justify-between bg-white rounded-[30px] shadow-2xl p-7 max-sm:space-y-3">
          <span className="w-full flex flex-row space-x-4">
            <span className="bg-teal-500 rounded-full flex justify-center items-center p-3">
              <AiOutlineUser size="2em" color="white" />
            </span>
            <span className="w-full flex flex-col">
              <p className="text-lg font-bold">Hendra Wirawan</p>
              <p className="max-sm:text-sm">Pengusaha</p>
            </span>
          </span>
          <span className="text-[15px] max-sm:text-sm">
            "Masa-masa tersulit dalam hidup saya adalah ketika saya kehilangan
            pekerjaan saya akibat perusahaan tempat saya bekerja gulung tikar.
            Saya merasa putus asa dan bingung tentang langkah selanjutnya.
            Namun, saya memutuskan untuk mengambil peluang ini sebagai momen
            untuk merenung dan belajar. Hari ini, saya telah sukses dalam bisnis
            saya dan percaya bahwa kesulitan adalah peluang untuk pertumbuhan."
          </span>
        </div>
        <div className="w-[320px] h-[220px] flex flex-col justify-between bg-white rounded-[30px] shadow-xl p-7 max-sm:hidden">
          <span className="w-full flex flex-row space-x-4">
            <span className="bg-teal-500 rounded-full flex justify-center items-center p-3">
              <AiOutlineUser size="1.5em" color="white" />
            </span>
            <span className="w-full flex flex-col">
              <p className="font-bold">Milna Fellacia</p>
              <p className="text-sm">Mahasiswi</p>
            </span>
          </span>
          <span className="text-[13px]">
            "Saya didiagnosis menderita penyakit serius. Namun, dengan dukungan
            keluarga dan teman-teman, saya berhasil sembuh dan belajar untuk
            menghargai hidup dengan lebih dalam."
          </span>
        </div>
        <div className="w-[320px] h-[220px] flex flex-col justify-between bg-white rounded-[30px] shadow-xl p-7 max-sm:hidden">
          <span className="w-full flex flex-row space-x-4">
            <span className="bg-teal-500 rounded-full flex justify-center items-center p-3">
              <AiOutlineUser size="1.5em" color="white" />
            </span>
            <span className="w-full flex flex-col">
              <p className="font-bold">Sinta Putri Mulia</p>
              <p className="text-sm">Lulusan tahun pertama</p>
            </span>
          </span>
          <span className="text-[13px]">
            "Saya adalah seorang lulusan tahun ini dan mengalami kesulitan dalam
            mendapatkan pekerjaan, tetapi dengan tekad dan ketekunan, tetap
            berusaha menggapai pekerjaan yang saya impikan."
          </span>
        </div>
      </div>
      {/* <span className="flex flex-row space-x-4 absolute right-[20px] top-[50%] z-[5]">
        <span className="w-10 h-10 bg-teal-500 rounded-full"></span>
        <span className="w-10 h-10 bg-teal-500 rounded-full"></span>
      </span> */}
    </div>
  );
}

export default FriendStory;
