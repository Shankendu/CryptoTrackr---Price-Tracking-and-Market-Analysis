/* eslint-disable react/no-unknown-property */
import { useContext, useEffect, useState } from "react";
import ScrollTop from "../components/ScrollTop";
import NewsShimmer from "../components/NewsShimmer";
import { CoinContext } from "../context/CoinContext";

const News = () => {
  const [newsData, setNewsData] = useState({});
  const [newsLimit, setNewsLimit] = useState(8);
  const{loading, setLoading} = useContext(CoinContext)

  const getNews = async () => {
    setLoading(true)
    const options = {
      method: "GET",
      mode: "cors",
      headers: {
        accept: "application/json",
        TI_API_KEY: import.meta.env.VITE_APP_KEY_TWO,
      },
    };

    fetch("https://api.tokeninsight.com/api/v1/news/list", options)
      .then((res) => res.json())
      .then((res) => {setNewsData(res.data.items)
        setLoading(false)
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getNews();
  }, [newsLimit]);

  function getMore() {
    setNewsLimit((prev) => prev + 8);
  }
  return loading? (<NewsShimmer/>) : (
    <div className="py-12 ">
    <h1 className="text-4xl font-black font-poppins mb-5 text-center">Top Headlines</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Object.values(newsData)
            .slice(0, newsLimit)
            .map((item, index) => {
              return (
                <div key={index} className="bg-white shadow-lg p-8 group hover:bg-[#202127] transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      className="object-cover w-full h-full"
                      src={item.image_url}
                      alt="Product"
                    />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <a
                        href={item.source_url}
                        target="_blank"
                        className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold group-hover:bg-gray-300 opacity-0 group-hover:opacity-100"
                      >
                        View Article
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-black/80 group-hover:text-white mt-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-400 text-sm mt-2">
                    {item.content.slice(3, 100) + "..."}
                  </p>
                  <p className="text-gray-900/50 font-medium text-sm pt-5 group-hover:text-gray-600">
                    {new Date(item.timestamp).toLocaleString()}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <ScrollTop className="fixed bottom-14 right-7"/>
      <div  className="flex w-full items-center justify-center mt-10 font-poppins">
        <button onClick={getMore} className="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-[#e9e9e9] px-8 py-2 text-[#340732]">
          <span className="relative z-10 font-bold">Read More</span>
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <span className="absolute left-0 aspect-square w-full translate-x-full rounded-full bg-[#a7a5dd] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
        </button>
        
      </div>
    </div>
  );
};

export default News;
