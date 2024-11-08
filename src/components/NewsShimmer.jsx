const NewsShimmer = () => {
  return (
    <>
      <div className="py-12 ">
        <marquee
          className="text-4xl font-black font-poppins mb-5"
          direction="right"
        >
          Top Headlines
        </marquee>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array(8).fill('').map((e,i)=>{
                return(
                    <div key={i} className="bg-white rounded-lg shadow-lg p-8 h-[500px] w-[350px]">
              <div className="relative overflow-hidden">
                <div className="object-cover w-[100%] h-[200px] bg-gray-300 animate-pulse"></div>
              </div>
              <div>
                <div className=" bg-gray-900 mt-2 w-full h-5 rounded-full animate-pulse"></div>
                <div className=" bg-gray-900 mt-2 w-full h-5 rounded-full animate-pulse"></div>
                <div className=" bg-gray-900 mt-2 w-[70%] h-5 rounded-full animate-pulse"></div>
              </div>
              <div className="bg-gray-500 w-full h-2 rounded-full mt-4 animate-pulse"></div>
              <div className="bg-gray-500 w-full h-2 rounded-full mt-2 animate-pulse"></div>
              <div className="bg-gray-500 w-full h-2 rounded-full mt-2 animate-pulse"></div>
              <div className="bg-gray-500 w-full h-2 rounded-full mt-2 animate-pulse"></div>
              <div className="bg-gray-500 w-full h-2 rounded-full mt-2 animate-pulse"></div>
              <div className="bg-gray-500 w-[70%] h-2 rounded-full mt-2 animate-pulse"></div>
              <p className="bg-gray-900/50 mt-5 w-[60%] h-3 rounded-full animate-pulse"></p>
            </div>
                )
            })}
          </div>
        </div>

        <div className="flex w-full items-center justify-center mt-10 font-poppins">
          <button className="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-[#e9e9e9] px-8 py-2 text-[#340732]">
            <span className="relative z-10 font-bold">Read More</span>
            <span className="absolute inset-0 overflow-hidden rounded-md">
              <span className="absolute left-0 aspect-square w-full translate-x-full rounded-full bg-[#a7a5dd] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsShimmer;
