import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {
  Grid,
  Product,
  Title,
} from './styles'
import { Img } from '~/utils/styles'
const ProductGrid = () => {
  const { allShopifyProduct } = useStaticQuery(
    graphql`{
      allShopifyProduct(sort: {fields: [createdAt], order: DESC}, limit: 3,filter: {tags: {eq: "homepage"}}) {
        edges {
          node {
            id
            title
            handle
            createdAt
            images {
              id
              originalSrc
              localFile {
                childImageSharp {
                  fluid(maxWidth: 910) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            variants {
              price
            }
          }
        }
      }
    }
    `
  )
  return (
    <Grid>
      {allShopifyProduct.edges
        ? allShopifyProduct.edges.map(({ node: { id, handle, title, images: [firstImage], variants: [firstVariant] } }) => (
          <Product key={id} >
            <Link to={`/product/${handle}/`}>
              {firstImage && firstImage.localFile &&
                (<Img
                  fluid={firstImage.localFile.childImageSharp.fluid}
                  alt={handle}
                />)}
            </Link>
            <Title>{title}</Title>
          </Product>
        ))
        : <p>No Products found!</p>}
    </Grid>
  )
}
export default ProductGrid