const Navbar = () => {
  return (
    <>
      <header className="container font-inter">
        <nav>
          <ul className="md:flex md:items-center md:py-[1.5rem] md:text-[1rem] lg:py-[1.5rem] lg:text-[1rem] xl:py-[2rem]">
            <li className="md:ml-[0.5rem] md:mr-auto lg:ml-[1rem] 2xl:ml-[0.5rem]">
              <a href="#" className="md:flex md:items-center md:gap-x-[0.2rem]">
                <svg
                  width="29"
                  height="23"
                  viewBox="0 0 29 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.1516 0.568214C11.9185 0.568214 10.1083 2.37848 10.1083 4.61153C10.1083 6.84461 11.9185 8.65485 14.1516 8.65485C16.3848 8.65485 18.1949 6.84461 18.1949 4.61153C18.1949 2.37848 16.3848 0.568214 14.1516 0.568214ZM6.24602 8.43424C10.4549 8.43424 13.8668 11.8462 13.8668 16.055V22.3012H10.0762V16.055C10.0762 15.6067 9.99926 15.1766 9.85777 14.7768L4.28989 20.3447L1.60952 17.6643L6.97897 12.2949C6.74173 12.2489 6.49668 12.2249 6.24602 12.2249H0V8.43424H6.24602ZM22.1516 8.43424C17.9427 8.43424 14.5307 11.8462 14.5307 16.055V22.3012H18.3213V16.055C18.3213 15.704 18.3686 15.3639 18.457 15.0409L24.2814 20.8653L26.9619 18.1848L21.1375 12.3605C21.4604 12.2721 21.8006 12.2249 22.1516 12.2249H28.3975V8.43424H22.1516Z"
                    fill="#FF814C"
                  />
                </svg>
                <p className="md:mt-1 md:text-[1.25rem] md:font-normal md:text-black">
                  LIMARGE
                </p>
              </a>
            </li>
            <div className="flex text-customBlue md:items-center md:gap-x-[1.2rem] lg:gap-x-[2.5rem] xl:gap-x-[4rem] 2xl:gap-x-[5rem]">
              <li>Home</li>
              <li>Services</li>
              <li>Stories</li>
              <li>About us</li>
              <li>Company</li>
            </div>
            <li className="md:ml-auto md:mr-[0.5rem] lg:mr-[1rem] 2xl:mr-[2rem]">
              <button className="rounded-lg border-2 border-customOrange px-[1rem] py-[0.5rem]">
                Contact us
              </button>
            </li>
            <li className="block">
              <button className="h-[2rem] w-[2rem] text-customBlue md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
