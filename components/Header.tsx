"use client";
import React, { useState } from "react";
import { brainwave } from "@/app/assets/index";
import { navigation } from "@/constants";
import { usePathname } from "next/navigation";
import MenuSvg from "@/app/assets/svg/MenuSvg";
import { HambugerMenu } from "./design/Header";
import Button from "./Button";
import Image from "next/image";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { motion, stagger, Variants } from "framer-motion";
const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleNavigation = () => {
    setOpen(!open);
    if (open) {
      enablePageScroll();
    } else {
      disablePageScroll();
    }
  };
  const handleClick = () => {
    setOpen(false);
    if (open) {
      enablePageScroll();
    }
  };
  const navVariants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };
  return (
    <div
      className={`fixed top-0 z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm w-full left-0 ${
        open ? "bg-n-8" : "bg-n-8/90"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="" className="block w-[12rem] xl:mr-8 ">
          <motion.img
            src={"/icon.png"}
            alt="Brainwave"
            height={45}
            width={45}
            whileHover={{ scale: 1.3 }}
          />
        </a>
        <nav
          className={`${
            open ? "flex" : "hidden"
          }  fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <motion.div
            className="relative z-2 flex flex-col items-center justify-center mx-auto lg:flex-row"
            initial="initial"
            animate="animate"
          >
            {navigation.map((item, index) => (
              <motion.a
                variants={navVariants}
                href={item.url}
                key={index}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1  px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </motion.a>
            ))}
          </motion.div>
          <HambugerMenu />
        </nav>
        <a
          href="https://github.com/somanshubhardwaj"
          className="hidden button mr-8 text-n-1/50 lg:block hover:text-n-1 transition-colors"
        >
          Visit github
        </a>
        <Button
          href="https://github.com/somanshubhardwaj"
          className="hidden lg:flex"
        >
          Download Cv
        </Button>
        <Button
          className="ml-auto lg:hidden"
          px={"px-3"}
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={open} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
