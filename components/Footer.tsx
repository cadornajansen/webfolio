import { LightningIcon, GithubIcon, DiscordIcon } from "./icons/free-svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between">
      <span className="inline-flex items-center gap-1">
        Made with <LightningIcon /> by{" "}
        <Image
          src="https://avatars.githubusercontent.com/u/119676423?v=4"
          alt="jansen"
          height="500"
          width="500"
          className="w-6 h-6 inline rounded-full mx-1 hover:-translate-y-1 duration-150 ease-in-out"
        />
        <span className="hover:-translate-y-1 duration-150 ease-in-out">
          Jansen
        </span>
      </span>
      <span className="inline-flex items-center gap-4 opacity-90">
        <GithubIcon />
        <DiscordIcon />
      </span>
    </footer>
  );
}
