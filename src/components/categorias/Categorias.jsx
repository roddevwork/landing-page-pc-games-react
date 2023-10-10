import { useState } from "react"
import { CategorySection } from "./CategoriasStyles"
import "./Categorias.css"

const Categorias = ({ categorias, onCategoriaSeleccionada }) => {
	const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos")

	const handleCategoriaClick = (categoria) => {
		setCategoriaSeleccionada(categoria)
		onCategoriaSeleccionada(categoria)
	}

	return (
		<CategorySection>
			<ul>
				{["Todos", ...categorias].map((categoria) => (
					<li
						key={categoria}
						onClick={() => handleCategoriaClick(categoria)}
						className={categoria === categoriaSeleccionada ? "active" : ""}
					>
						{categoria}
					</li>
				))}
			</ul>
		</CategorySection>
	)
}

export default Categorias
