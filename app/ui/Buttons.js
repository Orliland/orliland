import Image from "next/image";

import DownloadIcon from "@/public/download.svg";

export function ButtonBorder() {
  return (
    <div className="sunset2-border ">
      <div className="bg-transparent rounded-3xl ">
        <a
          href="#"
          className="flex items-center gap-2 text-base font-medium leading-4 button--border rounded-3xl px-6 py-2 "
        >
          <span>CV</span>

          <Image
            alt="download cv icon"
            src={DownloadIcon}
            className="w-6 h-6"
          />
        </a>
      </div>
    </div>
  );
}
