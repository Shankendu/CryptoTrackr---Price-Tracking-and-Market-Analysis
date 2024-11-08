

const TrendingShimmer = () => {
  return (
    <>
    <h1 className="text-center font-black text-4xl mt-10 font-poppins text-[#e9e9e9]">Trending</h1>
    <div className="p-10 flex flex-wrap items-center justify-center gap-10">
      {Array(15).fill('').map((item, index) => {
        return (
    <div key={index} className="w-[300px] h-[320px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-[#e9e9e9] flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
     <div className="size-12 bg-black/80 rounded-full animate-pulse"  ></div>
      <div className="w-36 h-10 bg-black rounded-full animate-pulse">
        
      </div>
      <div className="w-36 h-5 bg-gray-400 rounded-full animate-pulse">
     
      </div>
      <div className="w-36 h-5 bg-gray-400 rounded-full animate-pulse">
      
      </div>
      <div className="w-36 h-5 bg-gray-400 rounded-full animate-pulse">
       
      </div>
      <p style={{WebkitTextStroke: '1px gray', WebkitTextFillColor: 'transparent'}} className="text-5xl font-bold self-end">
        #00
      </p>
    </div>
        );
      })}
    </div>
    </>
  )
}

export default TrendingShimmer
