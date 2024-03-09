import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

// component
import LeftContainer from "./LeftContainer";
import Logo from "./Logo";
import MobileResponsive from "./MobileResponsive";


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
                      <a href="#" className="hover:text-black">
                        {title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <MobileResponsive clicked={clicked} setClicked={setClicked} list={list}/>
          <LeftContainer />
        </div>
      </header>
    </>
  );
};

export default Header;
