import React from 'react'
import { StaticQuery, graphql,  useStaticQuery, Link } from 'gatsby'
const Footer= () => {
  const { allShopifyPage } = useStaticQuery(
    graphql`
    {
      allShopifyPage {
        nodes {
          title
          handle
        }
      }
    }`)
  return (
              <footer>
                © {new Date().getFullYear()}, Dyode Challenge
                {` `}
                {allShopifyPage.nodes.map(({  title, handle }) => (
            <Link to={`/page/${handle}/`}>
           {title}
            </Link>
        ))}
              </footer>
  )
}
export default Footer