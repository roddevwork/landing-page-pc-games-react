import { ContactSection_Styled } from "./ContactStyles.js"
import "./Contact.css"
const Contact = () => {
	return (
		<ContactSection_Styled>
			<h1>Contacto</h1>
			<div className="contact-container">
				<form>
					<div className="form-group">
						<label>Nombre</label>
						<input type="text" name="nombre" />
					</div>
					<div className="form-group">
						<label>Apellido</label>
						<input type="text" name="apellido" />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" name="email" />
					</div>
					<div className="form-group">
						<label>Asunto</label>
						<textarea name="asunto" rows="4"></textarea>
					</div>
					<button type="submit">Enviar</button>
				</form>
			</div>
		</ContactSection_Styled>
	)
}

export default Contact
