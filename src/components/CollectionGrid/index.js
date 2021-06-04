// import React, { useContext } from 'react'
// import { useStaticQuery, graphql, Link } from 'gatsby'
// import StoreContext from '~/context/StoreContext'
// import {
//   Grid,
//   Collection,
//   Title
// } from './styles'
// import { Img } from '~/utils/styles'
// const ProductGrid = () => {
//   const { store: {checkout} } = useContext(StoreContext)
//   const { allShopifyCollection } = useStaticQuery(
//     graphql`
//     query {
//       allShopifyCollection (sort: { fields: [title] }) {
//         edges {
//           node {
//             id
//             title
//             handle
//           }
//         }
//       }
//     }
//     `
//   )
//   return (
//     <Grid>
//       {allShopifyCollection.edges
//         ? allShopifyCollection.edges.map(({ node: { id, handle, title } }) => (
//           <Collection key={id} >
//             <Title>{title}</Title>
//           </Collection>
//         ))
//         : <p>No Products found!</p>}
//     </Grid>
//   )
// }
// export default ProductGrid