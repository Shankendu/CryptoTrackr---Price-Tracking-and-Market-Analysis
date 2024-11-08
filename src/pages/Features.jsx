import price from "../assets/price.png";
import info from "../assets/info.png";
import graph from "../assets/graph.png";
import exchange from "../assets/exchange.png";
import news from "../assets/news.png";
import trending from "../assets/trending.png";

const Features = () => {
  return (
    <>
      <section className=" text-[#e9e9e9]">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">CryptoTrackr: Your Ultimate Cryptocurrency Price Tracker</h2>

      <p className="mt-4 text-gray-300">
      Stay on top of the crypto market with CryptoTrackr! Track live prices, access detailed coin information, view historical data, and keep up with the latest crypto news—all in one place.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <section
        className="block rounded-xl border border-[#6c588a] p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
        <img className="size-10" src={price} alt="price" />

        <h2 className="mt-4 text-xl font-bold text-white">Live Price Tracker</h2>

        <p className="mt-1 text-sm text-gray-300">
        Track real-time prices of your favorite cryptocurrencies, ensuring you&apos;re always up-to-date.
        </p>
      </section>

      <section
        className="block rounded-xl border border-[#6c588a] p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
        <img className="size-10" src={info} alt="info" />

        <h2 className="mt-4 text-xl font-bold text-white">Detailed Coin Information</h2>

        <p className="mt-1 text-sm text-gray-300">
        Explore in-depth data on each coin, including market cap, volume, and historical performance.
        </p>
      </section>

      <section
        className="block rounded-xl border border-[#6c588a] p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
        <img className="size-10" src={graph} alt="graph" />

        <h2 className="mt-4 text-xl font-bold text-white">10-Day Price Graphs</h2>

        <p className="mt-1 text-sm text-gray-300">
        Get a quick overview of market trends with detailed 10-day charts for each cryptocurrency.
        </p>
      </section>

      <section
        className="block rounded-xl border border-[#6c588a]  p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
        <img className="size-10" src={exchange} alt="exchange" />

        <h2 className="mt-4 text-xl font-bold text-white">Currency Conversion Tool</h2>

        <p className="mt-1 text-sm text-gray-300">
        Easily convert between different currencies to compare crypto values with global exchange rates.
        </p>
      </section>

      <section
        className="block rounded-xl border border-[#6c588a]  p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
        <img className="size-10" src={trending} alt="trending" />

        <h2 className="mt-4 text-xl font-bold text-white">Trending Coins</h2>

        <p className="mt-1 text-sm text-gray-300">
        Discover which coins are making waves in the market and gaining popularity.
        </p>
      </section>

      <section
        className="block rounded-xl border border-[#6c588a]  p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      >
        <img className="size-10" src={news} alt="news" />

        <h2 className="mt-4 text-xl font-bold text-white">Crypto News Updates</h2>

        <p className="mt-1 text-sm text-gray-300">
        Stay informed with the latest news on the crypto market, trends, and developments.
        </p>
      </section>
    </div>
  </div>
</section>
    </>
  )
}

export default Features
