import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Productos from "./components/Productos/Productos";
function App() {
	return (
		<>
			<Header />
			<Hero />
			<div id="productos">
				<Productos />
			</div>
		</>
	);
}

export default App;
