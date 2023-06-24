// const Navbar = () => {
//   return (
//     <>
//       <div>
//         <header className="bg-customBackground">
//           <nav className="flex justify-around py-5 items-center">
//             <div className="flex">
//               <div className="mr-2">
//                 <img src="./Navbar/Logo.svg" alt="logo" />

//               <p className="text-xl font-semibold font-inter">LIMARGE</p>
//               </div>
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
import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full py-5 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="flex">
              {" "}
              <div className="mr-2">
                <img src="./Navbar/Logo.svg" alt="logo" />
              </div>{" "}
              <p className="text-xl font-semibold font-inter">LIMARGE</p>{" "}
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-customOrange"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-customOrange"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="">
              {" "}
              <ul className="font-inter text-customBlue lg:flex gap-x-[80px] items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li>Home</li>
                <li>Services</li>
                <li>Stories</li>
                <li>About Us</li>
                <li>Company</li>{" "}
              </ul>{" "}
            </div>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <div className="font-inter text-customBlue">
                <button className="p-2 border-customOrange border-2 rounded-lg">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <div className="font-inter text-customBlue">
            <button className="p-2 border-customOrange border-2 rounded-lg">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
