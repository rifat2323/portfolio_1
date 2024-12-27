"use client"
import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CableCar, Castle, ChevronLeft, ChevronRight, DoorOpen, House, HousePlug, Mountain, Origami, PawPrint, TreeDeciduous, TreePalm, University, UtilityPole } from "lucide-react";
import { cn } from "@/lib/utils";



const TopCategories = () => {
    const [emblaRef, embla] = useEmblaCarousel({ loop: false, align: "start" });
     const [activeIndex,setActiveIndex] = useState(0)
    
   const ScrollCat =[
    {
        image:<TreeDeciduous size={30} color="white" className=" w-5 h-5 md:w-8 md:h-8" />,
        title:'Beaches'
    },
    {
        image:<TreePalm size={30} color="white" className=" w-5 h-5 md:w-8 md:h-8" />,
        title:'Deserts'
    },
    {
        image:<Mountain  size={30} color="white" className=" w-5 h-5 md:w-8 md:h-8"/>,
        title:'Mountains'
    },
    {
        image:<DoorOpen  size={30} color="white" className=" w-5 h-5 md:w-8 md:h-8"/>,
        title:'Iconic Cities'
    },
    {
        image:<House size={30} color="white" className=" w-5 h-5 md:w-8 md:h-8" />,
        title:'Houseboats'
    },
    {
        image:<HousePlug size={30} color="white" className=" w-5 h-5 md:w-8 md:h-8" />,
        title:'Countyside'
    },
    {
        image:<HousePlug  size={30} color="white" className=" w-5 h-5 md:w-8 md:h-8" />,
        title:'Camping'
    },
    {
        image:<Castle size={30} color="white" className=" w-5 h-5 md:w-8 md:h-8" />,
        title:'Castles'
    },
    {
        image:<CableCar size={30} color="white" className=" w-5 h-5 md:w-8 md:h-8" />,
        title:'Skiing'
    },
    {
        image:<TreePalm size={30} color="white" className=" w-5 h-5 md:w-8 md:h-8" />,
        title:'Tropical'
    },
    {
        image:<University  size={30} color="white" className=" w-5 h-5 md:w-8 md:h-8"/>,
        title:'Beaches'
    },
    {
        image:<PawPrint  size={30} color="white" className=" w-5 h-5 md:w-8 md:h-8" />,
        title:'wild'
    },
    {
        image:<Origami   size={30} color="white" className=" w-5 h-5 md:w-8 md:h-8" />,
        title:'Water-land'
    },
    {
        image:<UtilityPole   size={30} color="white" className=" w-5 h-5 md:w-8 md:h-8" />,
        title:'North-pole'
    },
   ]
   const updateActiveIndex = (direction:number) => {
    setActiveIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) newIndex = ScrollCat.length - 1; // Loop to the last item
      if (newIndex >= ScrollCat.length) newIndex = 0; // Loop to the first item
      return newIndex;
    });
  };
  const scrollPrev = useCallback(() => {
    if (embla) {
      embla.scrollPrev();
      updateActiveIndex(-1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (embla) {
      embla.scrollNext();
      updateActiveIndex(1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [embla]);
  React.useEffect(() => {
    if (activeIndex === 0 && embla) {
      embla.scrollTo(0); // Scroll to the first item
    }
  }, [activeIndex, embla]);
  const handleItemClick = (index: number) => {
    if (embla) {
    
       if(index > activeIndex){
        embla.scrollNext()
       }else{
        embla.scrollPrev()
       }
      setActiveIndex(index)
    }
  };
    return (
      <div className=" mt-3 md:mt-6 relative w-full">
        {/* Buttons */}
        <button
          onClick={scrollPrev}
          className={cn("absolute left-2 top-1/2 bg-gray-400/20 transform -translate-y-1/2 z-10  px-2 py-1 rounded",{
            "hidden": activeIndex === 0
          })}
        >
          <ChevronLeft size={30} color="white" />
        </button>
        <button
          onClick={scrollNext}
          className={cn("absolute right-2 bg-gray-400/20  top-1/2 transform -translate-y-1/2 z-10 px-2 py-1 rounded",{
            "hidden": activeIndex === ScrollCat.length - 1
          })}
        >
         <ChevronRight size={30} color="white" />
        </button>
  
        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex justify-start items-start gap-4 flex-nowrap pl-12">
            {ScrollCat.map((cat,index) => (
              <div
                key={index}
                className={cn(" cursor-pointer group w-28 opacity-50  transition-all flex-shrink-0 flex flex-col justify-center items-center gap-2",{
                    "opacity-100": index === activeIndex
                })}
                onClick={() =>handleItemClick(index)}
              >
               {cat.image}
               <p className=" text-white">{cat.title}</p>
               <span className={cn("w-0 group-hover:w-full transition-all  h-[0.1rem] bg-white rounded-full",{
                "opacity-100 w-full": index === activeIndex
               })}></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default TopCategories