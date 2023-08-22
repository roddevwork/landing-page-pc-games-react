import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import {
	LayoutContainer_Styled,
	ContentContainer_Styled,
} from "./LayoutStyles.js"

const Layout = ({ children }) => {
	return (
		<LayoutContainer_Styled>
			<Header />
			<ContentContainer_Styled>{children}</ContentContainer_Styled>
			<Footer />
		</LayoutContainer_Styled>
	)
}

export default Layout
