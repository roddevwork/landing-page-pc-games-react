import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Hero from "./components/Hero/Hero"
import Productos from "./components/Productos/Productos"
import Footer from "./components/Footer/Footer"
import "./App.css"

function App() {
	return (
		<>
			<Header />
			<Main>
				<Hero />
				<Productos />
			</Main>
			<Footer />
		</>
	)
}

export default App
