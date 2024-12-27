'use client'

import { Star } from 'lucide-react'
import Image, { StaticImageData } from "next/image"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from '@/lib/utils'

interface TravelPackage {
  id: string
  title: string
  rating: number
  duration: {
    days: number
    nights: number
  }
  details: {
    flights: number
    hotels: number
    transfers: number
    activities: number
  }
  features: string[]
  pricing: {
    original: number
    discounted: number
  }
  image: string | StaticImageData
}



export default function TravelCard({ packages,className}: { packages: TravelPackage,className?:string }) {
  return (
    <Card className={cn("w-full shadow-none flex-shrink-0 h-max max-w-[180px] sm:max-w-[220px] md:max-w-[300px] overflow-hidden  rounded-3xl ",className)}>
      <div className="flex flex-col ">
        <div className=" h-32 sm:h-40 md:h-full md:p-4 p-3 md:w-full aspect-video">
          <Image
            src={packages.image}
            alt={packages.title}
             width={400}
             height={400}
            className=' w-full h-full  rounded-md'
          />
        </div>
        <div className="flex-1">
          <CardHeader className="p-2 sm:p-3 md:p-4 pb-0 md:pb-2">
            <div className="flex items-center justify-between">
              <h2 className="text-sm sm:text-base md:text-xl font-semibold truncate md:overflow-visible">{packages.title}</h2>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current text-yellow-400" />
                <span className="text-xs sm:text-sm">{packages.rating}</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {packages.duration.days}D {packages.duration.nights}N
            </p>
          </CardHeader>
          <CardContent className="p-2 sm:p-3 md:p-4 pt-0">
            <div className="grid grid-cols-4 gap-1 mb-2 sm:mb-3 md:mb-4">
              {[
                { icon: "M4 11H20M4 11L7 19H17L20 11M4 11L8 5H16L20 11", label: "Flights", value: packages.details.flights },
                { icon: "M3 21H21M4 18H20M6 18V13M10 18V13M14 18V13M18 18V13M3 13H21M5 13L7 5H17L19 13", label: "Hotel", value: packages.details.hotels },
                { icon: "M8 5c-1.5 0-3 1-3 3v8h3m8-11c1.5 0 3 1 3 3v8h-3M7 8h10", label: "Transfers", value: packages.details.transfers },
                { icon: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z M14 2 L14 8 L20 8", label: "Activities", value: packages.details.activities },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="p-1 sm:p-2 bg-gray-100 rounded-full mb-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d={item.icon}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[10px] text-xs  whitespace-nowrap">{item.value} <span className=' hidden md:inline'>{item.label}</span> </span>
                </div>
              ))}
            </div>
            <ul className="space-y-1 mb-2 sm:mb-3 md:mb-4">
              {packages.features.map((feature, index) => (
                <li key={index} className="text-xs sm:text-sm text-muted-foreground flex items-start">
                  <span className="mr-1 md:mr-2">•</span>
                  <span className="truncate md:overflow-visible">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
              <span className="text-xs sm:text-sm line-through text-muted-foreground">
                ₹{packages.pricing.original.toLocaleString()}
              </span>
              <span className="text-sm sm:text-base md:text-xl font-bold">
                ₹{packages.pricing.discounted.toLocaleString()}
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Per person</span>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}

