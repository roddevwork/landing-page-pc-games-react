import { Cards, ContainerPrice } from "./ProductsStyles"

const CardProducto = ({ img, title, price, price_offer }) => {
	return (
		<Cards>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<ContainerPrice>
				<p>${price}</p>
				<p>${price_offer}</p>
			</ContainerPrice>
		</Cards>
	)
}

export default CardProducto
