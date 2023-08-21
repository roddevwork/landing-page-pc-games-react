import instagram from "../../assets/icons/instagram.svg"
import facebook from "../../assets/icons/facebook.svg"
import twitter from "../../assets/icons/twitter.svg"
import "./Footer.css"

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container-social-and-copy">
				<p className="row-copyright">
					Copyright &copy; 2023 - <span>RM</span> - Todos los derechos
					reservados
				</p>
				<ul className="social-media-icon">
					<li>
						<a href="#" target="_blank">
							<img src={instagram} alt="instagram" />
						</a>
					</li>
					<li>
						<a href="#" target="_blank">
							<img src={facebook} alt="facebook" />
						</a>
					</li>
					<li>
						<a href="#" target="_blank">
							<img src={twitter} alt="twitter" />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
