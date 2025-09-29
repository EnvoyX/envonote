import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { DarkModeToggle } from "./DarkModeToggle";
import LogoutButton from "./LogoutButton";
import { getUser } from "@/app/auth/server";
import { SidebarTrigger } from "./ui/sidebar";

async function Header() {
  const user = await getUser();
  return (
    <header
      className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8"
      style={{
        boxShadow: shadow,
      }}
    >
      <SidebarTrigger className="absolute left-1 top-1" />
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

      <div className="flex gap-4">
        {user ? (
          <LogoutButton></LogoutButton>
        ) : (
          <>
            <Button asChild>
              <Link href={"/sign-up"} className="hidden sm:block">
                Sign Up
              </Link>
            </Button>
            <Button asChild variant={"outline"}>
              <Link href={"/login"}>Login</Link>
            </Button>
          </>
        )}
        <DarkModeToggle></DarkModeToggle>
      </div>
    </header>
  );
}

export default Header;
