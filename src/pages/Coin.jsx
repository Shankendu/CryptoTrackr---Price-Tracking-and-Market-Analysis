import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../context/CoinContext";
import Spinner from "../components/Spinner";
import LineChart from "../components/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency, open } = useContext(CoinContext);

  const getCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": import.meta.env.VITE_APP_KEY_ONE,
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err));
  };

  const getHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-DezjHvLbRZkuYbonLU1uSzAp",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then((res) => res.json())
      .then((res) => setHistoricalData(res))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getCoinData();
    getHistoricalData();
  }, [currency]);

  if (coinData && historicalData && !open) {
    return (
      <div className="overflow-hidden relative font-poppins text-[#e9e9e9]">
        <section className="px-5">
          <div id="coin-name" className=" flex flex-col items-center justify-center gap-5 mt-20 mb-12 mx-auto ">
            <img className="max-w-[100px]" src={coinData.image.large} alt={coinData.id} />
            <h1 className="font-bold text-4xl">
              {coinData.name} ({coinData.symbol.toUpperCase()})
            </h1>
          </div>

          <div id="Chart" className="max-w-[800px] h-[250px] m-auto">
            <LineChart historicalData={historicalData} />
          </div>

          <div id="coin-info" className="max-w-[800px] my-[50px] mx-auto flex flex-col">
            <ul className="flex justify-between py-[10px] px-0 border-b-[1px] border-[#e9e9e9]">
              <li className="font-semibold">Crypto Market Rank (#)</li>
              <li className="font-normal">{coinData.market_cap_rank}</li>
            </ul>
            <ul className="flex justify-between py-[10px] px-0 border-b-[1px] border-[#e9e9e9]">
              <li className="font-semibold">Current Price</li>
              <li className="font-normal">
                {currency.symbol}
                {coinData.market_data.current_price[
                  currency.name
                ].toLocaleString()}
              </li>
            </ul>
            <ul className="flex justify-between py-[10px] px-0 border-b-[1px] border-[#e9e9e9]">
              <li className="font-semibold">Market Cap</li>
              <li className="font-normal">
                {currency.symbol}
                {coinData.market_data.market_cap[
                  currency.name
                ].toLocaleString()}
              </li>
            </ul>
            <ul className="flex justify-between py-[10px] px-0 border-b-[1px] border-[#e9e9e9]">
              <li className="font-semibold">24h High</li>
              <li className="font-normal">
                {currency.symbol}
                {coinData.market_data.high_24h[currency.name].toLocaleString()}
              </li>
            </ul>
            <ul className="flex justify-between py-[10px] px-0 border-b-[1px] border-[#e9e9e9]">
              <li className="font-semibold">24h Low</li>
              <li className="font-normal">
                {currency.symbol}
                {coinData.market_data.low_24h[currency.name].toLocaleString()}
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default Coin;
