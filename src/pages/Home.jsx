import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../context/CoinContext";

const Home = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setDisplayCoin(allCoins);
  }, [allCoins]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let filterData = displayCoin.filter((item) => {
      return item.name.toLowerCase().includes(inputValue.toLowerCase());
    });

    if (inputValue == "") {
      setDisplayCoin(allCoins.slice(0, 10));
    } else {
      setDisplayCoin(filterData);
      setInputValue("")
    }
  };
  return (
    <>
      <div className="w-full flex flex-col pb-5 lg:pb-[80px] mt-5 lg:mt-[80px] mx-auto items-center justify-center gap-y-[20px] lg:gap-y-[30px] text-center font-poppins px-3 sm:px-4 md:px-6 lg:px-10 text-[#e9e9e9]">
        <h1 className="font-black text-[26px] sm:text-5xl md:text-5xl lg:text-5xl text-[#e9e9e9]">
          Largest <br />
          Crypto{" "}
          <span className=" text-transparent bg-gradient-to-br from-[#c55cf6] from-[30%] via-[#85025d] to-[#c55cf6] to-[80%] bg-clip-text ">
            Marketplace
          </span>
        </h1>
        <p className="text-xs sm:text-base md:text-base lg:text-base w-[80%] sm:w-[80%] md:w-[50%] lg:w-[50%] leading-6 text-[#e9e9e9cb]">
          Welcome to the world&apos;s largest cryptocurrency marketplace. Sign
          up to explore more about cryptos.
        </p>
        <form
          onSubmit={handleSearch}
          className="p-1 w-[80%] sm:w-[80%] md:w-[50%] lg:w-[50%] bg-[#e9e9e9] rounded-md flex justify-between items-center text-xl gap-x-3"
        >
          <input
            className="text-base w-full pl-3 border-none outline-none bg-[#e9e9e9] text-black placeholder:text-black/55 flex-1"
            type="text"
            placeholder="Search crypto"
            onChange={handleChange}
            value={inputValue}
            list="coinlist"
          />
          <datalist id="coinlist">
                {allCoins.map((item, index)=>{
                    return(<option key={index} value={item.name}/>)
                })}
          </datalist>

          <button
            className="border-none px-[30px] py-[5px] text-base bg-[#54083d] hover:bg-[#85025d] transition-all rounded-md cursor-pointer"
            type="submit"
          >
            Search
          </button>
        </form>
        <section className=" w-full sm:w-[90%] md:w-[85%] lg:w-[60%] m-auto rounded-2xl sm:text-xs lg:text-sm md:text-sm bg-gradient-to-tl from-[#000421] from-[5%] via-[#110527] via-[40%] to-[#340732] ">
          <div className="px-[20px] py-[15px] text-[10px] sm:text-sm lg:text-sm md:text-sm flex flex-row items-center justify-between w-full border-b-[1px] border-[#e9e9e971]">
            <p className="text-left basis-[10%]">#</p>
            <p className="basis-[45%] md:basis-[30%] text-left">Coins</p>
            <p className="basis-[20%] md:basis-[20%] text-left">Price</p>
            <p className="basis-[25%] md:basis-[20%] text-center">
              24H Change (%)
            </p>
            <p className="basis-[20%] text-right hidden md:block">Market Cap</p>
          </div>
          {displayCoin.slice(0,10).map((item, index) => {
            return (
              <div
                key={index}
                className="px-[20px] py-[15px] text-[10px] sm:text-sm lg:text-sm md:text-sm flex flex-row items-center justify-between w-full last:border-none border-b-[1px] border-[#e9e9e921]"
              >
                <p className="text-left basis-[10%]">{item.market_cap_rank}</p>

                <div className="basis-[45%] md:basis-[30%] flex items-center justify-start flex-row gap-[5px] sm:gap-3">
                  <img className="h-5" src={item.image} alt={item.name} />
                  <p className=" text-left w-[60%]">
                    {item.name + " - " + item.symbol}
                  </p>
                </div>

                <p className="basis-[20%] md:basis-[20%] text-left">
                  {currency.symbol}
                  {item.current_price.toLocaleString()}
                </p>
                <p
                  className={`basis-[25%] md:basis-[20%] text-center ${
                    item.market_cap_change_percentage_24h > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {item.market_cap_change_percentage_24h.toFixed(2)}
                </p>
                <p className="basis-[20%] text-right hidden md:block">
                  {currency.symbol}
                  {item.market_cap.toLocaleString()}
                </p>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Home;
