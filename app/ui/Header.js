import Image from "next/image";
import { ButtonBorder } from "./Buttons";
import ThreadsIcon from "@/public/threads.svg";
import LinkedinIcon from "@/public/linkedin.svg";

export default function Header() {
  return (
    <header className="container mx-auto max-w-[700px] pt-8">
      <nav className="p-4 rounded-xl bg-white/20 flex justify-between items-center">
        <span className="text-xl font-bold hover:cursor-pointer hover:text-slate-500 ">
          Orliland
        </span>
        <ul className="flex items-center gap-6 p-0.5">
          <li>
            <ButtonBorder />
          </li>
          <li>
            <a href="https://www.linkedin.com/in/orliland" target="__blank">
              <Image
                src={LinkedinIcon}
                alt="Orliland LinkedIn link"
                className="w-5 h-5 hover:cursor-pointer hover:opacity-50 "
              />
            </a>
          </li>
          <li>
            <a href="https://threads.net/Orliland" target="__blank">
              <Image
                src={ThreadsIcon}
                alt="Orliland LinkedIn link"
                className="w-5 h-5 hover:cursor-pointer hover:opacity-50"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
