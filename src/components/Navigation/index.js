import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {
	Icons,
	Container,
	MenuLink,
	LogoLink,
	Wrapper,
	Hamburger,
	Navbar,
	Col
} from './styles'
import {
	FaShoppingCart, FaUser, FaSearch, FaBars
} from 'react-icons/fa';
import { Link } from "gatsby"
const Navigation = ({ siteTitle, menuLinks }) => {
	return (
		<Wrapper>
			<Container>
				<Col>
					<Hamburger>
						<FaBars />
					</Hamburger>
					<LogoLink to='/'>
						{siteTitle}
					</LogoLink>
				</Col>
				<Navbar>
					<nav>
						<ul style={{ display: "flex", flex: 1 }}>
							{menuLinks.map(link => (
								<li
									key={link.name}
									style={{
										listStyleType: `none`,
										padding: `1rem`,
									}}
								>
									<Link style={{ color: `white`, textDecoration: `none`, textTransform: `uppercase`, fontSize: `20px`, lineHeight: `24px`, letterSpacing: `.1em` }} to={link.link}>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</Navbar>
				<Icons>
					<MenuLink to='/search'>
						<FaSearch />
					</MenuLink>
					<MenuLink to='/account'>
						<FaUser />
					</MenuLink>
					<MenuLink to='/cart'>
						<FaShoppingCart />
					</MenuLink>
				</Icons>
			</Container>
		</Wrapper>
	)
}
Navigation.propTypes = {
	siteTitle: PropTypes.string,
}
Navigation.defaultProps = {
	siteTitle: ``,
}
export default Navigation