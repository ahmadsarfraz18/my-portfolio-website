'use client'

import React from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Link from 'next/link';



const Hero = () => {
  return (
    <div>
      {" "}
      <section className="text-gray-600 body-font bg-fixed bg-gray-100">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am a
              <br className="hidden lg:inline-block" />
              <Typewriter
  options={{
    strings: ['Web Developer', 'Content Writter', 'SEO' , 'Guest Blogger' , 'Data Analyst'],
    autoStart: true,
    loop: true,
  }}
/>

            </h1>
            <div className="w-100px h-2px bg-orange-400"></div>
            <p className="mb-8 leading-relaxed">
              Welcome to My Portfolio! I am Mahar Ahmad Sarfraz, a passionate
              and dedicated web developer with a focus on building efficient,
              user-friendly websites. With experience in Next.js, Tailwind CSS,
              and ShadCN UI, I aim to create responsive and visually appealing
              designs that bring ideas to life. My portfolio showcases various
              projects that highlight my skills in modern web development
              technologies, including component-based architecture, dynamic
              event handling, and responsive design. Explore my work to see how
              I can help bring your vision to the digital world.
            </p>
            <div className="flex justify-center">
              <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Contact
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto w-[15rem]"
              alt="hero"
              width={"500"}
              height={"500"}
              src={require("../../../public/photos/photo.png")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
