import "./Productos.css";

const Productos = () => {
	return (
		<section className="products-section">
			<article className="container-products">
				<h2 className="title-products-section">Productos Destacados</h2>
				<div className="container-cards">
					<div className="card">
						<img
							src="src/components/Productos/img-cards/grand-theft-auto-online.jpeg"
							alt="grand-theft-auto-online"
						/>
						<h2>Grand Theft Auto Online</h2>
						<p>$2000</p>
					</div>
					<div className="card">
						<img
							src="src/components/Productos/img-cards/Marvel's Avengers-DE.jpeg"
							alt="Marvel's Avengers"
						/>
						<h2>Marvel's Avengers-DE</h2>
						<p>$3000</p>
					</div>
					<div className="card">
						<img
							src="src/components/Productos/img-cards/No Man's Sky.jpeg"
							alt="No Man's Sky"
						/>
						<h2>No Man's Sky</h2>
						<p>$900</p>
					</div>
					<div className="card">
						<img
							src="src/components/Productos/img-cards/Valheim.jpeg"
							alt="Valheim"
						/>
						<h2>Valheim</h2>
						<p>$700</p>
					</div>
					<div className="card">
						<img
							src="src/components/Productos/img-cards/Mortal Kombat 11 Ultimate.jpeg"
							alt="grand-theft-auto-online"
						/>
						<h2>Mortal Kombat 11 Ultimate</h2>
						<p>$700</p>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Productos;
