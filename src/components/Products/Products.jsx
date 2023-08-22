import { products } from "../../data/productsFeatured"
import CardProducto from "./CardProduct"
import {
	ContainerProducts,
	ProductsSection,
	TitleProductsSection,
	ContainerCards,
} from "./ProductsStyles"

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
