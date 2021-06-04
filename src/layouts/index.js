import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, useStaticQuery, Link } from 'gatsby'
import styled from '@emotion/styled'
import ContextProvider from '~/provider/ContextProvider'
import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'
import Announcement from '~/components/Announcement'
import SimpleSlider from '~/components/SlickSlider'
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
    {
      allShopifyPage {
        nodes {
          title
          handle
        }
      }
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
            }
          }
      }
   `)
  return (
    <ContextProvider>
      <GlobalStyle />
      <>
        <Announcement />
        <Navigation menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
        <SimpleSlider/>
        <Wrapper>
          {children}
          <footer>
            <ul>
              {data.allShopifyPage.nodes.map(({ title, handle }) => (
                <li><Link to={`/page/${handle}/`}>
                  {title}
                </Link></li>
              ))}</ul>
              © {new Date().getFullYear()}, Dyode Challenge
                {` `}
          </footer>
        </Wrapper>
      </>
    </ContextProvider>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout