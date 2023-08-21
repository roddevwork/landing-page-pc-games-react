import {
	ContainerProducts,
	ProductsSection,
	TitleProductsSection,
	ContainerCards,
} from "./ProductosStyles"
import { products } from "../../data/products"
import CardProducto from "./CardProducto"

const Productos = () => {
	return (
		<ProductsSection>
			<ContainerProducts>
				<TitleProductsSection>Productos Destacados</TitleProductsSection>
				<ContainerCards>
					{products.map((card) => {
						return <CardProducto key={card.id} {...card} />
					})}
				</ContainerCards>
			</ContainerProducts>
		</ProductsSection>
	)
}

export default Productos
