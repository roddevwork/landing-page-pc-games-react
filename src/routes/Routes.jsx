import {
	BrowserRouter,
	Routes as ReactDomRoutes,
	Route,
} from "react-router-dom"
import Layout from "../components/Layout/Layout"
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import ProductsUs from "../pages/ProductsUs/ProductsUs"
import Contact from "../pages/Contact/Contact"
import Products from "../components/Products/Products"

const Routes = () => {
	return (
		<BrowserRouter>
			<Layout>
				<ReactDomRoutes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/productsUs" element={<ProductsUs />} />
					<Route path="/products" element={<Products />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<h2>ERROR!</h2>} />
				</ReactDomRoutes>
			</Layout>
		</BrowserRouter>
	)
}

export default Routes
