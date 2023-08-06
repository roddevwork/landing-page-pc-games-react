import gta from "./img-cards/grand-theft-auto-online.jpeg";
import avengers_de from "./img-cards/Marvel's Avengers-DE.jpeg";
import noManSky from "./img-cards/No Man's Sky.jpeg";
import valheim from "./img-cards/Valheim.jpeg";
import mortalkombat11 from "./img-cards/Mortal Kombat 11 Ultimate.jpeg";
import "./Productos.css";

const Productos = () => {
	return (
		<section className="products-section">
			<article className="container-products">
				<h2 className="title-products-section">Productos Destacados</h2>
				<div className="container-cards">
					<div className="card">
						<img src={gta} alt="grand-theft-auto-online" />
						<h2>Grand Theft Auto Online</h2>
						<p>$2000</p>
					</div>
					<div className="card">
						<img src={avengers_de} alt="Marvel's Avengers" />
						<h2>Marvel's Avengers-DE</h2>
						<p>$3000</p>
					</div>
					<div className="card">
						<img src={noManSky} alt="No Man's Sky" />
						<h2>No Man's Sky</h2>
						<p>$900</p>
					</div>
					<div className="card">
						<img src={valheim} alt="Valheim" />
						<h2>Valheim</h2>
						<p>$700</p>
					</div>
					<div className="card">
						<img src={mortalkombat11} alt="grand-theft-auto-online" />
						<h2>Mortal Kombat 11 Ultimate</h2>
						<p>$700</p>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Productos;
