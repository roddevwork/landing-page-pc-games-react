import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import {
	LayoutContainer_Styled,
	ContentContainer_Styled,
} from "./LayoutStyles.js"

const Layout = ({ children }) => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<LayoutContainer_Styled>
			<Header />
			<ContentContainer_Styled>{children}</ContentContainer_Styled>
			<Footer />
		</LayoutContainer_Styled>
	)
}

export default Layout
