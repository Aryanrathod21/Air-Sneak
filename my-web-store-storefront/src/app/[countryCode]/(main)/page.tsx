import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import Banner from "@modules/home/components/banner"
import Trending from "@modules/home/components/trending"
import FeatureGrid from "@modules/home/components/featuregrid"
import Uptext from "@modules/home/components/uptext"
import Swiper from "@modules/home/components/swiper"
import Slider from "@modules/home/components/swiper"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <div className="">
      {/* <Banner/> */}
      <Hero />
      <div className="">
      <ul className="content-container pb-4 small:pb-6 pt-8 small:pt-16">
        <Uptext title="TRENDING NOW" subtitle="GET TRENDING SHOES NOW!!!" ></Uptext>
      </ul> 
      <ul className="content-container pb-8 small:pb-16 pt-6 small:pt-12">
          <Trending/>
        </ul>
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
        <ul className="content-container pb-4 small:pb-6 pt-8 small:pt-16">
        <Uptext title="COLLECTION" subtitle="FILL UP YOUR COLLECTION NOW!!!" ></Uptext>
      </ul> 
        <ul className="content-container py-12 small:py-24">
          <FeatureGrid/>
        </ul>
        <ul className="content-container pb-4 small:pb-6 pt-8 small:pt-16">
        <Uptext title="REVIEWS" subtitle="OUR SUBS HONEST REVIEWS!!!" ></Uptext>
      </ul>
      <ul className="content-container py-12 small:py-24">
          <Slider/>
        </ul>
        
      </div>
    </div>
  )
}
