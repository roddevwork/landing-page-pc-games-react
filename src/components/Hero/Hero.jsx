import "./Hero.css"
import { Link } from "react-router-dom"

const Hero = () => {
	return (
		<section id="inicio" className="home">
			<article className="hero-image">
				<aside className="hero-image-opacity">
					<div className="hero-image-content">
						<h2 className="hero-image-title">
							Bienvenido<br></br> a tu sitio de Juegos
						</h2>
						<Link to="/products" className="btn">
							PRODUCTOS
						</Link>
					</div>
				</aside>
			</article>
		</section>
	)
}

export default Hero
