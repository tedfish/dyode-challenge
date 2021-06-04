import styled from '@emotion/styled'
import { breakpoints } from '../../utils/styles'
export const SectionBlock = styled.div`
  margin: 50px auto;
`
export const Slider = styled.div`
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
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  margin: 22px auto 5px;
`
export const Description = styled.div`
  font-size: 16px;
  line-height: 19.2px;
  text-align: center;
  text-transform: uppercase;
`
export const SectionTitle = styled.h2`
  font-family: "Pacifico";
  font-size: 60px;
  line-height: 70px;
  text-align: center;
  margin-top: 45px;
  @media (max-width: ${breakpoints.s}px){
    font-size: 26px;
    line-height: 46px;
  }
`
export const PriceTag = styled.span`
font-family: "Pacifico";
  font-size: 26px;
  line-height: 45px;
  text-align: center;
  color: #10504F;
`