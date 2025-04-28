import MainHeader from "../../../components/header/MainHeader";
import React from "react";

const Customersupport = () => {
  return (
    <>
      <MainHeader />
      <div>

   
        <nav className="flex flex-col md:flex-row items-center justify-between p-4 bg-white">
          <div className="mb-4 md:mb-0">
            <img src="/logo.png" alt="TechnoHire" className="h-10 md:h-14" />
          </div>
          <div className="flex space-x-4">
            <a href="#!" className="text-purple-600">Post A Job</a>
            <a href="#!" className="text-purple-600 flex items-center">
              <img src="/instagram.png" alt="Instagram" className="h-6" />
            </a>
          </div>
        </nav>

       
        <div className="flex justify-between items-center bg-gray-100 p-4">
          <h1 className="text-gray-700 font-medium">Contact</h1>
          <div className="text-sm text-gray-500">
            <span className="mr-1">Home</span> / <span className="ml-1">Contact</span>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row justify-center items-start p-4 md:p-8 bg-white mt-4">
    
          <div className="w-full md:w-1/2 mb-8 md:mb-0 p-2 md:p-4">
            <h2 className="text-purple-700 mb-4 font-semibold">Who we are</h2>
            <p className="text-xl mb-4 font-extrabold">
              We care about <br />
              <span className="font-extrabold text-purple-700">customer services</span>
            </p>
            <p className="mb-4">
              Want to chat? We’d love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello.
            </p>
            <a
              href="mailto:support@example.com"
              className="inline-block text-white bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded transition duration-200"
            >
              Email Support
            </a>
          </div>

        
          <div className="w-full md:w-1/2 p-2 md:p-4">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <form className="bg-white p-4 md:p-6 rounded shadow-md">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-600 focus:border-purple-600" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-600 focus:border-purple-600" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Subjects</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-600 focus:border-purple-600" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-600 focus:border-purple-600" rows="4"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

      
        <div className="p-4">
          <img src="/Rectangle 24.png" alt="Map" className="w-full h-auto rounded-lg object-cover" />
        </div>

      
        <div className="bg-black py-6 px-4 md:px-8">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex rounded-md shadow-sm w-full md:w-auto">
              <div className="relative flex-grow focus-within:z-10">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-7 2v4m-7-4v4m-7-4v4" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md bg-gray-900 text-gray-300 placeholder-gray-500"
                  placeholder="Email address"
                />
              </div>
              <button
                type="button"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-500 hover:bg-purple-600"
              >
                Subscribe
              </button>
            </div>

            <div className="text-white flex justify-between w-full md:w-auto space-x-6">
              <div>
                <h3 className="font-bold text-lg">1,75,324</h3>
                <p className="text-sm text-gray-300">Live Job</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">97,354</h3>
                <p className="text-sm text-gray-300">Companies</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">38,47,154</h3>
                <p className="text-sm text-gray-300">Candidates</p>
              </div>
            </div>
          </div>
        </div>

     
        <footer className="bg-white py-10 px-4 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="flex flex-col items-start">
              <img src="/logo2.png" alt="TechnoHire Logo" className="h-16 w-auto mb-2" />
            </div>

          
            {[
              { title: "Quick Link", items: ["About", "Contact", "Pricing", "Blog"] },
              { title: "Candidate", items: ["Browse Jobs", "Browse Employers", "Candidate Dashboard", "Saved Jobs"] },
              { title: "Employers", items: ["Post a Job", "Browse Candidates", "Employers Dashboard", "Applications"] },
              { title: "Support", items: ["Faqs", "Privacy Policy", "Terms & Conditions"] },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-800 mb-3">{section.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {section.items.map((item, idx) => (
                    <li key={idx} className={item === "Contact" ? "flex items-center gap-1 text-black font-medium" : ""}>
                      {item === "Contact" ? <><span>➔</span> {item}</> : item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
};

export default Customersupport;
