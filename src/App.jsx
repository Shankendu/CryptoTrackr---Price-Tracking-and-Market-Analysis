import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full flex flex-col justify-between min-h-screen bg-gradient-to-b from-[#000421] via-[#20062c] to-[#340732] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:coinId" element={<Coin />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
