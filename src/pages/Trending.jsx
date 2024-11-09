import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../context/CoinContext";
import TrendingShimmer from "../components/TrendingShimmer";

const Trending = () => {
  const [trendingCoin, setTrendingCoin] = useState([]);
  const { loading, setLoading } = useContext(CoinContext);

  const getTrendingCoin = async () => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": import.meta.env.VITE_APP_KEY_ONE,
      },
    };

    fetch("https://api.coingecko.com/api/v3/search/trending", options)
      .then((res) => res.json())
      .then((res) => {
        setTrendingCoin(res.coins);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getTrendingCoin();
  }, []);

  return loading ? (
    <TrendingShimmer />
  ) : (
    <>
      <h1 className="text-center font-black text-4xl mt-10 font-poppins text-[#e9e9e9]">
        Trending
      </h1>
      <div className="p-10 flex flex-wrap items-center justify-center gap-10">
        {Object.values(trendingCoin).map((item, index) => {
          return (
            <div
              key={index}
              className="w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-[#e9e9e9] flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]"
            >
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
              <p
                style={{
                  WebkitTextStroke: "1px gray",
                  WebkitTextFillColor: "transparent",
                }}
                className="text-5xl font-bold self-end"
              >
                #{item.item.market_cap_rank}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Trending;
