import React from "react";
import Card from "./Card";

import { SlWallet } from "react-icons/sl";
import { CiBank, CiMedicalCase } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { GrTag } from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa";

const Hero = () => {
  const cards = [
    { title: "Education", icon: <FaGraduationCap />, key: 1 },
    { title: "Financial Services", icon: <SlWallet />, key: 2 },
    { title: "Government", icon: <CiBank />, key: 3 },
    { title: "Healthcare", icon: <CiMedicalCase />, key: 4 },
    { title: "Manufacturing", icon: <BsBoxSeam />, key: 5 },
    { title: "Retail", icon: <GrTag />, key: 6 },
  ];
  return (
    <div className=" ">
      <main className="flex sm:flex sm:justify-center sm:items-center sm:flex-col p-10">
        <section className="w-1/2 h-4/5 flex flex-col justify-center items-start p-12 sm:p-0">
          <h2 className="text-7xl sm:text-5xl">
            One platform to <span className="text-zoom-blue">create</span>
          </h2>
          <p>
            Bring teams together, reimagine workspaces, engage new audiences,
            and delight your customers — all on the Zoom platform you know and
            love.
          </p>
          <div className="flex gap-3 mt-6 ">
            <button className="bg-zoom-blue text-white px-6 py-3 rounded-3xl hover:text-zoom-blue hover:bg-slate-200">
              Plans& Pricing
            </button>
            <button className="bg-zoom-blue text-white px-6 py-3 rounded-3xl hover:text-zoom-blue hover:bg-slate-200">
              Sign Up, It's Free {">"}
            </button>
          </div>
        </section>
        <section className="flex-grow relative sm:hidden">
          <img
            src="/gallery-view.png"
            alt=""
            className="object-scale-down h-64 w-96 absolute top-0 right-0  "
          />
          <img
            src="/laptop-webinar-scaled.jpg"
            alt=""
            className="object-scale-down h-64 w-96 absolute bottom-0 left-0 "
          />
        </section>
        <section className="hidden sm:block">
          <img src="/gallery-view.png" alt="" className=" sm:w-full " />
          <img src="/laptop-webinar-scaled.jpg" alt="" className="sm:w-full " />
        </section>
      </main>
      <section className="bg-darkZoom-blue h-80 flex text-white sm:flex-col sm:h-full sm:justify-center sm:items-center">
        <img
          src="/zm-product-wheel.png"
          alt=""
          className="relative z-10 -my-14  sm:my-0 sm:w-2/4 ml-8"
        />
        <div className="flex justify-center items-start flex-col p-8 text-[#75a4ff]">
          <h2 className="text-5xl p-3">Make work less work</h2>
          <p className="p-3">
            Securely connect and collaborate so you can work better together.
            Simple to manage and delightful to use, Zoom powers the modern
            workforce.
          </p>

          <a
            href="https://explore.zoom.us/en/collaboration-tools/"
            target="_blank"
            className="p-3 underline hover:text-[#1437ff]"
          >
            Discover the Possibilities
          </a>
        </div>
      </section>

      <section className="flex mt-28 w-[70%] mb-20 ">
        <section className="text-gray-600 ">
          <h2 className="text-5xl p-7">
            Powering organizations across industries and geographies
          </h2>
          <p className="p-7 text-xl">
            Zoom helps consolidate communications, connect people, and
            collaborate better together in the boardroom, classroom, operating
            room, and everywhere in between.
          </p>
          <a
            href="https://explore.zoom.us/en/industry/"
            target="_blank"
            className="py-3 px-5 bg-[#00E0DB] rounded-3xl ml-5 text-gray-800 hover:bg-[#8af3f1] hover:text-black"
          >
            Explore Industry Solutions
          </a>
        </section>
        <section className=" flex flex-wrap  flex-col h-80 w-2/3 gap-4 sm:hidden">
          {cards.map((card) => {
            return <Card key={card.key} title={card.title} icon={card.icon} />;
          })}
        </section>
      </section>
      <section className="  flex-wrap  flex-col h-80 w-2/3 gap-4 sm:block sm:p-8 hidden ">
        {cards.map((card) => {
          return <Card key={card.key} title={card.title} icon={card.icon} />;
        })}
      </section>
    </div>
  );
};

export default Hero;
