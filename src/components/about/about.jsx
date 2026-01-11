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
ReactGA.pageview("/about")
class About extends Component {
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
                                                    <h2 style={color}>About The Team!</h2>
                                                </Col>
                                            </Row>

                                            <br></br>
                                            <Row>
                                                <Col className="mb-4 text-center">                                      
                                                    <br></br>
                                                    <h4 style={color}>Thank you for following us on this journey!</h4>
                                                </Col>
                                            </Row>
                                            <br></br>


                                            <Row>
                                                <Col className="mb-4 text-center">
                                                    <h5 style={color}>I created this product to help others. But I knew I did not have all the required skills to make it the way I wanted. Me only being a Software developer. I seeked help from a professional electronics engineer to help me design
                                                    the PCB(Techtronix). And I also sought out a 3D modeling company (3dextremes) to help me with the product design. Today we now have the finished product. We will always keep improving and trying to make the Clue Cap as best as it can be.
                                                        We plan to gain support on Kickstarter so that we can improve the product.</h5>
                                                </Col>
                                            </Row>
                                            <br></br>
                                            <br></br>
                                            <Row>
                                                <Col className="mb-4 text-center">
                                                    {!isMobile ? < img src="https://res.cloudinary.com/logic-pill/image/upload/v1644095995/aboutus3_zmlrm4.png" alt="Stock" ></img> :
                                                        < img src="https://res.cloudinary.com/logic-pill/image/upload/c_scale,w_200/v1644095995/aboutus3_zmlrm4.png" alt="Stock" ></img>      }
                                                </Col>
                                            </Row>
                                            <br></br>
                                            <Container id="section2">
                                     
                                            </Container>
                                            <br></br>
                                            <br></br>

                                        </Card.Body>
                                    </Card>

                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>


            </React.Fragment>
        );
    }
}

export default withRouter(About);