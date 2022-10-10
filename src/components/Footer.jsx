import "../assets/styles/Footer.css";

function Footer() {
	return (
		<div 
		className="footer-barra"
		style={{ background: "#662012" }}>

			<div className="conocenos">
				<h3 className="title-footer">Conócenos</h3>
				<ul className="listado-footer">
					<li>Nosotros</li>
					<li>Zona de despacho</li>
					<li>Contáctanos</li>
					<li>Términos y condiciones</li>
				</ul>
			</div>

			<div className="rrss">
				<h3 className="title-footer">Redes Sociales</h3>
				<ul className="listado-footer">
					<li>Instagram</li>
				</ul>
			</div>

		</div>
	);
}

export default Footer;