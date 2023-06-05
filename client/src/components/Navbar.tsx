const Navbar = () => {
  return (
    <>
      <div>
        <header className="bg-customBackground">
          <nav className="flex justify-around pt-5 items-center">
            <div className="flex">
              <div className="mr-2">
                <img src="./Navbar/Logo.svg" alt="logo" />
              </div>

              <p className="text-xl font-semibold font-inter">LIMARGE</p>
            </div>
            <div className="">
              <ul className="font-inter text-customBlue flex items-center gap-[80px]">
                <li>Home</li>
                <li>Services</li>
                <li>Stories</li>
                <li>About Us</li>
                <li>Company</li>
              </ul>
            </div>
            <div className="font-inter text-customBlue">
              <button className="p-2 border-customOrange border-2 rounded-lg">Contact us</button>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
