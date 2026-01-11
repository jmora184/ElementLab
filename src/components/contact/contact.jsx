    import React, { Component } from 'react';
    import { Container, Row, Col, Form, Button, Image, Card, Spinner } from "react-bootstrap";
    import { withRouter } from "react-router-dom";
import { method } from "./contactService";
import "../../css/font-awesome.min.css";
import "../../css/elegant-font-icons.css";
import "../../css/elegant-line-icons.css";
import "../../css/bootstrap.min.css";
import "../../css/animate.min.css";
import "../../css/venobox/venobox.css";
import "../../css/owl.carousel.css";
import "../../css/main.css";
import "../../css/responsive.css";
import { BrowserView, MobileView } from 'react-device-detect';
import Loader from "react-loader-spinner";
import clueCap from "../../img/newCClogo.png";
import ReactGA from 'react-ga'

ReactGA.initialize('UA-218915160-1')
ReactGA.pageview("/contact")
    class Contact extends Component {
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
                    fullname: this.state.fullname,
                    message: this.state.message
                };

                var that = this;
                method(text)
                    .then(function (response) {
                        that.setState({ isLoading: false })
                        return response.json();
                    })
                    .then(function (data) {
                        const items = data;
                        if (data) {
                            alert("Thank you! we appreciate the feedback")
                            window.location.reload();
                        }
                    }, (error) => {
                        if (error) {
                            alert('sorry system down');
                            this.setState({
                                isLoading: false
                            })
                            window.location.reload();
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

        render() {
            const color = {
                color: 'darkGreen',
            }
            const headerStyle = {
                color: 'darkGreen',
            }
            const submitStyle = {
                backgroundColor: 'darkGreen',
            }

            const bold = {
                fontWeight: 'bold',
                color: 'darkGreen',
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
                                                        <h2 style={color}>The Turtle Cutter is a new Product!</h2>
                                                    </Col>
                                                </Row>

                                                <br></br>
                                                <Row>
                                                    <Col className="mb-4 text-center">
                                                       
                                                        <br></br>
                                                        <br></br>
                                                        <h4 style={color}>We would appreciate any feedback you can provide. We will listen and continue to improve</h4>
                                                    </Col>
                                                </Row>
                                                <br></br>


                                                <Row>
                                                    <Col className="mb-4 text-center">
                                                        <h5 style={color}>Or if you are experiencing an issue please provide details below and we will do our best to help.</h5>
                                                    </Col>
                                                </Row>
                                                <br></br>
                                                <Container id="section2">

                                                    <Form id="about-interact" validated={this.state.validate} onSubmit={this.handleSubmit}>
                                                        <Form.Group controlId="ControlTextarea1">
                                                            <Form.Control as="textarea" rows="5" name="message" value={this.state.message} onChange={this.handleChange} required />
                                                        </Form.Group>
                                                        <Row id="about-input">
                                                            <Col sm={4} >
                                                                <Form.Group controlId="ControlInput1">
                                                                    <Form.Control type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleChange} required />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col sm={4}>
                                                                <Form.Group controlId="ControlInput2">
                                                                    <Form.Control type="input" placeholder="Full Name" name="fullname" value={this.state.fullname} onChange={this.handleChange} />
                                                                </Form.Group>
                                                            </Col>
                                                            <Col sm={4}>
                                                                <Button type="submit" value="Submit" variant="primary" size="lg" style={{backgroundColor:"darkGreen"}}block="true" disabled={this.state.isLoading}>
                                                                    <span>{!this.state.isLoading ? <span>Send</span>:<span>Sending...</span>}</span></Button>
                                                            </Col>
                                                        </Row>
                                                    </Form>
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

    export default withRouter(Contact);