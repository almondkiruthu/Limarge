// const Navbar = () => {
//   return (
//     <>
//       <div>
//         <header className="bg-customBackground">
//           <nav className="flex justify-around py-5 items-center">
//             <div className="flex">
//               <div className="mr-2">
//                 <img src="./Navbar/Logo.svg" alt="logo" />
//               </div>

import { useState } from "react";

//               <p className="text-xl font-semibold font-inter">LIMARGE</p>
//             </div>
//             <div className="absolute top-[-90px]  lg:relative lg:top-0">
//               <ul className="font-inter text-customBlue flex items-center gap-[80px]">
//                 <li>Home</li>
//                 <li>Services</li>
//                 <li>Stories</li>
//                 <li>About Us</li>
//                 <li>Company</li>
//               </ul>
//             </div>
//             <div className="font-inter text-customBlue">
//               <button className="p-2 border-customOrange border-2 rounded-lg">Contact us</button>
//             </div>
//           </nav>
//         </header>
//       </div>
//     </>
//   );
// };

// export default Navbar;


// Compare this snippet from client\src\components\Navbar.tsx:


const Navbar = () => {
 const [navbarOpen, setNavbarOpen] = useState(false);

 const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src="./Navbar/Logo.svg" alt="logo" />
            <span>
              <p className="text-xl font-semibold font-inter pt-1 pl-1">
                LIMARGE
              </p>
            </span>
          </a>
          <div className="flex md:order-2">
            <button className="p-2 border-customOrange border-2 rounded-lg">
              Contact us
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={toggleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={` ${navbarOpen?"absolute ": "relative"}items-center justify-between hidden w-full md:flex md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="font-inter text-customBlue flex items-center gap-[80px]">
              <li>Home</li>
              <li>Services</li>
              <li>Stories</li>
              <li>Company</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
