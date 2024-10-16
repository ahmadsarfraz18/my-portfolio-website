import React from "react";
import Link from "next/link"
import Image from "next/image"

const Project = () => {
  return (
    <div id='projects'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Projects */}

            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require('../../../public/resume/form.png')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">
                    Hackathon Dynamic Resume Builder:
                  </h2>
                  <h1 className="title-font text-lg font-medium text-blue-500 mb-3">
                    Dynamic Resume Buider.
                  </h1>
                  <p className="leading-relaxed">
                    The Dynamic Resume Builder Hackathon project involves
                    creating a tool for users to generate and customize resumes
                    in real-time. It will have a responsive, user-friendly
                    interface, allowing users to input and format their details
                    easily, using technologies like Next.js, Tailwind CSS.
                  </p>
                  <Link target="_blank" href={"../../../public/resume/cv.png"}>
                  <p className="leading-relaxed text-blue-500 hover:underline">View Project..</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
