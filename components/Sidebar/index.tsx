"use client";

import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "../ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import Link from "next/link";

const Sidebar = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    {
      name: "Dashboard",
      href: "/",
      disabled: false,
      current: false,
      icon: MdOutlineDashboard,
    },
    {
      name: "Users",
      href: "/users",
      disabled: false,
      current: false,
      icon: LuUsers2,
    },
    {
      name: "Blogs",
      href: "/blogs",
      disabled: false,
      current: false,
      icon: TfiWrite,
    },
  ];

  return (
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-50 dark:bg-black px-6">
          <div className="flex h-16 shrink-0 items-center">
            <p className="text-2xl font-bold tracking-tighter text-black dark:text-white flex items-center">
              Next Admin
            </p>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => router.push(item.href)}
                        className={cn(
                          item.current
                            ? "bg-gray-200 dark:bg-secondary text-secondary-foreground font-semibold"
                            : "text-muted-foreground hover:text-foreground hover:bg-gray-200 hover:dark:bg-muted",
                          "group flex gap-x-3 items-center rounded-md p-2 text-sm leading-6 w-full disabled:hover:bg-transparent disabled:text-muted-foreground disabled:cursor-default"
                        )}
                        disabled={item.disabled}
                      >
                        <item.icon
                          className="h-5 w-5 shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="-mx-2 mt-auto mb-4">
                {/* if user is on trial show banner,
                 * if user is pro show nothing,
                 * if user is free and showProBanner is true show pro banner
                 */}
                <div className="flex justify-between items-center space-x-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex w-full justify-between items-center group rounded-md gap-x-3 p-2 text-sm font-semibold leading-6 text-foreground hover:bg-gray-200 hover:dark:bg-secondary">
                      <span>User</span>
                      <IoIosArrowUp />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <Link href="/profile">
                        <DropdownMenuItem className="flex items-center cursor-pointer">
                          <FaRegUser />

                          <span className="ml-2">Profile</span>
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem className="flex items-center cursor-pointer">
                        <CiLogout />
                        <span className="ml-2">Logout</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <ThemeToggle />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="lg:pl-72">
        {/* Navbar */}
        <div className="sticky top-0 z-40 mb-1 flex h-14 shrink-0 items-center gap-x-4 border-b border-gray-50/90 bg-gray-50 dark:border-black/10 dark:bg-black/95 px-4 sm:gap-x-6 sm:px-6 lg:px-8 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-muted-foreground lg:hidden"
            // onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon
              className="h-6 w-6"
              aria-hidden="true"
              onClick={() => setIsOpen(true)}
            />
          </button>

          <div className="flex flex-1 gap-x-4 self-stretch items-center lg:gap-x-6 justify-end">
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              {/* Profile dropdown */}
              <div className="flex justify-between items-center space-x-2">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex w-full justify-between items-center group rounded-md gap-x-3 p-2 text-sm font-semibold leading-6 text-foreground hover:bg-gray-200 hover:dark:bg-secondary">
                    <span>User</span>
                    <IoIosArrowDown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-42">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href="/profile">
                      <DropdownMenuItem className="flex items-center cursor-pointer">
                        <FaRegUser />

                        <span className="ml-2">Profile</span>
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem className="flex items-center cursor-pointer">
                      <CiLogout />
                      <span className="ml-2">Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Sheet
        open={isOpen}
        onOpenChange={() => {
          if (isOpen) {
            setIsOpen(false);
          }
        }}
      >
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="py-8">Navigate</SheetTitle>
            <SheetDescription className="pt-14">
              <ul>
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <button
                          onClick={() => {
                            router.push(item.href);
                            setIsOpen(false);
                          }}
                          className={cn(
                            item.current
                              ? "bg-gray-200 dark:bg-secondary text-secondary-foreground font-semibold"
                              : "text-muted-foreground hover:text-foreground hover:bg-gray-200 hover:dark:bg-muted",
                            "group flex gap-x-3 items-center rounded-md p-2 text-sm leading-6 w-full disabled:hover:bg-transparent disabled:text-muted-foreground disabled:cursor-default"
                          )}
                          disabled={item.disabled}
                        >
                          <item.icon
                            className="h-5 w-5 shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
