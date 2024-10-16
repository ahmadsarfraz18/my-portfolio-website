import React from "react";
import Link from "next/link"
import Image from "next/image"
import { FaDownload } from "react-icons/fa6";



const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={require("../../../public/logo/logo.png")}

            alt="portfolio"
            width={200}
            height={200}
            className="w-{50px}"
             />
            <span className="ml-3 text-xl">Mahar's Portfolio</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
             <Link href ={"/"}className="mr-5 hover:text-blue-500">Home</Link>
            <Link href ={"#about"} className="mr-5 hover:text-blue-500">About</Link>
            <Link href ={"#skills"} className="mr-5 hover:text-blue-500">Skills</Link>
            <Link href ={"#projects"} className="mr-5 hover:text-blue-500">Projects</Link>
            <Link href ={"#contact"} className="mr-5 hover:text-blue-500">Contact</Link>
          </nav>
          <a href='../../../public/photos/cv.png'>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Download CV
            <FaDownload className= "text-xl ml-2" />
          </button>
          </a>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
