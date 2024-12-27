import React from 'react';

import useEmblaCarousel from 'embla-carousel-react';
 import TravelCard from './TravelCard';
import { TravelPackage } from '@/helper/productType';



const EmblaCarousel = ({product}:{product:TravelPackage[]}) => {

  const [emblaRef, ] = useEmblaCarousel({ align: 'end', dragFree: true });

  return (
    <div className="w-full max-w-full ">
      <div 
        className="overflow-hidden py-3" 
        ref={emblaRef}
      >
        <div className="flex touch-pan-y flex-row flex-nowrap gap-3 bg-transparent">
          {product.map((item,index) => (
           <TravelCard key={index} packages={item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;