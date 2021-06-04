import React, { useContext } from 'react'
import Slider from "react-slick";
import '../SlickSlider/slick.css';
import { useStaticQuery, graphql, Link } from 'gatsby'
import StoreContext from '~/context/StoreContext'
import {
  Product,
  Title,
  PriceTag,
  Description,
  SectionTitle,
  SectionBlock
} from './styles'
import { Img } from '~/utils/styles'
const ProductGrid = () => {
  const { store: { checkout } } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(sort: {fields: [createdAt], order: DESC}, limit: 10,filter: {tags: {eq: "new arrivals"}}) {
          edges {
            node {
              id
              title
              description
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
  const getPrice = price => Intl.NumberFormat(undefined, {
    currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(price ? price : 0))
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
    };
  return (
    <SectionBlock>
      <SectionTitle>New Arrivals</SectionTitle>
      <Slider {...settings}>
          {allShopifyProduct.edges
            ? allShopifyProduct.edges.map(({ node: { id, handle, title, description, images: [firstImage], variants: [firstVariant] } }) => (
              <div>
                <Product key={id} >
                <Link to={`/product/${handle}/`}>
                  {firstImage && firstImage.localFile &&
                    (<Img
                      fluid={firstImage.localFile.childImageSharp.fluid}
                      alt={handle}
                    />)}
                </Link>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <PriceTag>{getPrice(firstVariant.price)}</PriceTag>
              </Product>
              </div>
            ))
            : <p>No Products found!</p>}
        </Slider>
    </SectionBlock>
  )
}
export default ProductGrid