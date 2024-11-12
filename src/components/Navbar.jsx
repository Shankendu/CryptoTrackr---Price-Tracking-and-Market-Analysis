import logo from "../assets/ethereum.png";
import arrow from "../assets/chevron.png";
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CoinContext } from "../context/CoinContext";

const Navbar = () => {
  const { setCurrency, open, setOpen } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      case "gbp": {
        setCurrency({ name: "gbp", symbol: "£" });
        break;
      }
      case "aud": {
        setCurrency({ name: "aud", symbol: "$" });
        break;
      }
      case "jpy": {
        setCurrency({ name: "jpy", symbol: "¥" });
        break;
      }
      case "cny": {
        setCurrency({ name: "cny", symbol: "¥" });
        break;
      }
      case "aed": {
        setCurrency({ name: "aed", symbol: "د.إ" });
        break;
      }

      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  const handleHam = async () => {
    setOpen(!open);
  };

  // useEffect(()=>{
  //   if (open) {
  //     document.body.classList.add('overflow-hidden')
  //   }else{
  //     document.body.classList.remove('overflow-hidden')
  //   }
  //   return ()=> document.body.classList.remove('overflow-hidden')
  // },[open])

  return (
    <>
      <nav className="w-full flex flex-row items-center justify-between px-3 sm:px-4 md:px-6 lg:px-10 py-4 font-poppins relative">
        {/* Logo-Section 1*/}
        <NavLink to={"/"} className="flex flex-row items-center">
          <img className="h-5 md:h-7 lg:h-10 mr-2" src={logo} alt="logo" />
          <h1 className="text-[#a7a5dd] font-black text-lg md:text-xl lg:text-2xl ">
            CryptoTrackr
          </h1>
        </NavLink>

        {/* Hamburger */}
        <div
          onClick={handleHam}
          className={`cursor-pointer z-50 block md:hidden transition-all duration-150 delay-100 ease-in-out ${
            open ? "fixed top-6 right-4" : ""
          } `}
        >
          <div
            className={`w-7 h-[3px] bg-[#e9e9e9] rounded-full mb-1 transition-transform duration-300 delay-75 ${
              open ? "rotate-45 translate-y-[3.5px] " : "rotate-180"
            }`}
          ></div>
          <div
            className={`w-7 h-[3px] bg-[#e9e9e9] rounded-full transition-transform duration-300 delay-75  ${
              open ? "-rotate-45 -translate-y-[3.5px]" : "rotate-180"
            }`}
          ></div>
        </div>

        {/* Menu Link - Section 2 */}
        <section className="hidden md:block">
          <ul className="flex flex-row md:gap-x-5 lg:gap-x-10 text-[#e9e9e9] text-base items-center">
            <NavLink
              to="/"
              className="cursor-pointer hover:text-[#a7a5dd] transition-all [&.active]:text-[#a7a5dd]"
            >
              Home
            </NavLink>
            <NavLink
              to="/features"
              className="cursor-pointer hover:text-[#a7a5dd] transition-all [&.active]:text-[#a7a5dd]"
            >
              Features
            </NavLink>
            <NavLink
              to="/trending"
              className="cursor-pointer hover:text-[#a7a5dd] transition-all [&.active]:text-[#a7a5dd]"
            >
              Trending
            </NavLink>
            <NavLink
              to="/news"
              className="cursor-pointer hover:text-[#a7a5dd] transition-all [&.active]:text-[#a7a5dd]"
            >
              News
            </NavLink>
          </ul>
        </section>

        {/* Buttons - Section 3 */}
        <section className="text-[10px] sm:text-xs md:text-sm lg:text-base md:flex flex-row items-center font-medium gap-x-3 hidden">
          <select
            onChange={currencyHandler}
            className="bg-transparent border-2 border-[#a7a5dd] px-1 py-1.5 md:p-2 rounded-md outline-none text-[#e9e9e9]"
          >
            <option className="bg-[#110527]" value="usd">
              USD
            </option>
            <option className="bg-[#110527]" value="eur">
              EUR
            </option>
            <option className="bg-[#110527]" value="inr">
              INR
            </option>
            <option className="bg-[#110527]" value="gbp">
              GBP
            </option>
            <option className="bg-[#110527]" value="aud">
              AUD
            </option>
            <option className="bg-[#110527]" value="jpy">
              JPY
            </option>
            <option className="bg-[#110527]" value="cny">
              CNY
            </option>
            <option className="bg-[#110527]" value="aed">
              AED
            </option>
          </select>
          <button className="flex flex-row items-center bg-[#e9e9e9] hover:bg-[#a7a5dd] transition-all py-1.5 px-2 sm:px-3 rounded-full cursor-pointer">
            <h1 className="text-[#000421] text-xs md:text-sm lg:text-base font-medium">
              Sign up
            </h1>
            <img className="h-2 md:h-3 lg:h-5" src={arrow} alt="arrow" />
          </button>
        </section>
      </nav>

      {/* Hamburger-MenuLinks */}
      
        <div
          id="Ham-Links"
          className={`${open? "translate-x-0 shadow-2xl shadow-black":"translate-x-[100%]"}  transition-transform duration-[600ms] h-screen w-full fixed top-0 bg-gradient-to-b from-[#000421] via-[#20062c] to-[#340732] z-40 inline-flex flex-col justify-between md:hidden py-20 px-10`}
        >
          <section className="">
            <h1
              className="text-4xl pb-10 font-extrabold text-transparent bg-gradient-to-br from-[#c55cf6] from-[30%] via-[#85025d] to-[#c55cf6] to-[80%] bg-clip-text"
            >
              Navigation
            </h1>
            <ul className="flex flex-col items-start text-[#e9e9e9] text-3xl gap-y-5 ">
              <NavLink
                to="/"
                onClick={() => setOpen(!open)}
                className={` cursor-pointer hover:text-[#a7a5dd] transition-all [&.active]:text-[#a7a5dd]`}
              >
                Home
              </NavLink>
              <NavLink
                to="/features"
                onClick={() => setOpen(!open)}
                className="cursor-pointer transition-all [&.active]:text-[#a7a5dd]"
              >
                Features
              </NavLink>
              <NavLink
                to="/trending"
                onClick={() => setOpen(!open)}
                className="cursor-pointer transition-all [&.active]:text-[#a7a5dd]"
              >
                Trending
              </NavLink>
              <NavLink
                to="/news"
                onClick={() => setOpen(!open)}
                className="cursor-pointer transition-all [&.active]:text-[#a7a5dd]"
              >
                News
              </NavLink>
            </ul>
          </section>

          {/* Buttons - Section 3 */}
          <section className="text-base flex-col items-center font-medium gap-y-3 ">
            <select
              onChange={currencyHandler}
              className="bg-transparent border-2 border-[#a7a5dd] p-2 rounded-md outline-none text-[#e9e9e9] mb-5"
            >
              <option className="bg-[#110527]" value="usd">
                USD
              </option>
              <option className="bg-[#110527]" value="eur">
                EUR
              </option>
              <option className="bg-[#110527]" value="inr">
                INR
              </option>
              <option className="bg-[#110527]" value="gbp">
                GBP
              </option>
              <option className="bg-[#110527]" value="aud">
                AUD
              </option>
              <option className="bg-[#110527]" value="jpy">
                JPY
              </option>
              <option className="bg-[#110527]" value="cny">
                CNY
              </option>
              <option className="bg-[#110527]" value="aed">
                AED
              </option>
            </select>
            <button className="flex flex-row items-center bg-[#e9e9e9] hover:bg-[#a7a5dd] transition-all py-1.5 px-3 rounded-full cursor-pointer">
              <h1 className="text-[#000421] text-base font-medium">Sign up</h1>
              <img className="h-5" src={arrow} alt="arrow" />
            </button>
          </section>
        </div>
     
    </>
  );
};

export default Navbar;
