"use client";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const Navbar = () => {
  return (
    <nav className="h-16 z-20 fixed top-0 w-full shadow bg-background">
      <div className="mx-auto flex h-full max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-6 lg:px-8">
        <h1 className="capitalize font-semibold ">fahri alfa rizki</h1>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Contact Us</Button>
            </DialogTrigger>
            <DialogContent className="border-accent/50 text-left bg-background">
              <DialogHeader>
                <DialogTitle>Contact Me</DialogTitle>
                <DialogDescription className="text-left">
                  As an important notice, the information I provide below is for
                  business purposes only. If you would like to connect further,
                  please send a message through my social media while
                  maintaining politeness and clearly introducing yourself,
                  including mentioning your organization, institution, company,
                  or region.
                </DialogDescription>
              </DialogHeader>
              <div className="no-scrollbar text-sm -mx-4 max-h-[50vh] overflow-y-auto px-4">
                <p>Instagram : fahrisarung</p>
                <p>Youtube: FahriSarung</p>
                <p>
                  Telephone: Phone not available. Please send a message (DM) or
                  contact me via Instagram.
                </p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button className="mt-5">Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
