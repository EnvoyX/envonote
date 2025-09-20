import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header
      className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{
        boxShadow: shadow,
      }}
    >
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src={"/huohuo.png"}
          alt="logo"
          width={60}
          height={60}
          className="rounded-full"
          priority
        ></Image>
        <h1 className="flex flex-col text-2xl font-semibold leading-6">
          ENVO <span>Notes</span>
        </h1>
      </Link>

      <div className="flex gap-4"></div>
    </header>
  );
}

export default Header;
