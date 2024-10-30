import logo from "../assets/ethereum.png";
import arrow from "../assets/chevron.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CoinContext } from "../context/CoinContext";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

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
  return (
    <>
      <nav className="w-full flex flex-row items-center justify-between px-3 sm:px-4 md:px-6 lg:px-10 py-4 font-poppins">
        {/* Logo-Section 1*/}
        <NavLink to={'/'} className="flex flex-row items-center">
          <img className="h-5 md:h-7 lg:h-10 mr-2" src={logo} alt="logo" />
          <h1 className="text-[#a7a5dd] font-black text-base sm:text-lg md:text-xl lg:text-2xl ">CryptoTrackr</h1>
        </NavLink>

        {/* Menu Link - Section 2 */}
        <section className="hidden md:block">
          <ul className="flex flex-row md:gap-x-5 lg:gap-x-10 text-[#e9e9e9] text-base items-center">
            <NavLink to="/" className="cursor-pointer hover:text-[#a7a5dd] transition-all">
              Home
            </NavLink>
            <li className="cursor-pointer hover:text-[#a7a5dd] transition-all">Features</li>
            <li className="cursor-pointer hover:text-[#a7a5dd] transition-all">Pricing</li>
            <li className="cursor-pointer hover:text-[#a7a5dd] transition-all">Blogs</li>
          </ul>
        </section>

        {/* Buttons - Section 3 */}
        <section className="text-[10px] sm:text-xs md:text-sm lg:text-base flex flex-row items-center font-medium gap-x-1 sm:gap-x-3">
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
            <h1 className="text-[#000421] text-xs md:text-sm lg:text-base font-medium">Sign up</h1>
            <img className="h-2 md:h-3 lg:h-5" src={arrow} alt="arrow" />
          </button>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
