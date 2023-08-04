import "./Hero.css";

const Hero = () => {
	return (
		<section id="inicio" className="home">
			<article className="hero-image">
				<aside className="hero-image-opacity">
					<div className="hero-image-content">
						<h2 className="hero-image-title">
							Bienvenidos<br></br> a tu sitio de Juegos
						</h2>
						<a href="#contacto" className="btn">
							PRODUCTOS
						</a>
					</div>
				</aside>
			</article>
		</section>
	);
};

export default Hero;
