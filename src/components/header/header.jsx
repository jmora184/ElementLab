import React from "react";
import "../../css/font-awesome.min.css";
import "../../css/elegant-font-icons.css";
import "../../css/elegant-line-icons.css";
import "../../css/bootstrap.min.css";
import "../../css/animate.min.css";
import "../../css/venobox/venobox.css";
import "../../css/owl.carousel.css";
import "../../css/main.css";
import "../../css/responsive.css";
import { Link } from 'react-router-dom';
import turtleCutter from "../../img/ElementLabsLogo.png";
import "./header.css";
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import three from "../../img/three-dots.svg"
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
 class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		}
		this.openModal = this.openModal.bind(this)
		this.closeModal = this.closeModal.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleClick2 = this.handleClick2.bind(this)
		this.handleClick3 = this.handleClick3.bind(this)
		this.handleClick4 = this.handleClick4.bind(this)
	}
	openModal() {
		this.setState({ isOpen: true })
		console.log(this.state.isOpen)
	}

	closeModal() {
		this.setState({ isOpen: false })
		console.log(this.state.isOpen)
	}
	componentDidMount() {

	}


	handleClick() {

		this.props.history.push('/story')
	 }
	 handleClick2() {

		 this.props.history.push('/about')
	 }
	 handleClick3() {

		 this.props.history.push('/updates')
	 }
	 handleClick4() {

		 this.props.history.push('/gallery')
	 }
	render() {
		

		return (
			<React.Fragment>
				<header id="header" className="header_section">
	
					<nav className="navbar">
						<div className="container">

							<div className="navbar-header" >
								<button type="button" className="nav-btn navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
			
								<Nav.Link data-scroll as={Link} to="/" className="brand logo-dark">{isMobile ? < img src={turtleCutter} height="60%" width="50%" alt="Product Image" ></img> :
							< img src={turtleCutter} height="25%" width="20%" alt="Product Image" ></img>}</Nav.Link>
								
							<Nav id="navbar" className="collapse navbar-collapse navbar-right">
								<ul className="nav navbar-nav nav-menu" >
					
									<li className="active" ><Nav.Link data-scroll as={Link} to="/" data-toggle="collapse" data-target=".navbar-collapse" style={{background: 'linear-gradient(90deg, #1e90ff, #00c853)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Network</Nav.Link><span className="sr-only">(current)</span></li> 
									<li><Nav.Link data-scroll as={Link} to="/" data-toggle="collapse" data-target=".navbar-collapse" style={{background: 'linear-gradient(90deg, #1e90ff, #00c853)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Supply Chain</Nav.Link></li>

		
	
									<li> <Nav.Link data-scroll as={Link} to="/" data-toggle="collapse" data-target=".navbar-collapse" style={{background: 'linear-gradient(90deg, #1e90ff, #00c853)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Contact</Nav.Link></li>
<li> <Nav.Link data-scroll as={Link} to="/story" data-toggle="collapse" data-target=".navbar-collapse" style={{background: 'linear-gradient(90deg, #1e90ff, #00c853)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Meet Our Team</Nav.Link></li>
								

								</ul>	
								
							</Nav>
							</div>	


						</div>

					</nav>
				</header>




			</React.Fragment>
		);
	}
}
export default withRouter(Header);
//<div id='preloader' >
//	<div className='loader' >
//		<img src={three} width="60" alt=""></img>
//	</div>
//</div>