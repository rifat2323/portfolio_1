
import TopCategories from '@/components/custom/heroSeacrh/TopCategories';
import Hero from '../../public/image.jpg'
import SearchFilter from '@/components/custom/heroSeacrh/Search';
import MainSections from '@/components/custom/DynamicSections/MainSeactions';

export default function Home() {
  return (
    <div className=" mt-0  min-h-dvh flex  w-full flex-col m-0 p-0">
      <div  style={{
          backgroundImage: `url(${Hero.src})`,
         
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
         
          width: "100%",
          
        
        }} className=" w-full  h-[150dvh] flex flex-col ">
      
      <div
    style={{
      background: `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3) 0%,  /* Transparent to black at the bottom */
        rgba(0, 0, 0, 0) 70%,  /* Transparent above */
        rgba(255, 255, 255, 0) 90%, /* Transparent white at the top */
        rgba(255, 255, 255, 1) 100% /* Solid white at the top */
      )`,
    }}
    className="absolute top-0 left-0 w-full h-[150dvh] pointer-events-none"
  ></div>
        <div className=' w-full flex flex-col relative z-10'>
          <div className=' container mx-auto'>
            <h1 className=' text-5xl  md:text-7xl lg:text-8xl mb-2 md:mb-4 font-bold text-gray-50 mt-24 md:mt-32 '>The whole world <br /> awaits.</h1>
            <SearchFilter/>
            <div className=' container mx-auto mt-1 md:mt-6 flex flex-col gap-6'>
              <h1 className=' text-white text-3xl md:text-5xl font-bold mt-12 '>Top categories</h1>
            <TopCategories/>

            </div>
           
           
          </div>
         

        </div>
       

      </div>
      {/* <MainSections/> */}
      <div className=' w-full flex flex-col'>
           <MainSections/>
            </div>
    </div>
  );
}
