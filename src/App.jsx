import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Productos from "./components/Productos/Productos";
import "./App.css";

function App() {
	return (
		<>
			<Header />
			<div id="inicio">
				<Hero />
			</div>
			<div id="productos">
				<Productos />
			</div>
			<Footer />
		</>
	);
}

export default App;
