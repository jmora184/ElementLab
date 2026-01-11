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
import clueCap from "../../img/newCClogo.png";
import product1 from "../../img/product-1.png";
import small from "../../img/small.png";
import ccTimeline from '../../img/newTimeline.png';
import im from '../../img/imag.png';
import "./mainPage.css";
import { Container, Row, Col, Form, Button, Image} from "react-bootstrap";
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
		var url = "https://lh3.googleusercontent.com/eFQor6fo9S6HyDbNTVp5N8w_0awrYfOkvhZPD_tK12rfhJTpJpRfr5b3woJq5jxtULu6-9lDGcQu39zyYAxSMikIdmbfFHlLgZECrnkOEsiSY1vLddjbrxuA-_valfOSLaCV2A_QtxJK6VAuIo_O1oso2-tLLzpgPkNobeREVOhCDhO9gcnAvMQpkfNfO9q7tUJIK4V3eD141bVukLH2e4_MZpVNsABJee7JlqzyfxFSnktLRp1pqyFXTLwU0kj0E3DledIVsghh8uHE9m55QQ4lyK5VxWFcjulRzT1AYBd_UsvKRbbpxTA-h5an1BWqeYjmrVS-C99p36k2-WG9ZewRPS0Ay346OCHfIekXtpEloToCQMX2SNMO__nWpM0Sy_KyC8YQvBlxnpGu9M-si_-2SJSOEYfP2-GElklSaqdM5Jv3ynQDvflbMrWCXEPmtul4N7pwvj3SGQuE7yGZWq7wPwX5YKBjc5f2JSVZRCMEgWY0d4GqYHykHQcLvUdtp79Wz8KmLrsRbIWmBq8f2usO_Zx6S_8UKgmTs2SiXOT-eoQIXlCyArtTywsW-FkrAhE7XFFfAq-9joKyD0J98a8VM2H5MOmyOCwtJc7u1WlB1aUGpjoKJNtB-b0mZxvIce7GSmZIchbgQc3JoAn5UJj1dPRbKMmmcIgVsBXYUWks5rDhtd88N6vnEeEAMQqUxFn3QZU8qZVzPzdamws6yGZA=w1666-h937-no?authuser=0"
        return (
			<React.Fragment>
{
	<div id="video" className="promo_section  bd-top bd-bottom padding">
	<div className="container">
		<br></br>
		<br></br>
		<br></br>
							 <img 
								 src="https://res.cloudinary.com/logic-pill/image/upload/v1768150891/heropage_yc2hs1.png" 
								 alt="Stock" 
								 width="100%" 
								 className="animated bounceIn"
								 style={{ animationDuration: '1.5s' }}
							 />
		<br></br>
		<br></br>

		<ul className="why_item">
			<li className="col-md-4 col-xs-6">
				<div className="why_list wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="2000ms">
					<img src="https://res.cloudinary.com/logic-pill/image/upload/v1768152692/allusa_ofmtkh.jpg" alt="Stock" width="100%" ></img>
					<h3>Designed for cannabis brands at scale</h3>
					<p>State transforming into vapes and pre-rolls.</p>
				</div>
			</li>
			<li className="col-md-4 col-xs-6">
				<div className="why_list wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="2000ms">
					<img src="https://res.cloudinary.com/logic-pill/image/upload/v1768152618/complaince_ysw504.jpg" alt="Stock" width="100%" ></img>
					<h3>Face to Face</h3>
					<p>A Co-Packing & Processing Network Built to Scale Ingredient-Driven Brands.</p>

				</div>
			</li>

			<li className="col-md-4 col-xs-6">
				<div className="why_list wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="2000ms">
					<img src="https://res.cloudinary.com/logic-pill/image/upload/v1768152383/distrubution_lqaown.jpg" alt="Stock" width="100%" ></img>
					<h3>Easy and Smooth</h3>
					<p>As formats evolve, supply chains must adapt: speed, quality, and compliance now define success..</p>
				</div>
			</li>
		</ul>

	</div>
</div>
}
<section id="subscribe" className="subscribe_section bd-bottom">
			<div className="container">
			<div className="section_heading mb-20 align-center">
<div style={{
  width: '100%',
  background: 'linear-gradient(90deg, #e8ffe8 0%, #d0f5d0 100%)',
  color: 'darkgreen',
  fontWeight: 700,
  fontSize: '2rem',
  textAlign: 'center',
  padding: '2rem 1rem',
  borderRadius: '18px',
  margin: '2rem 0',
  boxShadow: '0 4px 24px rgba(0,64,0,0.08)',
  letterSpacing: '0.02em',
}}>
  Legalization Varies : Each state shapes its own cannabis market through unique regulations and cultural attitudes, creating a diverse landscape of opportunities.
</div>
			{isMobile ? < img src="https://res.cloudinary.com/logic-pill/image/upload/c_scale,w_300/v1768139914/ChatGPT_Image_Jan_11_2026_08_58_20_AM_crxe6a.jpg" alt="Product Image" ></img> :
							< img src="https://res.cloudinary.com/logic-pill/image/upload/c_scale,w_1080/v1768139914/ChatGPT_Image_Jan_11_2026_08_58_20_AM_crxe6a.jpg" alt="Product Image" ></img>}										

<br></br>
<br></br>

				   

               </div>	


			</div>
			
		</section>
							 <section id="purchase" className="discount_section bg-grey bd-bottom padding">
								 <div className="container">
									 <div className="row align-items-center">
										 <div className="col-md-6 col-sm-12 xs-padding">
											 <div className="discount_content wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="2000ms">
												 <h2>Innovation Spotlight: The Rise of Vapes and Pre-Rolls</h2>
												 <table style={{ color: 'darkgreen', fontSize: '1rem', margin: '1rem 0', borderCollapse: 'collapse', minWidth: '320px', maxWidth: '100%', background: '#f8f8f8', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
													 <tbody>
														 <tr>
															 <td style={{ padding: '8px 16px', fontWeight: 600 }}>3M+</td>
															 <td style={{ padding: '8px 16px', fontWeight: 600 }}>Vapes s</td>
															 <td style={{ padding: '8px 16px', fontWeight: 600 }}>37% Premium Products</td>
															 <td style={{ padding: '8px 16px', fontWeight: 600 }}>West Coast alone</td>
															 <td style={{ padding: '8px 16px', fontWeight: 600 }}>MAX THC Premium Products</td>
														 </tr>
													 </tbody>
												 </table>
												 <h2>Fusion Forward</h2>
												 <table style={{ color: 'darkgreen', fontSize: '1rem', margin: '1rem 0', borderCollapse: 'collapse', minWidth: '320px', maxWidth: '100%', background: '#f8f8f8', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
													 <tbody>
														 <tr>
															 <td style={{ padding: '8px 16px', fontWeight: 600 }}>Flavors: Peach Uprise</td>
															 <td style={{ padding: '8px 16px', fontWeight: 600 }}>watermelon</td>
															 <td style={{ padding: '8px 16px', fontWeight: 600 }}>Strawberry Luxe</td>
															 <td style={{ padding: '8px 16px', fontWeight: 600 }}>Blueberry</td>
															 <td style={{ padding: '8px 16px', fontWeight: 600 }}>Pineapple</td>
														 </tr>
													 </tbody>
												 </table>
												 <h2>Genetics: Classics strains</h2>
												 <table style={{ color: 'darkgreen', fontSize: '1rem', margin: '1rem 0', borderCollapse: 'collapse', minWidth: '320px', maxWidth: '100%', background: '#f8f8f8', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
													 <tbody>
														 <tr>
															 <td style={{ padding: '8px 16px', fontWeight: 600 }}>OG Kush</td>
															 <td style={{ padding: '8px 16px', fontWeight: 600 }}>Jack Herer</td>
															 <td style={{ padding: '8px 16px', fontWeight: 600 }}>Sky Walker OG</td>
															 <td style={{ padding: '8px 16px', fontWeight: 600 }}>Blue Dream</td>
															 <td style={{ padding: '8px 16px', fontWeight: 600 }}>Blue Dream</td>
														 </tr>
													 </tbody>
												 </table>
												 <br />
												 <a target="_blank" rel="noopener noreferrer" href="https://www.kickstarter.com/projects/jsm88/the-turtle-cutter-a-new-kind-of-cigar-cutter" className="default_btn">Contact Us</a>
											 </div>
										 </div>
										 <br></br>
										 <br></br>
										 <br></br>
										 <br></br>
										 <br></br>
										 <br></br>
										 <br></br>
										 <div className="col-md-6 col-sm-12 xs-padding d-flex justify-content-center align-items-center">
											 <div className="discount_moc wow fadeInRight" data-wow-delay="400ms" data-wow-duration="2000ms" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
												 <img src="https://res.cloudinary.com/logic-pill/image/upload/v1768152953/explosion_cww8t0.jpg" alt="Feature Mockup" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} />
											 </div>
										 </div>
									 </div>
								 </div>
							 </section>

			

				<section id="features" className="feature_section bg bd-bottom padding">
					<div className="feature_moc hidden-xs"></div>
					<div className="container">
						<div className="section_heading align-center mb-40">
							<h2>From Source to Shelf.</h2>
							<p>Meet the Operators shaping Cannabis Culture that specialize in: </p>
						</div>
						<div className="row">
							<div className="col-sm-4 xs-padding">
								<ul className="feature_items">
									<li className="feature_item wow fadeInRight" data-wow-delay="0ms" data-wow-duration="2000ms">
									
										<h3>Live resin vapes and infused pre-rolls</h3>
										<p>Live resin–infused pre-rolls with elevated terpene profiles</p>
									</li>
									<li className="feature_item wow fadeInRight" data-wow-delay="200ms" data-wow-duration="2000ms">
										
										<h3>Pre-rolls & vape pods with THC levels up to 37%</h3>
										<p>Clean, solvent-free extraction processes</p>
									</li>
								</ul>
							</div>
							<div className="col-sm-4">
								<div className="feature_moc wow zoomIn" data-wow-delay="0ms" data-wow-duration="2000ms">
									<img src="https://res.cloudinary.com/logic-pill/image/upload/v1768138420/vape_dz6qi3.jpg"alt="Stock" ></img>
								</div>
							</div>
							<div className="col-sm-4 xs-padding">
								<ul className="feature_items inverted">
									<li className="feature_item wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="2000ms">
									
										<h3>Live resin infused pre-rolls with exceptional terpene profiles</h3>
										<p>West Coast–inspired innovation and quality benchmarks</p>
									</li>
									<li className="feature_item wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="2000ms">
										
									<h3>Small-batch, craft-grade production standards</h3>
										<p>Scalable manufacturing for multi-state operations</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>




				<section id="products" className="product_section bg-grey bd-bottom padding">
					<div className="container">
						<div className="section_heading align-center mb-40">
							<h2>Empowering Innovative Solutions through Terpenes	</h2>
							<p><a href="https://www.kickstarter.com/projects/jsm88/the-turtle-cutter-a-new-kind-of-cigar-cutter">Please subscribe now for updates!</a></p>
							<h3>Join the Movement: 
Everything behind the brand
</h3>
							<br></br>
							
                </div>
						               <div className="subscribe_wrap">
							<Form action="#" className="subscribe_form" validated={this.state.validate} onSubmit={this.handleSubmit}>
			
								
										<Form.Group>			
									<input type="email" className="form_input" placeholder="Enter Your Email Address..." name="email" id="subs-email" value={this.state.email} onChange={this.handleChange} required></input>
									<button type="submit" className="submit">Subscribe{this.state.isLoading && <span style={{ position: "absolute" }}><Loader
										type="BallTriangle"
										color="white"
										height={50}
										width={50}
									/></span>}</button>
									
									
								
											<div className="clearfix"></div>
											<div id="subscribe-result">
												<p className="subscription-success"></p>
												<p className="subscription-error"></p>
											</div>
										</Form.Group>
								
					
							
							</Form>
					  <ul className="social_link">
							<li><a href="https://www.facebook.com/profile.php?id=61575094924969"><i className="fa fa-facebook"></i></a></li>
							<li><a href=""><i className="fa fa-twitter"></i></a></li>
																	<li><a href="https://www.facebook.com/profile.php?id=61575094924969"><i className="fa fa-tumblr"></i></a></li>
																	<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
																	<li><a href="https://www.instagram.com/turtlecutter/"><i className="fa fa-instagram"></i></a></li>
																	<li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                </ul>
                </div>
            </div> 
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