import React from 'react'
import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import NewArrivalsGrid from '~/components/NewArrivalsGrid'
import OurFavorite from '~/components/OurFavorite'
const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ProductGrid />
    <NewArrivalsGrid />
    <OurFavorite />
  </>
)
export default IndexPage