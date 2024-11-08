import { useEffect, useState } from "react";

const Trending = () => {
  const [trendingCoin, setTrendingCoin] = useState([]);

  const getTrendingCoin = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-DezjHvLbRZkuYbonLU1uSzAp",
      },
    };

    fetch("https://api.coingecko.com/api/v3/search/trending", options)
      .then((res) => res.json())
      .then((res) => setTrendingCoin(res.coins))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getTrendingCoin();
  }, []);

  return (
    <div className="p-10 flex flex-wrap items-center justify-center gap-10">
      {Object.values(trendingCoin).map((item, index) => {
        console.log(item);
        return (
    <div key={index} className="w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-[#e9e9e9] flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
     <img className="size-12" src={item.item.large} alt="" />
      <p className="font-bold text-2xl group-hover:text-white text-black/80">
        {item.item.name}
      </p>
      <p className="text-gray-400 text-sm">
       Price: ${item.item.data.price.toFixed(2)}
      </p>
      <p className="text-gray-400 text-sm">
        Market Cap: {item.item.data.market_cap}
      </p>
      <p className="text-gray-400 text-sm">
        Total Volume: {item.item.data.total_volume}
      </p>
      <p style={{WebkitTextStroke: '1px gray', WebkitTextFillColor: 'transparent'}} className="text-5xl font-bold self-end">
        #{item.item.market_cap_rank}
      </p>
    </div>
        );
      })}
    </div>
  );
};

export default Trending;
