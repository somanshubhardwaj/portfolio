"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import Section from "./Section";
import { Model } from "@/3d/Model";
import { BsInstagram, BsGithub, BsTwitterX, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
const Contact = () => {
  return (
    <Section crosses id="contact">
      <div className="container min-h-[80vh]">
        <div className="flex flex-col md:flex-row min-h-[80vh] items-center">
          <div className="w-full lg:w-1/2">
            <div className="">
              <h1 className="text-4xl font-bold">Contact</h1>
              <p className="text-lg mt-2">
                Feel free to reach out to me on any of the following platforms.
              </p>
              <div className="text-4xl flex gap-8 mt-8">
                <Link
                  href="https://www.instagram.com/bhardwaj.somanshu/"
                  target="_blank"
                >
                  <BsInstagram />
                </Link>
                <Link
                  href="https://github.com/somanshubhardwaj"
                  target="_blank"
                >
                  <BsGithub />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/somanshubhardwaj"
                  target="_blank"
                >
                  <BsLinkedin />
                </Link>
                <Link href="https://twitter.com/somanshubha" target="_blank">
                  <BsTwitterX />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[50vh] md:h-[80vh]">
            <Canvas className="h-screen w-full">
              <Suspense fallback={null}>
                <Model />
              </Suspense>
              <Environment preset="dawn" />
            </Canvas>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
