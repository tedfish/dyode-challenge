import styled from '@emotion/styled'
import { breakpoints } from '../../utils/styles'
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 50px;
  @media (max-width: ${breakpoints.s}px){
    grid-template-columns: repeat(1, 1fr);
  }
`
export const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`
export const Title = styled.div`
  font-family: "Pacifico";
  font-size: 40px;
  line-height: 70px;
  text-align: center;
  background: #10504F;
  color: white;
`
export const PriceTag = styled.span`
  font-weight: 300;
  font-size: 1rem;
  text-align: center;
  margin-top: 15px;
  :before {
    content: '- '
  }
`