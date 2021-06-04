import React from 'react'
import { Link } from 'gatsby'
import SEO from '~/components/seo'
// import CollectionGrid from '~/components/CollectionGrid'
import ProductGrid from '~/components/ProductGrid'
const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <CollectionGrid /> */}
    <ProductGrid />
    <Link to="/page-2/">Go to page 2</Link>
  </>
)
export default IndexPage