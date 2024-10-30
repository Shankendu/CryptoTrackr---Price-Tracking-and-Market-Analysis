

const Footer = () => {
    let year = new Date().getFullYear()
  return (
    <div className='text-center pb-3 w-full flex flex-col items-center text-[#e9e9e9]'>
        <div className='w-[70%] h-[1px] bg-gradient-to-r from-transparent via-[#e9e9e9] to-transparent'></div>
      <p className='mt-3 text-xs sm:text-sm md:text-base'>© {year} CryptoTrackr. All rights reserved.</p>
    </div>
  )
}

export default Footer
