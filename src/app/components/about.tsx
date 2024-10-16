import React from "react";
import Link from "next/link"
import Image from "next/image"

const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400]"
              alt="hero"
              src= {require("../../../public/cv.png")}
              width= {300}
              height= {500}

            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
              <br className="hidden lg:inline-block" />
            </h1><p className="mb-5 leading-relaxed">
              <p className ='bg-black text-white p-2 m-10'>
              Phone No: 0092312-1281814
              <br />
              </p>
              Email: ahmadsarfrazfreelancer@gmail.com
            </p>
            <p className="mb-5 leading-relaxed">
              Mahar Ahmad Sarfraz holds a bachelor's degree from BZU Multan and
              completed his Faculty of Arts from the Board of Intermediate and
              Secondary Education Multan. He also obtained his matriculation
              from the same board.
            </p>
            <div className="flex justify-center">
              <Link href='../../public/cv.png'>
              <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                View CV
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
