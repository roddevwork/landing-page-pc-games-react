import { useState } from "react"
import { products } from "../../data/productsAll.js"
import {
	ContainerCards,
	ContainerProducts,
	ProductsSection,
	TitleProductsSection,
} from "../../components/Products/ProductsStyles"
import CardProducto from "./CardProduct.jsx"
import Categorias from "../../components/categorias/Categorias"

const ProductsUs = () => {
	const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos")

	const filteredProducts =
		categoriaSeleccionada === "Todos"
			? products
			: products.filter((product) =>
					product.category.includes(categoriaSeleccionada)
			  )

	return (
		<ProductsSection>
			<ContainerProducts>
				<TitleProductsSection>Nuestros Juegos</TitleProductsSection>

				<Categorias
					categorias={[
						"Accion",
						"Aventura",
						"Deportes",
						"Futbol",
						"Lucha",
						"Rol",
						"Simuladores",
						"Coperativo",
						"Multijugador",
					]}
					onCategoriaSeleccionada={setCategoriaSeleccionada}
				/>

				<ContainerCards>
					{filteredProducts.map((card) => {
						return <CardProducto key={card.id} {...card} />
					})}
				</ContainerCards>
			</ContainerProducts>
		</ProductsSection>
	)
}

export default ProductsUs
