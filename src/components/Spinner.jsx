const Spinner = () => {
  return (
    <>
      <div className="overflow-hidden relative font-poppins text-[#e9e9e9]">
        <section className="px-5">
          <div
            id="coin-name"
            className=" flex flex-col items-center justify-center gap-5 mt-20 mb-12 mx-auto "
          >
            <div className="w-[100px] h-[100px] rounded-full bg-slate-300 animate-pulse" ></div>
            <div className="font-bold text-4xl rounded-full bg-slate-300 animate-pulse w-44 h-8"></div>
          </div>

          <div id="Chart" className="max-w-[600px] h-[250px] m-auto rounded-md bg-slate-300 animate-pulse"></div>

          <div
            id="coin-info"
            className="max-w-[600px] my-[50px] mx-auto flex flex-col"
          >
            <div className="flex justify-between py-[10px] px-0 border-b-[1px] border-[#e9e9e9]">
              <section className="font-semibold">Crypto Market Rank (#)</section>
              <section className="font-normal w-20 h-5 rounded-full animate-pulse bg-slate-300"></section>
            </div>
            <div className="flex justify-between py-[10px] px-0 border-b-[1px] border-[#e9e9e9]">
              <section className="font-semibold">Current Price</section>
              <section className="font-normal w-20 h-5 rounded-full animate-pulse bg-slate-300"></section>
            </div>
            <div className="flex justify-between py-[10px] px-0 border-b-[1px] border-[#e9e9e9]">
              <section className="font-semibold">Market Cap</section>
              <section className="font-normal w-20 h-5 rounded-full animate-pulse bg-slate-300"></section>
            </div>
            <div className="flex justify-between py-[10px] px-0 border-b-[1px] border-[#e9e9e9]">
              <section className="font-semibold">24h High</section>
              <section className="font-normal w-20 h-5 rounded-full animate-pulse bg-slate-300"></section>
            </div>
            <div className="flex justify-between py-[10px] px-0 border-b-[1px] border-[#e9e9e9]">
              <section className="font-semibold">24h Low</section>
              <section className="font-normal w-20 h-5 rounded-full animate-pulse bg-slate-300"></section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Spinner;
