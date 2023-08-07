import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<hr />
			<div className="container-social-and-copy">
				<p className="row-copyright">
					Copyright &copy; 2023 - <span>RM</span> - Todos los derechos
					reservados
				</p>
				<ul className="social-media-icon">
					<li>
						<a href="#" target="_blank">
							<img src={youtube} alt="youtube" />
						</a>
					</li>
					<li>
						<a href="#" target="_blank">
							<img src={instagram} alt="youtube" />
						</a>
					</li>
					<li>
						<a href="#" target="_blank">
							<img src={facebook} alt="youtube" />
						</a>
					</li>
					<li>
						<a href="#" target="_blank">
							<img src={twitter} alt="youtube" />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
