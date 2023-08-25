import { FaAward, FaHandshakeSimple, FaHeadset } from "react-icons/fa6"

import { Section, Aside } from "./AboutStyles.js"
import {
	AtencionContainer_Styled,
	GamePassContainer_Styled,
	PagosContainer_Styled,
	DivContainerItem_Styled,
	SectionAboutUs_Styled,
} from "../../components/AboutUs/AboutUsStyles.js"
const About = () => {
	return (
		<Section>
			<Aside>
				<h2>Quienes Somos?</h2>
				<h3>Bienvenidos a PC GAMES,</h3>
				<p>
					Somos apasionados por la diversión y la emoción de los juegos de PC.
					Nuestra misión es proporcionar a los jugadores de todas partes una
					experiencia excepcional en el mundo de los videojuegos. Ofrecemos una
					amplia selección de juegos que abarcan diversos géneros, desde acción
					trepidante hasta emocionantes aventuras, épicos juegos de rol,
					emocionantes deportes, emocionantes combates y experiencias
					multijugador que te conectarán con jugadores de todo el mundo.
				</p>
				<p>
					Nuestra dedicación a la calidad y la satisfacción del cliente es
					insuperable. Trabajamos arduamente para asegurarnos de que cada juego
					que ofrecemos sea una experiencia increíble. Además, estamos
					comprometidos con mantenernos actualizados con las últimas tendencias
					y lanzamientos para que siempre tengas acceso a los juegos más
					emocionantes y novedosos.
				</p>
				<p>
					En PC GAMES, no solo vendemos juegos, sino que también construimos
					comunidades. Creemos que los juegos son una forma poderosa de
					conectarse y compartir experiencias con amigos y jugadores de todo el
					mundo. Únetenos en nuestra búsqueda para crear una comunidad de
					jugadores apasionados y disfrutar juntos de la emoción de los
					videojuegos. Gracias por elegirnos como tu destino de juegos.
					Esperamos que encuentres los juegos que amas y que disfrutes de horas
					interminables de diversión. ¡Bienvenido a la aventura de PC GAMES!
				</p>
			</Aside>
			<SectionAboutUs_Styled>
				<DivContainerItem_Styled>
					<GamePassContainer_Styled>
						<FaAward size={48} />
						<h3> Obtené Game Pass</h3>
						<p>Descuentos importantes</p>
					</GamePassContainer_Styled>
					<PagosContainer_Styled>
						<FaHandshakeSimple size={48} />
						<h3>Pagos seguros</h3>
						<p>Transacciones seguras</p>
					</PagosContainer_Styled>
					<AtencionContainer_Styled>
						<FaHeadset size={48} />
						<h3>Atención al cliente</h3>
						<p>Soporte 24/7</p>
					</AtencionContainer_Styled>
				</DivContainerItem_Styled>
			</SectionAboutUs_Styled>
		</Section>
	)
}

export default About
