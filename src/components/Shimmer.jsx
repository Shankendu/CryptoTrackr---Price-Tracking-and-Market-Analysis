const Shimmer = () => {
  return (
    <>
      <div className="w-full flex flex-col pb-5 lg:pb-[80px] pt-5 lg:pt-[80px] mx-auto items-center justify-center gap-y-[20px] lg:gap-y-[30px] text-center font-poppins px-3 sm:px-4 md:px-6 lg:px-10 text-[#e9e9e9] relative overflow-x-hidden">
        <h1 className="font-black text-[34px] sm:text-5xl md:text-5xl lg:text-5xl text-[#e9e9e9] z-10">
          Largest <br />
          Crypto{" "}
          <span className=" text-transparent bg-gradient-to-br from-[#c55cf6] from-[30%] via-[#85025d] to-[#c55cf6] to-[80%] bg-clip-text ">
            Marketplace
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-base lg:text-base w-[80%] sm:w-[80%] md:w-[50%] lg:w-[50%] leading-6 text-[#e9e9e9cb] z-20">
          Welcome to the world&apos;s largest cryptocurrency marketplace. Sign
          up to explore more about cryptos.
        </p>
        <form

          className="p-1 w-[80%] sm:w-[80%] md:w-[50%] lg:w-[50%] bg-[#e9e9e9] rounded-md flex justify-between items-center text-xl gap-x-3 z-10"
        >
          <input
            className="text-base w-full pl-3 border-none outline-none bg-[#e9e9e9] text-black placeholder:text-black/55 flex-1"
            type="text"
            placeholder="Search crypto"
          />
          <button
            className="border-none px-[15px] sm:px-[30px] py-[5px] text-sm sm:text-base bg-[#54083d] hover:bg-[#85025d] transition-all rounded-md cursor-pointer"
            type="submit"
          >
            Search
          </button>
        </form>
        <section className=" w-full sm:w-[90%] md:w-[85%] lg:w-[60%] m-auto rounded-2xl sm:text-xs lg:text-sm md:text-sm bg-gradient-to-tl from-[#00042182] from-[5%] via-[#11052785] via-[40%] to-[#3407328a] backdrop-blur-lg backdrop-filter bg-opacity-5 z-10 border-[1px] border-[#e9e9e952]">
          <div className="px-[20px] py-[15px] text-[10px] sm:text-sm lg:text-sm md:text-sm flex flex-row items-center justify-between w-full border-b-[1px] border-[#e9e9e971]">
            <div className="text-left basis-[10%]">#</div>
            <div className="basis-[45%] md:basis-[30%] text-left">Coins</div>
            <div className="basis-[20%] md:basis-[20%] text-left">Price</div>
            <div className="basis-[25%] md:basis-[20%] text-center">
              24H Change (%)
            </div>
            <div className="basis-[20%] text-right hidden md:block">
              Market Cap
            </div>
          </div>
          {Array(10)
            .fill("")
            .map((e,index) => {
              return (
                <div
                  key={index}
                  className="px-[20px] py-[15px] text-[10px] sm:text-sm lg:text-sm md:text-sm flex flex-row items-center justify-between w-full last:border-none border-b-[1px] border-[#e9e9e921]"
                >
                  <div className="basis-[10%]">
                    <div className="text-left h-2 w-2 bg-slate-300 rounded-sm animate-pulse"></div>
                  </div>
                  <div className="basis-[45%] md:basis-[30%] flex items-center justify-start flex-row gap-[5px] sm:gap-3">
                    <div className="h-5 w-5 rounded-full bg-slate-300 animate-pulse"></div>
                    <div className=" text-left h-2 w-[60%] rounded-full bg-slate-300 animate-pulse"></div>
                  </div>
                  <div className="basis-[20%] md:basis-[20%] text-left">
                    <div className="w-[80%] h-2 bg-slate-300 rounded-full animate-pulse"></div>
                  </div>
                  <div className="basis-[25%] md:basis-[20%] text-center">
                    <div className="w-[100%] h-2 bg-slate-300 rounded-full animate-pulse"></div>
                  </div>
                  <div className="basis-[20%] text-right hidden md:block translate-x-8">
                    <div className="w-[80%] h-2 bg-slate-300 rounded-full animate-pulse"></div>
                  </div>
                </div>
              );
            })}
        </section>
      </div>
    </>
  );
};

export default Shimmer;
