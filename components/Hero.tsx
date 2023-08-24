import Image from "next/image";
import Link from "next/link";
import {
  ReactIcon,
  TailwindIcon,
  FramerIcon,
  RedirectIcon,
} from "./icons/free-svg";
import NeuButton from "./ui/NeuButton";

export default function Hero() {
  return (
    <section className="flex flex-col space-y-6">
      <div className="flex flex-col justify-center items-center text-center">
        <span className="font-bold text-base sm:text-xl text-indigo-500">
          Added New Animations!
        </span>
        <h1 className="my-5">
          Modern UI Components for
          <br />
          React & TailwindCSS
        </h1>
        <p className="max-w-prose text-lg">
          Beautiful, responsive, animated UI components using <ReactIcon />{" "}
          React, <TailwindIcon /> Tailwind CSS & <FramerIcon /> Framer Motion.
          Copy & paste them into your code easily with few clicks.
        </p>
      </div>
      <Link href="/collections">
        <NeuButton>
          Explore Components
          <svg
            className="ml-1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#fff"
            viewBox="0 0 256 256"
          >
            <path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216ZM80,176a8,8,0,0,0,5.66-2.34L184,75.31V152a8,8,0,0,0,16,0V56a8,8,0,0,0-8-8H96a8,8,0,0,0,0,16h76.69L74.34,162.34A8,8,0,0,0,80,176Z"></path>
          </svg>
        </NeuButton>
      </Link>
    </section>
  );
}
