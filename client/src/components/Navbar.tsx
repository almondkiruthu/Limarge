import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full py-5 shadow">
      <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl xl:px-28">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <div className="flex">
              {" "}
              <div className="mr-2">
                <img src="./Navbar/Logo.svg" alt="logo" />
              </div>{" "}
              <p className="font-inter text-xl font-semibold">LIMARGE</p>{" "}
            </div>
            <div className="md:hidden">
              <button
                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-customOrange"
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
                    className="h-6 w-6 text-customOrange"
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
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="">
              {" "}
              <ul className="items-center justify-center space-y-8 font-inter text-customBlue md:flex md:space-x-6 md:space-y-0 lg:flex xl:space-x-0 2xl:space-x-[5rem]">
                <li>Home</li>
                <li>Services</li>
                <li>Stories</li>
                <li>About Us</li>
                <li>Company</li>{" "}
              </ul>{" "}
            </div>

            <div className="mt-3 space-y-2 md:inline-block lg:hidden">
              <div className="font-inter text-customBlue">
                <button className="rounded-lg border-2 border-customOrange p-2">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <div className="font-inter text-customBlue">
            <button className="rounded-lg border-2 border-customOrange p-2">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
