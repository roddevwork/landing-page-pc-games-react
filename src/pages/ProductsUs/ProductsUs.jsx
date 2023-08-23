import { products } from "../../data/productsAll.js"
import {
	ContainerCards,
	ContainerProducts,
	ProductsSection,
	TitleProductsSection,
} from "../../components/Products/ProductsStyles"
import CardProducto from "./CardProduct.jsx"
const ProductsUs = () => {
	return (
		<ProductsSection>
			<ContainerProducts>
				<TitleProductsSection>Nuestros Juegos</TitleProductsSection>
				<ContainerCards>
					{products.map((card) => {
						return <CardProducto key={card.id} {...card} />
					})}
				</ContainerCards>
			</ContainerProducts>
		</ProductsSection>
	)
}

export default ProductsUs
