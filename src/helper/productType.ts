import { StaticImageData } from "next/image"

export interface TravelPackage {
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