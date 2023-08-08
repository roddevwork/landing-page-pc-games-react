import logo from "../../assets/img/logo.png";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<section className="container-menu">
				<div className="logo">
					<a href="#inicio">
						<img src={logo} alt="logo" />
					</a>
					<p>PC GAMES</p>
				</div>

				<nav className="nav-menu">
					<a href="#productos">Productos</a>
					<a href="#acerca">Sobre Nosotros</a>
					<a href="#contacto">Contacto</a>
					<a href="#inicio">Inicio</a>
					<a href="#sesion">Iniciar Sesion</a>
				</nav>

				<button className="btn-menu">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="none"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="#ff6347"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
						<path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
						<path d="M17 17h-11v-14h-2" />
						<path d="M6 5l14 1l-1 7h-13" />
					</svg>
					<svg
						className="none"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
					</svg>
				</button>
			</section>
		</header>
	);
};

export default Header;
