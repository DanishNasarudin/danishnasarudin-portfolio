import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import TransitionLink from "@/lib/TransitionLink";
import profile from "@/public/profile.jpg";
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import CopyButton from "./CopyButton";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="sticky w-full flex justify-between top-0 pt-10 z-[20] bg-gradient-to-b from-black to-transparent to-100% px-4 md:px-10 ">
      <Button
        variant={"ghost"}
        asChild
        className="mobilehover:hover:bg-transparent bg-transparent mobilehover:hover:text-zinc-400"
      >
        <TransitionLink
          href={"/"}
          className="!text-[32px] font-medium underline underline-offset-4"
        >
          DN
        </TransitionLink>
      </Button>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant={"ghost"}
            className="mobilehover:hover:bg-transparent bg-transparent mobilehover:hover:text-zinc-500 text-zinc-400"
          >
            Reach Out
          </Button>
        </SheetTrigger>
        <SheetContent
          className="top-0 z-[100] flex w-full
              flex-col border-b-[1px] border-[#323232] bg-background/70 transition-all 
    before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:backdrop-blur-md before:content-['']"
        >
          <div className="mt-16 flex flex-col gap-8 items-center">
            <Avatar className="w-40 h-40">
              <AvatarImage src={profile.src} />
              <AvatarFallback>DN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2 items-center">
              <h2 className="font-bold">Danish Nasarudin</h2>
              <p className="text-center w-[70%]">
                Full-Stack Web Developer, Creative Director, Digital Marketing
                Lead.
              </p>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <CopyButton />
              <Link
                href={"https://www.linkedin.com/in/danishnasarudin/"}
                target="_blank"
              >
                <Button variant={"outline"}>
                  <LinkedinIcon className="w-4 mr-2" /> LinkedIn
                </Button>
              </Link>
              <Link
                href={"https://www.youtube.com/@DanishNasarudin"}
                target="_blank"
              >
                <Button variant={"outline"}>
                  <YoutubeIcon className="w-4 mr-2" /> Youtube
                </Button>
              </Link>
              <Link
                href={"https://www.instagram.com/danishnasarudin/"}
                target="_blank"
              >
                <Button variant={"outline"}>
                  <InstagramIcon className="w-4 mr-2" /> Instagram
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
