import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import clsx from "clsx";
import LeftContainer from "./LeftContainer";
import Logo from "./Logo";


const Header = () => {
  const [clicked, setClicked] = useState(false);
  const list = [
    { title: "Collection" },
    { title: "men" },
    { title: "About" },
    { title: "Contact" },
  ];
  return (
    <>
      <header>
        <div className="w-screen border-b-2 flex justify-between p-2 ">
          <div className="flex justify-center items-center space-x-4 lg:p-3 ">
            <GiHamburgerMenu
              id="hamburger"
              onClick={() => {
                setClicked(true);
              }}
              className="text-2xl lg:hidden"
            />

            <Logo />

            <div className="hidden lg:block">
              <ul className="ml-10 flex justify-around space-x-11 font-serif hover:text-black">
                {list.map((elem, i) => {
                  const { title } = elem; //destructed in react //
                  return (
                    <li key={i} className="text-lg text-gray-500">
                      {title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div
            id="mobile-navbar"
            className={clsx(
              "fixed top-0 left-0 w-screen h-full bg-black/20 backdrop-blur-sm -translate-x-full",
              clicked && "translate-x-0"
            )}
          >
            <div className="bg-white w-3/5 h-full p-7 ">
              <RxCross1
                id="Cross-icon"
                onClick={() => {
                  setClicked(false);
                }}
                className="text-2xl mb-5 cursor-pointer "
              />
              <ul className="space-y-4 font-serif">
                {list.map((elem, i) => {
                  const { title } = elem; //destructed in react //
                  return (
                    <li key={i} className="text-lg font-bold">
                      {title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <LeftContainer />
        </div>
      </header>
    </>
  );
};

export default Header;
