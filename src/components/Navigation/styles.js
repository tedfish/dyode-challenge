import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { breakpoints } from '../../utils/styles'
export const Wrapper = styled.div`
  background: #10504F;
  margin-bottom: 1.45rem;
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 30px 48px;
  margin: 0 auto;
  max-width: 1440px;
  @media (max-width: ${breakpoints.s}px){
    padding: 18px 20px;
  }
`
export const Hamburger = styled.div`
  display: none;
  @media (max-width: ${breakpoints.s}px){
    color: white;
    font-size: 15px;
    border-radius: 50%;
    border: 1px solid white;
    display: block;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    margin-right: 25px;
  }
`
export const Col = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const Icons = styled.div`
`
export const Navbar = styled.div`
display:block;
@media (max-width: ${breakpoints.s}px){
  display: none;
}
`
export const LogoLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 42.5px;
  font-weight: bold;
  font-family: "Pacifico";
  @media (max-width: ${breakpoints.s}px){
    font-size: 1.4rem
  }
`
export const MenuLink = styled(Link)`
  color: white;
  font-size: 14px;
  padding-left: 30px;
  @media (max-width: ${breakpoints.s}px){
    font-size: 12px;
  }
`
export const CartCounter = styled.span`
  background-color: white;
  color: #663399;
  border-radius: 20px;
  padding: 0 10px;
  font-size: 1.2rem;
  float: right;
  margin: -10px;
  z-index: 20;
`