import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Image, Card } from "react-bootstrap";
import { BrowserView, MobileView } from 'react-device-detect';
import { withRouter } from "react-router-dom";
import ReactGA from 'react-ga'

ReactGA.initialize('UA-218915160-1')
ReactGA.pageview("/updates")
class Updates extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {

    }
    render() {
        const color = {
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
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <Container>
                    <Row style={{ height: "100%" }}>
                        <Col className="container" >
                            <Card className="mt-5">
                                <Card.Body>
                                    <Col className="mb-4 text-center">
                                        <h2 style={color}>Updates</h2>
                                    </Col>
                                    <p style={bold}>December 29-2021</p><br></br>
                                    <p>Production Video has been completed</p><br></br>
                                    <p style={bold}>November 11-2-21</p><br></br>
                                    <p>Protyping complete testting started</p><br></br>
                                    <p style={bold}>September 5-2021</p><br></br>
                                    <p>Reached out to 3dextremes for desgin help.</p><br></br>
                                    <p style={bold}>August 21-2021</p><br></br>
                                    <p>Prototype has completed</p><br></br>
                                    <p style={bold}>July 7-2021</p><br></br>
                                    <p>Idea started. Going into prototype phase.</p>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        );
    }
}

export default withRouter(Updates);