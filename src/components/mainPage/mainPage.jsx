import React from 'react';
import ResponsivePlayer from '../video/responsivePlayer';
import "../../css/font-awesome.min.css";
import "../../css/elegant-font-icons.css";
import "../../css/elegant-line-icons.css";
import "../../css/bootstrap.min.css";
import "../../css/animate.min.css";
import "../../css/venobox/venobox.css";
import "../../css/owl.carousel.css";
import "../../css/main.css";
import "../../css/responsive.css";
import { Helmet } from "react-helmet";
import darkLogo from "../../img/logo-dark.png";
import page1 from "../../img/page-1.png";
import page2 from "../../img/page-2.png";
import page3 from "../../img/page-3.png";
import page4 from "../../img/page-4.png";
import page5 from "../../img/page-5.png";
import page6 from "../../img/page-6.png";
import page7 from "../../img/page-7.png";
import page8 from "../../img/page-8.png";
import page9 from "../../img/page-9.png";
import page10 from "../../img/page-10.png";
import clueCap from "../../img/newCClogo.png";
import product1 from "../../img/product-1.png";
import small from "../../img/small.png";
import ccTimeline from '../../img/newTimeline.png';
import im from '../../img/imag.png';
import "./mainPage.css";
import { Container, Row, Col, Form, Button, Image} from "react-bootstrap";
import CardCarousel from './CardCarousel';
import Spinner from 'react-bootstrap/Spinner';
import { withRouter } from 'react-router-dom';
import { method } from "./mainPageService";
import Loader from "react-loader-spinner";
import 'boxicons';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import ReactGA from 'react-ga'

ReactGA.initialize('UA-218915160-1')
ReactGA.pageview("/mainPage")

class MainPage extends React.Component {
    constructor(context) {
        super(context);
		this.state = {
			isOpen: false,
			email: '',
			isLoading: false,
		}
		this.openModal = this.openModal.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.closeModal = this.closeModal.bind(this)
	}
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ isLoading: true })
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			const text = {
				email: this.state.email,
			};
			var that = this;
			method(text)
				.then(function (response) {
					that.setState({ isLoading: false })

					 if (response.status == '200') {
						that.setState({ isLoading: false })
						alert('Thank you for subscribing! We will keep you updated.');
						 return response.json();
						 window.location.reload();
					}
					else if (response.status == '400') {
						that.setState({ isLoading: false })
						alert('sorry system down or already subscribed');
						return response.json();
					}
					 else {

						 alert('sorry system down please try again later');
						 window.location.reload();
					 }
			
				}, (error) => {
					if (error) {
						alert('sorry system down or email already confirmed');
						this.setState({
							isLoading: false
						})

					}
				}
				);
		}

		this.setState({ validate: true })
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};
	openModal() {
		this.setState({ isOpen: true })
	}

	closeModal() {
		this.setState({ isOpen: false })
	
	}
	componentDidMount() {
		ReactGA.initialize('G-KCJ3BWTN18');
		ReactGA.pageview("/mainPage");
	}

	handleClick(e) {
		e.preventDefault();
		this.props.history.push('/story')
	}

	render() {
		return (
			<React.Fragment>
				<br></br>
				<br></br>
				<br></br>
				<br></br>

				<section>
				{/* Card Picture Carousel - Desktop Only */}
				<BrowserView>
					<CardCarousel />
				</BrowserView>
				{/* Mobile View Section */}
				   <MobileView>
					   <div className="mobile-section" style={{ padding: '20px', textAlign: 'center' }}>
						   {[page1, page2, page3, page4, page5, page6, page7, page8, page9, page10].map((img, idx) => (
							   <img
								   key={idx}
								   src={img}
								   alt={`page-${idx + 1}`}
								   style={{ maxWidth: '90%', margin: '10px 0', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
							   />
						   ))}
					   </div>
				   </MobileView>
				</section>

				
				<div className="sponsor_section bg-grey bd-bottom">
					<div className="container">
						<ul id="sponsor_carousel" className="sponsor_items owl-carousel">
							<li className="sponsor_item">
                        <img src="img/sponsor-1.png" alt="sponsor-image"></img>
                    </li>
								<li className="sponsor_item">
								<img src={product1} alt="sponsor-image"></img>
                    </li>
									<li className="sponsor_item">
								<img src={product1} alt="sponsor-image"></img>
                    </li>
										<li className="sponsor_item">
								<img src={product1} alt="sponsor-image"></img>
                    </li>
											<li className="sponsor_item">
								<img src={product1} alt="sponsor-image"></img>
                    </li>
												<li className="sponsor_item">
								<img src={product1} alt="sponsor-image"></img>
                    </li>
													<li className="sponsor_item">
								<img src="img/sponsor-3.png" alt="sponsor-image"></img>
                    </li>
														<li className="sponsor_item">
								<img src="img/sponsor-4.png" alt="sponsor-image"></img>
                    </li>
                </ul>
            </div>
        </div>
        
											

		<footer className="footer_section bg-grey align-center">
             <div className="container">
				<p>&copy; 2021 From Logic Pill</p>
			</div>
		</footer>

		<a data-scroll href="#home" id="scroll-to-top"><i className="arrow_carrot-up"></i></a>
				</React.Fragment>
        );
    }
}

export default withRouter(MainPage);

//{
//	!isMobile ? < section id="home" className="hero_section">
//		<div className="container">
//			<div className="watch_moc hidden-xs"></div>
//			<div className="display-table">
//				<div className="table-cell">
//					<div className="hero_content">
//						<h1>Introducing Clue Cap</h1>
//						<p>A new key attachment to help prevent us from leaving our keys in the door lock <br></br></p>
//						<a target="_blank" rel="noopener noreferrer" href="https://www.kickstarter.com/projects/jsm88/clue-cap-a-new-kind-of-key-mod" className="default_btn">Support us on Kickstarter</a>
//					</div>
//				</div>
//			</div>
//		</div>
//	</section> : < section id="home" className="hero_section">
//		<br></br>
//		<br></br>
//		<div className="container">
//			<div className="watch_moc hidden-xs"></div>
//			<div className="display-table">
//				<div className="table-cell">

//					<div className="hero_content">
//						<img src="https://res.cloudinary.com/logic-pill/image/upload/c_scale,w_320/v1643754518/ccolorsw_ruiadv.jpg" width="100%" alt="Mora_V1_Rendering_3 (1)"></img>
//						<br></br>
//						<br></br>
//						<div className="section_heading align-center">
//							<h3>Clue Cap: A New Kind of Key Mod</h3>

//						</div>
//					</div>

//				</div>
//			</div>
//		</div>
//	</section>
//}