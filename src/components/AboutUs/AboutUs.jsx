import {
	AtencionContainer_Styled,
	GamePassContainer_Styled,
	PagosContainer_Styled,
	SectionAboutUs_Styled,
	DivContainerItem_Styled,
	Title_Styled,
} from "./AboutUsStyles.js"
// import { HiLockClosed, HiUserAdd, HiOutlinePhoneIncoming } from "react-icons/hi"

const AboutUs = () => {
	return (
		<SectionAboutUs_Styled>
			<Title_Styled>Sobre Nosotros</Title_Styled>

			<DivContainerItem_Styled>
				<GamePassContainer_Styled>
					{/* <HiUserAdd size={48} /> */}
					<h3> Obtené Game Pass</h3>
					<p>Descuentos importantes</p>
				</GamePassContainer_Styled>
				<PagosContainer_Styled>
					{/* <HiLockClosed size={48} /> */}
					<h3>Pagos seguros</h3>
					<p>Transacciones seguras</p>
				</PagosContainer_Styled>
				<AtencionContainer_Styled>
					{/* <HiOutlinePhoneIncoming size={48} /> */}
					<h3>Atención al cliente</h3>
					<p>Soporte 24/7</p>
				</AtencionContainer_Styled>
			</DivContainerItem_Styled>
		</SectionAboutUs_Styled>
	)
}

export default AboutUs
