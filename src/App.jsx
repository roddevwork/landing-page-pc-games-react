import Routes from "./routes/Routes"
// import "./App.css"
import { GlobalStyles } from "./styles/GlobalStyles"
import { MenuProvider } from "./context/MenuContext"

function App() {
	return (
		<>
			<MenuProvider>
				<Routes />
				<GlobalStyles />
			</MenuProvider>
		</>
	)
}

export default App

// import Header from "./components/Header/Header"
// import Layout from "./components/Layout/Layout"
// import Hero from "./components/Hero/Hero"
// import Productos from "./components/Products/Products"
// import Footer from "./components/Footer/Footer"
// import AboutUs from "./components/AboutUs/AboutUs"
// import "./App.css"

// function App() {
// 	return (
// 		<>
// 			<Header />
// 			<Layout>
// 				<Hero />
// 				<Productos />
// 				<AboutUs />
// 			</Layout>
// 			<Footer />
// 		</>
// 	)
// }

// export default App
