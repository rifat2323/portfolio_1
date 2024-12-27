import React from 'react'

import EmblaCarousel from '../common/HeroCaro'
import Image1 from '../../../../public/pro/1.png'
import Image2 from '../../../../public/pro/2.png'
import Image3 from '../../../../public/pro/3.png'
import Image4 from '../../../../public/pro/4.png'
import { TravelPackage } from '@/helper/productType'
import TravelCard from '../common/TravelCard'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

const HeroSections = () => {
    const travelPackages: TravelPackage[] = [
        {
          id: "swiss-alps",
          title: "Swiss Alps",
          rating: 4.7,
          duration: {
            days: 3,
            nights: 4
          },
          details: {
            flights: 2,
            hotels: 1,
            transfers: 2,
            activities: 4
          },
          features: [
            "Tour combo with return airport transfer",
            "City Tour",
            "Curious Corner"
          ],
          pricing: {
            original: 88952,
            discounted: 88952
          },
          image: Image1// You'll need to replace with actual image path
        },
        {
          id: "hallstatt",
          title: "Hallstatt",
          rating: 4.9,
          duration: {
            days: 3,
            nights: 4
          },
          details: {
            flights: 2,
            hotels: 1,
            transfers: 2,
            activities: 4
          },
          features: [
            "Tour combo with return airport transfer",
            "City Tour",
            "Curious Corner"
          ],
          pricing: {
            original: 88952,
            discounted: 88952
          },
          image: Image2// You'll need to replace with actual image path
        },
        {
          id: "faroe-island",
          title: "Faroe Island",
          rating: 4.5,
          duration: {
            days: 3,
            nights: 4
          },
          details: {
            flights: 2,
            hotels: 1,
            transfers: 2,
            activities: 4
          },
          features: [
            "Tour combo with return airport transfer",
            "City Tour",
            "Curious Corner"
          ],
          pricing: {
            original: 88952,
            discounted: 88952
          },
          image: Image3// You'll need to replace with actual image path
        },
        {
          id: "innsbruck",
          title: "Innsbruck",
          rating: 4.5, // Rating not visible in image but using same format
          duration: {
            days: 3,
            nights: 4
          },
          details: {
            flights: 2,
            hotels: 1,
            transfers: 2, // Partially visible in image but following the pattern
            activities: 4  // Partially visible in image but following the pattern
          },
          features: [
            "Tour combo with return airport transfer",
            "City Tour",
            "Curious Corner"
          ],
          pricing: {
            original: 88952,
            discounted: 88952
          },
          image: Image4 // You'll need to replace with actual image path
        },
        {
            id: "faroe-island",
            title: "Faroe Island",
            rating: 4.5,
            duration: {
              days: 3,
              nights: 4
            },
            details: {
              flights: 2,
              hotels: 1,
              transfers: 2,
              activities: 4
            },
            features: [
              "Tour combo with return airport transfer",
              "City Tour",
              "Curious Corner"
            ],
            pricing: {
              original: 88952,
              discounted: 88952
            },
            image: Image3// You'll need to replace with actual image path
          },
          {
            id: "faroe-island",
            title: "Faroe Island",
            rating: 4.5,
            duration: {
              days: 3,
              nights: 4
            },
            details: {
              flights: 2,
              hotels: 1,
              transfers: 2,
              activities: 4
            },
            features: [
              "Tour combo with return airport transfer",
              "City Tour",
              "Curious Corner"
            ],
            pricing: {
              original: 88952,
              discounted: 88952
            },
            image: Image3// You'll need to replace with actual image path
          },
          {
            id: "faroe-island",
            title: "Faroe Island",
            rating: 4.5,
            duration: {
              days: 3,
              nights: 4
            },
            details: {
              flights: 2,
              hotels: 1,
              transfers: 2,
              activities: 4
            },
            features: [
              "Tour combo with return airport transfer",
              "City Tour",
              "Curious Corner"
            ],
            pricing: {
              original: 88952,
              discounted: 88952
            },
            image: Image3// You'll need to replace with actual image path
          },
      ];
  return (
    <section className=' w-full flex flex-col mt-4 '>
        <div className=' flex flex-col justify-center items-start gap-4 '>
            <h1 className=' text-white container mx-auto text-3xl  md:text-4xl font-bold'>Popular beach Destinations</h1>
            <div className=' w-full container ml-auto mt-4'>
            <EmblaCarousel product={travelPackages}/>

            </div>
           

        </div>
        <div className=' w-full mx-auto mt-10'>
        <h1 className=' container mx-auto text-3xl  md:text-4xl font-bold'>Recently viewed</h1>
          <div className=' container ml-auto w-full  flex flex-row flex-wrap gap-3 mt-6 '>
            <div className=' flex justify-center items-center gap-3'>

          
          {
            travelPackages.slice(0,2).map((item,index) => (
                <TravelCard className=' flex-grow' key={index} packages={item}  />

            ))
          }
            </div>
             <Card className="w-full  overflow-hidden rounded-3xl relative  lg:w-[350px]">
      <div className="absolute inset-0">
        <Image
          src="/cover.png"
          alt="Mountain landscape with blue gradient"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-blue-900/50" />
      
      <div className="relative z-10 p-6 text-white">
        <h2 className="text-xl md:text-3xl font-bold mb-6">
          Summer Bonanza!
        </h2>
        <ul className="space-y-4">
          <li className="text-sm md:text-lg font-light">
            Enjoy confortable transfers in shared coaches
          </li>
          <li className="text-sm md:text-lg font-light">
            Choose from 5 flights per week
          </li>
          <li className="text-sm md:text-lg font-light">
            Get a free Rapid Antigen Test at selected hotels
          </li>
        </ul>
      </div>
    </Card>
          </div>
        </div>

        <div className=' flex flex-col justify-center items-start gap-4 mt-10 '>
            <h1 className='  container mx-auto text-3xl  md:text-4xl font-bold'>All Inclusive Packages!</h1>
            <div className=' w-full container ml-auto mt-4'>
            <EmblaCarousel product={travelPackages}/>

            </div>
           

        </div>
        <div className=' flex flex-col justify-center items-start gap-4    mt-10'>
            <h1 className='  container mx-auto text-3xl  md:text-4xl font-bold'>Honeymoon Freebies Special</h1>
            <div className=' w-full container ml-auto mt-4'>
            <EmblaCarousel product={travelPackages}/>

            </div>
           

        </div>

        
    </section>
  )
}

export default HeroSections