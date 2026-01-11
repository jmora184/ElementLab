import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Image, Card, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "../../css/font-awesome.min.css";
import "../../css/elegant-font-icons.css";
import "../../css/elegant-line-icons.css";
import "../../css/bootstrap.min.css";
import "../../css/animate.min.css";
import "../../css/venobox/venobox.css";
import "../../css/owl.carousel.css";
import "../../css/main.css";
import "../../css/responsive.css";
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import Loader from "react-loader-spinner";
import ReactGA from 'react-ga'

ReactGA.initialize('UA-218915160-1')
ReactGA.pageview("/gallery")
class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            fullname: '',
            message: '',
            validate: false,
            isLoading: false,
        }

    }



    render() {
        const color = {
            color: 'maroon',
        }
        const headerStyle = {
            color: 'maroon',
        }
        const submitStyle = {
            backgroundColor: 'maroon',
        }

        const bold = {
            fontWeight: 'bold',
            color: 'maroon',
        }
        return (
            <React.Fragment>
                <section id="benefits" className="promo_section  bd-top bd-bottom padding">
                    <div className="container">
                        <div className="section_heading align-center mb-40">
                            <br></br>
                            <br></br>
                            <br></br>

                        </div>
                        <Container>
                            <Row style={{ height: "100%" }}>
                                <Col className="container" >
                                    <Card className="mt-5">
                                        <Card.Body>
                                            <Row>
                                                <Col className="mb-4 text-center">
                                                    <h2 style={color}>Gallery</h2>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="mb-4 text-center">
                                                    <br></br>
                                                    <h4 style={color}>Some images of our product so far</h4>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
                <section id="video" className="promo_section  bd-top bd-bottom padding">
                    <div className="container">

                        <div className="promo_items">
                            <div className="col-sm-4 col-xs-6 xs-padding">
                                <div className="promo_item wow zoomIn" data-wow-delay="0ms" data-wow-duration="2000ms">
                                    <img src="https://res.cloudinary.com/logic-pill/image/upload/c_scale,w_320/v1641748964/opencap_isyi3w.png" width="100%" alt="Mora_V1_Rendering_3 (1)"></img>                                     
                                </div>
                            </div>

                            <div className="col-sm-4 col-xs-6 xs-padding">
                                <div className="promo_item wow zoomIn" data-wow-delay="300ms" data-wow-duration="2000ms">
                                    <img src="https://res.cloudinary.com/logic-pill/image/upload/c_scale,w_320/v1641748963/test_fvn18a.png" alt="Stock" width="100%" ></img>                                        
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-6 xs-padding">
                                <div className="promo_item wow zoomIn" data-wow-delay="100ms" data-wow-duration="2000ms">
                                    <img src="https://res.cloudinary.com/logic-pill/image/upload/c_scale,w_320/v1641748964/back_zazcnf.png" width="100%" alt="small"></img>                                       
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section id="video" className="promo_section  bd-top bd-bottom padding">
                    <div className="container">

                        <div className="promo_items">
                            <div className="col-sm-4 col-xs-6 xs-padding">
                                <div className="promo_item wow zoomIn" data-wow-delay="0ms" data-wow-duration="2000ms">
                                    <img src="https://res.cloudinary.com/logic-pill/image/upload/c_scale,w_320/v1641748964/color_tr7q9j.png" width="100%" alt="Mora_V1_Rendering_3 (1)"></img>
                                </div>
                            </div>

                            <div className="col-sm-4 col-xs-6 xs-padding">
                                <div className="promo_item wow zoomIn" data-wow-delay="300ms" data-wow-duration="2000ms">
                                    <img src="https://res.cloudinary.com/logic-pill/image/upload/c_scale,w_320/v1641748964/opencapWkey_ljfjtz.png" alt="Stock" width="100%" ></img>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-6 xs-padding">
                                <div className="promo_item wow zoomIn" data-wow-delay="100ms" data-wow-duration="2000ms">
                                    <img src="https://res.cloudinary.com/logic-pill/image/upload/c_scale,w_320/v1641751553/front2_moif63.png" width="100%" alt="small"></img>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section id="video" className="promo_section  bd-top bd-bottom padding">
                    <div className="container">

                        <div className="promo_items">
                            <div className="col-sm-4 col-xs-6 xs-padding">
                                <div className="promo_item wow zoomIn" data-wow-delay="0ms" data-wow-duration="2000ms">
                                    <img src="https://res.cloudinary.com/logic-pill/image/upload/c_scale,w_320/v1641748964/together_qxyxre.png" width="100%" alt="Mora_V1_Rendering_3 (1)"></img>
                                </div>
                            </div>

                            <div className="col-sm-4 col-xs-6 xs-padding">
                                <div className="promo_item wow zoomIn" data-wow-delay="300ms" data-wow-duration="2000ms">
                                    <img src="https://res.cloudinary.com/logic-pill/image/upload/c_scale,w_320/v1641748963/side_lyjusc.png" alt="Stock" width="100%" ></img>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-6 xs-padding">
                                <div className="promo_item wow zoomIn" data-wow-delay="100ms" data-wow-duration="2000ms">
                                    <img src="https://res.cloudinary.com/logic-pill/image/upload/c_scale,w_320/v1641748963/test2_tuzqdo.png" width="100%" alt="small"></img>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section id="video" className="promo_section  bd-top bd-bottom padding">
                    <div className="container">

                        <div className="promo_items">
                            <div className="col-sm-4 col-xs-6 xs-padding">
                                <div className="promo_item wow zoomIn" data-wow-delay="0ms" data-wow-duration="2000ms">
                                    <img src="https://res.cloudinary.com/logic-pill/image/upload/c_scale,w_320/v1641750459/maroon_dloxdn.jpg" width="100%" alt="Mora_V1_Rendering_3 (1)"></img>
                                </div>
                            </div>

                            <div className="col-sm-4 col-xs-6 xs-padding">
                                <div className="promo_item wow zoomIn" data-wow-delay="300ms" data-wow-duration="2000ms">
                                    <img src="https://res.cloudinary.com/logic-pill/image/upload/c_scale,w_320/v1641748963/stacked_hnsr9y.png" alt="Stock" width="100%" ></img>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-6 xs-padding">
                                <div className="promo_item wow zoomIn" data-wow-delay="100ms" data-wow-duration="2000ms">
                                    <img src="https://res.cloudinary.com/logic-pill/image/upload/c_scale,w_320/v1641754569/capWorking_afh0st.jpg" width="100%" alt="small"></img>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default withRouter(Gallery);